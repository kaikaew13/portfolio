import {
  mongo,
  express,
  react,
  node,
  cpp,
  go,
  c,
  colly,
  python,
  tkinter,
  postgres,
  kitsuio,
  p_engine,
  ascii_c,
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
My name is Yoshikage Kira. I'm 33 years old. My house is in the 
northeast section of Morioh, where all the villas are, and I am not married. 
I work as an employee for the Kame Yu department stores, and I get home 
every day by 8 PM at the latest. I don't smoke, but I occasionally drink. 
I'm in bed by 11 PM, and make sure I get eight hours of sleep, no matter what. 
After having a glass of warm milk and doing about twenty minutes of stretches 
before going to bed, I usually have no problems sleeping until morning. 
Just like a baby, I wake up without any fatigue or stress in the morning.
I was told there were no issues at my last check-up. I'm trying to explain 
that I'm a person who wishes to live a very quiet life. I take care not to 
trouble myself with any enemies, like winning and losing, that would cause me 
to lose sleep at night. That is how I deal with society, and I know that 
is what brings me happiness. Although, if I were to fight I wouldn't lose to anyone.
`;

export const projects = [
  {
    id: 'project-0',
    title: 'Kitsuo.io Clone',
    poster: kitsuio,
    desc: `
    A web app I made for practice using NodeJS and ReactJS, 
    by making a clone of an anime website, Kitsu.io, 
    my first ever project. Built using MERN stack.
    `,
    techStacks: [mongo, express, react, node],
    link: 'https://github.com/kaikaew13/my-kitsu-clone',
  },
  {
    id: 'project-1',
    title: '3D Projection Engine',
    poster: p_engine,
    desc: `
    This program uses self-implemented graphic library to
    projects a 3D illusion into a 2D plane 
    by drawing inclined or declined lines from coordinates 
    or vertices in a certain angle from a perspective point. 
    Group project for C-programming class made by 
    Mahnun Saratunti (64011456) and 
    Phobphoomin Siriboon (64011548).
    `,
    techStacks: [cpp],
    link: 'https://github.com/kaikaewkmitl/3d-projection-engine',
  },
  {
    id: 'project-2',
    title: 'Movie Tracking App',
    poster: movie,
    desc: `
    A GUI program built using tkinter. Allows user to 
    conveniently keep track of the movies they've watched. 
    KMITL's Introduction To Computers And Programming project 
    by Mahnun Saratunti (64011456). All data related to 
    movies are provided by The Movie Database (TMDb) API.
    `,
    techStacks: [python, tkinter, postgres],
    link: 'https://github.com/kaikaewkmitl/movie-tracker',
  },
  {
    id: 'project-3',
    title: 'Manganato CLI',
    poster: manganato,
    desc: `
      Manganato's manga downloader CUI and CLI written in Go. 
      Utilize manganato-api, an unofficial Manganato web scraper 
      written by me in Go using gocolly.
    `,
    techStacks: [go, colly],
    link: 'https://github.com/kaikaew13/manganato-cli',
  },
  {
    id: 'project-4',
    title: 'ASCII Chart Generator',
    poster: ascii_c,
    desc: `
    A program to count ASCII characters from files 
    provided then generates a chart displaying counts 
    of each character. KMITL's C-programming individual 
    project by Mahnun Saratunti (64011456).
    `,
    techStacks: [c],
    link: 'https://github.com/kaikaewkmitl/ascii-chart',
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
