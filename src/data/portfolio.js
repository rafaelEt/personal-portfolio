import { getProject } from './projects';

// Wraps an existing project record into an accomplishment card entry.
const fromProject = (slug, region, overrides = {}) => {
  const p = getProject(slug);
  return {
    slug: p.slug,
    region,
    type: p.type,
    title: p.title,
    description: p.description,
    achievements: p.contributions,
    tech: p.tech,
    image: p.image,
    status: p.metrics,
    ...overrides,
  };
};

export const accomplishments = {
  local: [
    fromProject('interestly', 'LOCAL', {
      type: 'SOCIAL NETWORKING',
      description:
        'Random video chat for professionals with shared interests — built and scaled solo.',
      achievements: [
        'Scaled solo to 5,000 users',
        'Interest-matching algorithm built from scratch',
        'Low-latency Socket.IO pairing with secure WebRTC calls',
      ],
      tech: ['React', 'Node.js', 'Docker', 'Nginx'],
      status: '5k Users',
      video: 'https://youtu.be/PNBPV5HULHY',
    }),
    fromProject('shir-shir', 'LOCAL'),
    fromProject('werefa', 'LOCAL'),
    fromProject('lumi', 'LOCAL'),
  ],
  global: [
    fromProject('wealth-circles', 'GLOBAL'),
    fromProject('duelo', 'GLOBAL'),
    fromProject('orcha', 'GLOBAL'),
    fromProject('linklok', 'GLOBAL', {
      video: 'https://youtu.be/pU6r2ZsFVfg',
    }),
  ],
};

export const moments = [
  {
    type: 'PRESENTATION',
    title: 'Pitching For Government Officials',
    description:
      'Presenting the solution I had for queue issues in government sectors.',
    image: '/nifas.jpg',
  },
  {
    type: 'Video',
    title: 'Building From Scratch',
    description:
      'A walkthrough of the platform that grew to thousands of users.',
    image: '/screenshots/guest.jpg',
    link: 'https://youtu.be/uplEcvbheZw',
  },
  {
    type: 'PARTNERSHIP',
    title: 'Second Strategic Partnership',
    description:
      'The moment for the second partnership signing for Interestly.',
    image: '/jasper.png',
  },
  {
    type: 'Video',
    title: 'Founder Journey',
    description:
      'Entrepreneurship and its path',
    image: '/screenshots/pod.jpg',
    link: 'https://youtu.be/9cRoPq9Aro4',
  },
];

export const contactLinks = [
  {
    label: 'EMAIL',
    value: 'hello@rafaeltadesse.dev',
    href: 'mailto:hello@rafaeltadesse.dev',
  },
  {
    label: 'X / TWITTER',
    value: '@AtoRafael',
    href: 'https://x.com/RafaelTade522',
  },
  {
    label: 'GITHUB',
    value: 'rafaelEt',
    href: 'https://github.com/rafaelEt',
  },
  {
    label: 'LINKEDIN',
    value: 'Rafael Tadesse',
    href: 'https://www.linkedin.com/in/rafael-tadesse-96274330b/',
  },
];

// Drop the real PDF into /public and this link starts working as-is.
export const CV_URL = '/RAFAEL_CV.pdf';
