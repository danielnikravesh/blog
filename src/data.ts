export const root = 'https://dvc.org';

export const ids = {
  subscribe: 'subscribe'
};

export const siteLinks = {
  root,
  blog: '/',
  chat: `${root}/chat`,
  docs: `${root}/doc`,
  features: `${root}/features`,
  getStarted: `${root}/doc/get-started`,
  github: 'https://github.com/iterative/dvc',
  iterative: 'https://iterative.ai/',
  overview: `${root}/?`,
  support: `${root}/support`,
  twitter: 'https://twitter.com/DVCorg'
};

export const topMenuItems = [
  {
    title: 'Features',
    href: siteLinks.features
  },
  {
    title: 'Doc',
    href: siteLinks.docs
  },
  {
    title: 'Blog',
    href: siteLinks.blog
  },
  {
    title: 'Chat',
    href: siteLinks.chat
  },
  {
    title: 'GitHub',
    href: siteLinks.github
  },
  {
    title: 'Support',
    href: siteLinks.support
  }
];

export const footerMenuItems = [
  {
    section: 'Product',
    links: [
      {
        title: 'Overview',
        href: siteLinks.overview
      },
      {
        title: 'Features',
        href: siteLinks.features
      }
    ]
  },
  {
    section: 'Help',
    links: [
      {
        title: 'Support',
        href: siteLinks.support
      },
      {
        title: 'Get started',
        href: siteLinks.getStarted
      },
      {
        title: 'Chat',
        href: siteLinks.chat,
        icon: 'chat'
      },
      {
        title: 'Documentation',
        href: siteLinks.docs
      }
    ]
  },
  {
    section: 'Company',
    links: [
      {
        title: 'Blog',
        href: siteLinks.blog
      },
      {
        title: 'Iterative.ai',
        href: siteLinks.iterative,
        icon: 'iterative'
      }
    ]
  },
  {
    section: 'Social',
    links: [
      {
        title: 'Twitter',
        href: siteLinks.twitter,
        icon: 'twitter'
      },
      {
        title: 'GitHub',
        href: siteLinks.github,
        icon: 'github'
      },
      {
        title: 'Discord',
        href: siteLinks.chat,
        icon: 'discord'
      }
    ]
  }
];
