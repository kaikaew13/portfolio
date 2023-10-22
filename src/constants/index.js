import {
  mongo,
  express,
  react,
  node,
  cpp,
  go,
  c,
  java,
  colly,
  python,
  tkinter,
  postgres,
  kitsuio,
  p_engine,
  ascii_c,
  manganato,
  movie,
  makruk,
  github_white,
  linkedin_white,
  nextjs,
  typescript,
  mui,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
    link: '#about',
  },
  {
    id: 'experiences',
    title: 'Experiences',
    link: '#experiences',
  },
  {
    id: 'projects',
    title: 'Projects',
    link: '#projects',
  },
  {
    id: 'resume',
    title: 'Resume',
    link: 'https://github.com/kaikaew13/kaikaew13/blob/main/Mahnun_resume.pdf',
  },
];

export const about = [
  `
  Hi! I'm Mahnun Saratunti AKA Kaikaew. I'm a second year university 
  student, currently studying for a Bachelor's degree in Software 
  Engineering at KMITL (King Mongkut's Institute of Technology Ladkrabang). 
  My interest and passion for programming started in my secondary school 
  where I was shown a simple platforming game made using JavaScript by 
  my computer science teacher. 
  `,
  `
  I self-taught my self web development during my free time, therefore, 
  I have solid understanding in both front-end and back-end.
  I'm very keen in new upcoming technologies, escpecially if it is related 
  to webdev or devops fields, as these are area of my interest and 
  I'm looking to continuously improve my skills.
  `,
];

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
  {
    id: 'project-5',
    title: 'MakRukThai',
    poster: makruk,
    desc: `
    A GUI Makruk Thai multiplayer desktop game 
    made using Java Swing. KMITL's Advanced Object-Oriented 
    Programming group project by me and my friends. 
    Utilize socket IO to provide multiplayer, players 
    can connected via IP address and port number. 
    `,
    techStacks: [java],
    link: 'https://github.com/natheetarn/MakRukThaiJava',
  },
];

export const experiences = [
  {
    id: 'experience-0',
    title: 'Amity',
    timeline: 'May - August 2023',
    role: 'Front-end Developer Intern',
    desc: `
    Developed the first phase of a new workforce management 
    system for Royal Thai Police as a client. Worked on  
    building new reusable components for the team, styling 
    pages for several systems such as KPI evaluation, arrest warrant 
    and more, as well as integrating front-end with 
    back-end.
    `,
    techStacks: [nextjs, typescript, mui],
    link: 'https://www.amity.co',
  },
  {
    id: 'experience-1',
    title: 'Amity',
    timeline: 'May - August 2023',
    role: 'Front-end Developer Intern',
    desc: `
    A GUI Makruk Thai multiplayer desktop game 
    made using Java Swing. KMITL's Advanced Object-Oriented 
    Programming group project by me and my friends. 
    Utilize socket IO to provide multiplayer, players 
    can connected via IP address and port number. 
    `,
    techStacks: [react, java],
    link: 'https://www.amity.co',
  },
  {
    id: 'experience-2',
    title: 'Amity',
    timeline: 'May - August 2023',
    role: 'Front-end Developer Intern',
    desc: `
    A GUI Makruk Thai multiplayer desktop game 
    made using Java Swing. KMITL's Advanced Object-Oriented 
    Programming group project by me and my friends. 
    Utilize socket IO to provide multiplayer, players 
    can connected via IP address and port number. 
    `,
    techStacks: [react, java],
    link: 'https://www.amity.co',
  },
  {
    id: 'experience-3',
    title: 'Amity',
    timeline: 'May - August 2023',
    role: 'Front-end Developer Intern',
    desc: `
    A GUI Makruk Thai multiplayer desktop game 
    made using Java Swing. KMITL's Advanced Object-Oriented 
    Programming group project by me and my friends. 
    Utilize socket IO to provide multiplayer, players 
    can connected via IP address and port number. 
    `,
    techStacks: [react, java],
    link: 'https://www.amity.co',
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
