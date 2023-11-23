// mockData.ts

import { Company, PersonalDetails, Project } from './types';

export const mockPersonalDetails: PersonalDetails = {
    _id: '601650e62147e23bf8664148',
    name: 'Robert Gherman',
    about: '"A fresher with experience", this line says exactly who he is. He is a react developer who crafts beautiful web and apps. His perfect balance of technical & managerial skills stands him apart from the crowd.',
    work: {
        company: 'Atos',
        designation: 'Web developer',
        logo: '/images/companies/atos.png',
        resume: 'https://drive.google.com/file/d/1l1-gpiw6VHF1oY26EqQiSjOCEGKY5o1B/view?usp=drive_link',
        profile_img: '/images/bob.png'
    },
    socialMedia: [
        {
            link: 'mailto:gherman.robert01@gmail.com',
            image_file: '/images/icons/mail.svg',
            alt_text: 'Email'
        },
        {
            link: 'https://www.linkedin.com/in/robert-petrica-gherman-20b040291',
            image_file: '/images/icons/linkedin.svg',
            alt_text: 'LinkedIn'
        },
        {
            link: '/',
            image_file: '/images/icons/facebook.svg',
            alt_text: 'Facebook'
        },
        {
            link: 'https://github.com/robert-gherman',
            image_file: '/images/icons/github.svg',
            alt_text: 'Github'
        },
        {
            link: '/',
            image_file: '/images/icons/instagram.svg',
            alt_text: 'Instagram'
        }
    ],
    logo: '/images/logos.png',
    resume: 'https://drive.google.com/file/d/1l1-gpiw6VHF1oY26EqQiSjOCEGKY5o1B/view?usp=drive_link',
    profile_img: '/images/ion.png'
};

export const mockProjectDetails: Project[] = [
    {
        slug: 'wer-waldo',
        tagline: 'Test your observation skills and find Waldo hidden in the pictures.',
        img: '/images/projects/wewaldo.png',
        name: "Where's Waldo",
        tags: ['HTML', 'CSS', 'JavaScript'],
        category: ['web'],
        github: 'https://github.com/robert-gherman/werwaldo',
        featured: true,
        description:
            'Test your observation skills and find Waldo hidden in the pictures. The game features a timer, a scoreboard, and login authentication with Google'
    },
    {
        slug: 'webscrapper',
        tagline: 'Api created from scrapping another website',
        img: '/images/projects/webscrapper.PNG',
        name: 'WebScrapper',
        tags: ['HTML', 'CSS', 'JavaScript'],
        category: ['web'],
        github: 'https://github.com/robert-gherman/webscrapper',
        featured: true,
        description:
            'A web application utilizing Node.js for the backend, React for the frontend, and CSS frameworks like Tailwind CSS and DaisyUI for styling. The backend API scrapes data from a website, performs sentiment analysis, and returns processed data to the frontend.Overcoming challenges with tools like Puppeteer and Playwright.'
    },
    {
        slug: 'zoodoro',
        tagline: 'Zoodoro same concept as pomodoro',
        img: '/images/projects/zoodoro.png',
        name: 'Zoodoro',
        tags: ['HTML', 'CSS', 'TypeScript'],
        category: ['web'],
        github: 'https://github.com/robert-gherman/zoodoro',
        featured: true,
        description:
            'Zoodoro is a unique productivity app that combines the principles of the Pomodoro Technique with a gamified twist. Built on a RESTful backend, it offers a personalized experience, featuring a dynamic "Container for the Current Animal" that evolves as you complete tasks. Earn virtual coins after each session, used to purchase new virtual animals for an engaging incentive system. Customize session tags for efficient organization and enjoy a seamless process for acquiring virtual animals. Zoodoro transforms work sessions into a rewarding journey of growth and achievement.'
    },
    {
        slug: 'fastcar',
        tagline: 'Website for renting a car',
        img: '/images/projects/fastcar.png',
        name: 'FastCars',
        tags: ['HTML', 'CSS', 'JavaScript'],
        category: ['web'],
        github: 'https://github.com/robert-gherman/fastcar',
        featured: true,
        description:
            'The FastCars application has developed a functional platform for car reservation and rental, featuring a streamlined process and additional functionalities. Knowledge has been acquired in web application development using React, REST APIs, and databases.'
    }
];

export const mockCompanyDetails: Company[] = [
    {
        name: 'Atos',
        logo_url: '/images/companies/atos.png',
        featured: true,
        position: 'Web developer',
        startDate: "July'2021",
        responsibilities: [
            'Developed and maintained internal applications using HTML, CSS, and JavaScript, contributing to the optimization of various operational processes',
            'Assumed responsibility for fostering effective team communication, actively engaging with colleagues to ensure the timely delivery of tickets in accordance with specified requirements, thereby gaining valuable experience in collaborative project management.',
            'Work on javascript, html , css'
        ],
        order: 1
    }
];
