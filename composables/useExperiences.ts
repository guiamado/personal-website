import { Experience } from "types";

export const useExperiences = () => {
  const experiences: Experience[] = [
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
        Main activities: Development in PHP,
        VueJS, ZendFramework 1,
        Docker and SQL.
        Action on the project Salic, culture incentive.
      `,
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
        Main activities: Development in PHP, VueJS, Vuetify, ZendFrameWork 1, Docker, Docker Compose, open source software, Python and Lúmen.
        Projects: Salic Lei Rouanet, Notification Service, Salic Api and others.
      `,
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
        Main activities: Development in Frontend, using VueJS, Vuetify, Vuex e ReactJS technologies.
        Always focused in UX/UI. Developing big hybrid apps with more then 10k users.
        Projects: IPEA Bolsas (ReactJS), Meu Clube (VueJS) and Voalá (ReactJS). Working for Bancorbrás as a client.
      `,
    },
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
        Main activities: Develop frontend interfaces for multiple project using VueJS version 2, VueJS version 3, ReactJS and Typescript.
        After a while I started helping the backend that we mainly used NodeJS, Express and Typescript.
        Projects: Dashboard, Delivery, Routing system used internally to manage the routes for the deliveries.
      `,
    },
  ];

  return experiences;
};