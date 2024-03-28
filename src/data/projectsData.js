import solarsystem from '../assets/solarsystem.png';
import starwars from '../assets/starwars.png';
import tryunfo from '../assets/tryunfo.png';
import trybewallet from '../assets/trybewallet.png';
import trybersdragons from '../assets/trybersdragons.png';
import tfc from '../assets/tfc.png';
import alg from '../assets/project_algorithms.png';
import inventory from '../assets/inventory.png';
import traduzo from '../assets/traduzo.png';
import spotnews from '../assets/spotnews.png';
import ghibli from '../assets/ghibli.png';
import trybetunes from '../assets/trybetunes.png';


const projectsFEData = [
    {
        name: 'Star Wars Planets Search',
        description: 'Website that lists Star Wars planets and\nallows you to search for them by name and other filters.',
        image: starwars,
        code: 'https://github.com/danillo-expedito/project-starwars-planets-search/tree/main',
        live: 'https://project-starwars-planets-search-eta.vercel.app/',
        frameworks: ['React', 'Redux', 'JavaScript', 'HTML', 'TailwindCSS']
    },
    {
        name: 'Solar System Missions',
        description: 'Webiste that lists all the missions to the planets and moons of the solar system.',
        image: solarsystem,
        code: 'https://github.com/danillo-expedito/project-solar-system',
        live: 'https://project-solar-system-kohl.vercel.app/',
        frameworks: ['React', 'Redux', 'JavaScript', 'HTML', 'TailwindCSS']
    },
    {
        name: 'TrybeWallet',
        description: 'Digital wallet that you can register, edit and delete expenses. It also has a currency conversion feature.',
        image: trybewallet,
        code: 'https://github.com/danillo-expedito/project-trybewallet',
        live: 'https://project-trybewallet-green.vercel.app/',
        frameworks: ['React', 'Redux', 'JavaScript', 'HTML', 'TailwindCSS']
    },
    {
        name: 'Tryunfo',
        description: 'A card game based on "Trunfo".\nWith the theme of a famous japanese anime named "Inuyasha".',
        image: tryunfo,
        code: 'https://github.com/danillo-expedito/project-tryunfo',
        live: 'https://project-tryunfo-nu.vercel.app/',
        frameworks: ['React', 'Redux', 'JavaScript', 'HTML', 'TailwindCSS']
    },
    {
        name: 'Ghibli Animations',
        description: 'Website that lists the Studio Ghibli animations and their details.',
        image: ghibli,
        live: 'https://ghibli-animations-danillo-expeditos-projects.vercel.app/',
        frameworks: ['React', 'JavaScript', 'HTML']
    },
    {
        name: 'TrybeTunes',
        description: 'A music streaming website that allows you to search for music and play a preview.',
        image: trybetunes,
        code: 'https://github.com/danillo-expedito/trybetunes-vite-ts',
        live: 'https://trybetunes-vite-ts-zeta.vercel.app/',
        frameworks: ['Vite', 'TypeScript' ]
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
    },
    {
        name: 'Project Algorithms',
        description: 'A collection of algorithms in Python.',
        image: alg,
        code: 'https://github.com/danillo-expedito/project-algorithms',
        frameworks: ['Python', 'Pytest', 'Flake8']
    },
    {
        name: 'Inventory Report',
        description: 'A python script that generates a report of the inventory of a company.',
        image: inventory,
        code: 'https://github.com/danillo-expedito/project-inventory-report',
        frameworks: ['Python', 'Pytest']
    },
    {
        name: 'Traduzo',
        description: 'A Flask API that translates text from one language to another.',
        image: traduzo,
        code: 'https://github.com/danillo-expedito/projeto-traduzo',
        frameworks: ['Python', 'Flask', 'MongoDB', 'Pytest', 'Docker']
    },
    {
        name: 'Spotnews',
        description: 'A Django API that allows you to create, edit and delete news.',
        image: spotnews,
        code: 'https://github.com/danillo-expedito/project-spotnews',
        frameworks: ['Python', 'Django', 'Rest', 'Pytest', 'Docker', 'MySQL']
    }
]

export {
    projectsFEData,
    projectsBEData,
}