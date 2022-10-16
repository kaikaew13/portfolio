import {
  mongo,
  express,
  react,
  node,
  cpp,
  go,
  colly,
  python,
  tkinter,
  postgres,
  kitsuio,
  p_engine,
  manganato,
  movie,
  github_white,
  linkedin_white,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
];

export const about = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id ex
non quam semper dictum. In libero massa, tempor quis urna et,
imperdiet ornare metus. Praesent vitae sagittis dui, at rhoncus
turpis. Vestibulum ac diam sit amet lorem tempor ultrices. Nam vel
tortor quis leo pharetra laoreet.
`;

export const projects = [
  {
    id: 'project-0',
    title: 'Kitsuo.io Clone',
    poster: kitsuio,
    desc: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Quisque id ex non quam semper dictum. In libero massa,
    tempor quis urna et, imperdiet ornare metus. Praesent vitae
    sagittis dui, at rhoncus turpis. Vestibulum ac diam sit amet
    lorem tempor ultrices. Nam vel tortor quis leo pharetra
    laoreet.
    `,
    techStacks: [mongo, express, react, node],
    link: 'https://github.com/kaikaew13/my-kitsu-clone',
  },
  {
    id: 'project-1',
    title: '3D Projection Engine',
    poster: p_engine,
    desc: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Quisque id ex non quam semper dictum. In libero massa,
    tempor quis urna et, imperdiet ornare metus. Praesent vitae
    sagittis dui, at rhoncus turpis. Vestibulum ac diam sit amet
    lorem tempor ultrices. Nam vel tortor quis leo pharetra
    laoreet.
    `,
    techStacks: [cpp],
    link: 'https://github.com/kaikaewkmitl/3d-projection-engine',
  },
  {
    id: 'project-2',
    title: 'Movie Tracking App',
    poster: movie,
    desc: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Quisque id ex non quam semper dictum. In libero massa,
    tempor quis urna et, imperdiet ornare metus. Praesent vitae
    sagittis dui, at rhoncus turpis. Vestibulum ac diam sit amet
    lorem tempor ultrices. Nam vel tortor quis leo pharetra
    laoreet.
    `,
    techStacks: [python, tkinter, postgres],
    link: 'https://github.com/kaikaewkmitl/movie-tracker',
  },
  {
    id: 'project-3',
    title: 'Manganato CLI',
    poster: manganato,
    desc: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Quisque id ex non quam semper dictum. In libero massa,
    tempor quis urna et, imperdiet ornare metus. Praesent vitae
    sagittis dui, at rhoncus turpis. Vestibulum ac diam sit amet
    lorem tempor ultrices. Nam vel tortor quis leo pharetra
    laoreet.
    `,
    techStacks: [go, colly],
    link: 'https://github.com/kaikaew13/manganato-cli',
  },
];

export const contacts = [
  {
    id: 'github',
    icon: github_white,
    link: 'https://github.com/kaikaew13',
  },
  {
    id: 'linkedin',
    icon: linkedin_white,
    link: 'https://www.linkedin.com/in/mahnun-saratunti-7ba3bb24b',
  },
];
