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
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'projects',
  },
];

export const projects = [
  {
    id: 'project-0',
    title: 'Kitsuo.io Clone',
    poster: kitsuio,
    desc: '',
    techStacks: [mongo, express, react, node],
    link: 'https://github.com/kaikaew13/my-kitsu-clone',
  },
  {
    id: 'project-1',
    title: '3D Projection Engine',
    poster: p_engine,
    desc: '',
    techStacks: [cpp],
    link: 'https://github.com/kaikaewkmitl/3d-projection-engine',
  },
  {
    id: 'project-2',
    title: 'Movie Tracking App',
    poster: movie,
    desc: '',
    techStacks: [python, tkinter, postgres],
    link: 'https://github.com/kaikaewkmitl/movie-tracker',
  },
  {
    id: 'project-3',
    title: 'Manganato CLI',
    poster: manganato,
    desc: '',
    techStacks: [go, colly],
    link: 'https://github.com/kaikaew13/manganato-cli',
  },
];
