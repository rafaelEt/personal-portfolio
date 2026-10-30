import { useEffect, useState } from 'react';

const PROJECT_PATH = /^\/project\/([A-Za-z0-9-]+)\/?$/;
const PORTFOLIO_PATH = /^\/portfolio\/?$/;
const SECTION_ANCHOR = /^[A-Za-z][\w-]*$/;

const isProjectPath = (path) => PROJECT_PATH.test(path);
const isPortfolioPath = (path) => PORTFOLIO_PATH.test(path);

const parse = () => {
  const projectMatch = window.location.pathname.match(PROJECT_PATH);
  if (projectMatch) return { name: 'project', slug: projectMatch[1], anchor: '' };

  const hash = window.location.hash.replace(/^#/, '');
  const anchor = SECTION_ANCHOR.test(hash) ? hash : '';

  if (isPortfolioPath(window.location.pathname)) {
    return { name: 'portfolio', slug: '', anchor };
  }

  return { name: 'home', slug: '', anchor };
};

let savedHomeScroll = 0;

export const getSavedHomeScroll = () => savedHomeScroll;

export const navigate = (to) => {
  const [path] = to.split('#');

  if (isProjectPath(path) && !isProjectPath(window.location.pathname)) {
    savedHomeScroll = window.scrollY;
  }

  window.history.pushState({ fromPortfolio: true }, '', to);
  window.dispatchEvent(new PopStateEvent('popstate'));
};

export const goBack = () => {
  if (window.history.state?.fromPortfolio && window.history.length > 1) {
    window.history.back();
  } else {
    navigate('/');
  }
};

export const projectPath = (slug) => `/project/${slug}`;

export function useRoute() {
  const [route, setRoute] = useState(parse);

  useEffect(() => {
    const update = () => {
      const hash = window.location.hash.replace(/^#/, '');

      // Section anchors (#products) opened while on a project page -> go home first
      // (anchors on /portfolio stay on /portfolio)
      if (
        hash &&
        SECTION_ANCHOR.test(hash) &&
        window.location.pathname !== '/' &&
        !isPortfolioPath(window.location.pathname)
      ) {
        window.history.pushState({ fromPortfolio: true }, '', `/#${hash}`);
      }

      setRoute(parse());
    };

    const onLinkClick = (event) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const link = event.target.closest?.('a');
      if (!link || link.target === '_blank') return;

      const url = new URL(link.href, window.location.origin);
      if (url.origin !== window.location.origin) return;
      if (!isProjectPath(url.pathname)) return;

      event.preventDefault();
      navigate(`${url.pathname}${url.search}${url.hash}`);
    };

    window.addEventListener('popstate', update);
    window.addEventListener('hashchange', update);
    document.addEventListener('click', onLinkClick);

    return () => {
      window.removeEventListener('popstate', update);
      window.removeEventListener('hashchange', update);
      document.removeEventListener('click', onLinkClick);
    };
  }, []);

  return route;
}
