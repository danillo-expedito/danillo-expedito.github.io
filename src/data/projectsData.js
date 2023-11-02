import solarsystem from '../assets/solarsystem.png';
import starwars from '../assets/starwars.png';
import tryunfo from '../assets/tryunfo.png';
import trybewallet from '../assets/trybewallet.png';
import trybersdragons from '../assets/trybersdragons.png';
import tfc from '../assets/tfc.png';

const projectsFEData = [
    {
        name: 'Star Wars Planets Search',
        description: 'Website that lists Star Wars planets and\nallows you to search for them by name and other filters.',
        image: starwars,
        code: 'https://github.com/danillo-expedito/project-starwars-planets-search/tree/main',
        live: 'https://danillo-expedito.github.io/project-starwars-planets-search/',
        frameworks: ['React', 'Redux', 'JavaScript', 'HTML', 'TailwindCSS']
    },
    {
        name: 'Solar System Missions',
        description: 'Webiste that lists all the missions to the planets and moons of the solar system.',
        image: solarsystem,
        code: 'https://github.com/danillo-expedito/project-solar-system',
        live: 'https://danillo-expedito.github.io/project-solar-system/',
        frameworks: ['React', 'Redux', 'JavaScript', 'HTML', 'TailwindCSS']
    },
    {
        name: 'TrybeWallet',
        description: 'Digital wallet that you can register, edit and delete expenses. It also has a currency conversion feature.',
        image: trybewallet,
        code: 'https://github.com/danillo-expedito/project-trybewallet',
        live: 'https://danillo-expedito.github.io/project-trybewallet/',
        frameworks: ['React', 'Redux', 'JavaScript', 'HTML', 'TailwindCSS']
    },
    {
        name: 'Tryunfo',
        description: 'A card game based on "Trunfo".\nWith the theme of a famous japanese anime named "Inuyasha".',
        image: tryunfo,
        code: 'https://github.com/danillo-expedito/project-tryunfo',
        live: 'https://danillo-expedito.github.io/project-tryunfo/',
        frameworks: ['React', 'Redux', 'JavaScript', 'HTML', 'TailwindCSS']
    },
];

const projectsBEData = [
    {
        name: 'Trybers and Dragons',
        description: 'A nodeJS API that allows you to create, edit and delete characters and their attributes. Based on D&D.',
        image: trybersdragons,
        code: 'https://github.com/danillo-expedito/project-trybers-and-dragons',
        frameworks: ['TypeScript', 'NodeJS', 'Express', 'MySQL', 'Sequelize']
    },
    {
        name: 'Trybe Futebol Clube',
        description: 'a nodeJS API that has the functionality of a football leaderboard.',
        image: tfc,
        code: 'https://github.com/danillo-expedito/project-trybe-futebol-clube',
        frameworks: ['TypeScript', 'NodeJS', 'Express', 'MySQL', 'Sequelize']
    }
]

export {
    projectsFEData,
    projectsBEData,
}