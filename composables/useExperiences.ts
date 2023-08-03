import { Experience } from "types";

export const useExperiences = () => {
  const experiences: Experience[] = [
    {
      company: 'Turff',
      position: 'Frontend Developer',
      endYear: 'PRESENT',
      startYear: '2022',
      stack: [
        'Vue.js',
        'Vuetify',
        'React.js',
        'Typescript',
        'Node.js',
        'Express',
        'Docker',
        'Kubernetes',
      ],
      description: `
        Started as a Frontend developer and was later promoted to Full-stack to assist
        with all existing web projects at the time. Responsible for deploys, code reviews,
        and contributing to architectural decisions as one of the key team members.
      `,
      links: [
        {
          name: 'Turff',
          url: 'https://turff.nl/'
        },
        {
          name: 'Turff delivery',
          url: 'https://delivery.turff.nl/'
        },
      ],
    },
    {
      company: 'Coopersystem',
      position: 'Development and Systems Analyst 1',
      endYear: '2021',
      startYear: '2019',
      stack: [
        'Vue.js',
        'Vuetify',
        'Vuex',
        'React.js',
        'Typescript',
        'Cordova',
        'Docker',
      ],
      description: `
        Responsible for the frontend of a web app used by at least 50K users and providing
        assistance with other projects as needed. Utilizing Cordova to generate the apps.
      `,
      links: [
        {
          name: 'Coopersystem',
          url: 'https://www.coopersystem.com.br/'
        },
        {
          name: 'Meu Clube iOS',
          url: 'https://apps.apple.com/br/app/meu-clube/id1384602519'
        },
        {
          name: 'Meu Clube Android',
          url: 'https://play.google.com/store/apps/details?id=br.com.bancorbras.www&hl=pt_BR&gl=US'
        },
        {
          name: 'Voalá',
          url: 'https://www.vaidevoala.com.br/'
        },
      ],
    },
    {
      company: 'FUNDEP/LABLIVRE',
      position: 'Junior Developer',
      endYear: '2019',
      startYear: '2018',
      stack: [
        'Vue.js',
        'Vuetify',
        'Vuex',
        'PHP',
        'SQL',
        'Lumen',
        'Docker',
      ],
      description: `
        After a year as an intern, I was recognized and promoted to the position of Junior,
        with added responsibilities to assist in transitioning the backend from ZF1 to Lumen,
        improve the frontend with Vuetify and Vuex and creating new projects.
      `,
      links: [
        {
          name: 'Salic',
          url: 'https://salic.cultura.gov.br/'
        },
        {
          name: 'VerSalic',
          url: 'http://versalic.cultura.gov.br/#/home'
        },
        {
          name: 'Comunication Service',
          url: 'https://github.com/guiamado/comunication-service'
        },
      ],
    },
    {
      company: 'Ministry of culture',
      position: 'Intern',
      endYear: '2018',
      startYear: '2017',
      stack: [
        'Vue.js',
        'PHP',
        'SQL',
        'Python',
        'ZendFramework 1',
      ],
      description: `
        Internship focused on a full-stack position, involving the opportunity
        to work with various technologies on a national-scale government project,
        as well as developing a few Telegram bots using Python.
      `,
      links: [
        {
          name: 'Salic',
          url: 'https://salic.cultura.gov.br/'
        },
        {
          name: 'VerSalic',
          url: 'http://versalic.cultura.gov.br/#/home'
        },
      ],
    },
  ];

  return experiences;
};
