import {
  frontend, backend, ux, prototyping,
  javascript, typescript, html, css, reactjs, redux, tailwind, nodejs, git, figma, docker, postgresql, rubyrails, graphql,
  komikult, leaderboard, math, movie, nyeusi, space,
  hear, dcc, squarespace, floridaPoly,
  s_amazon, s_android, s_angular, s_boostrap, s_c, s_cPlus, s_css3, s_cassandra, s_django, s_docker, s_firebase, s_html5, s_java, s_javascript, s_jquery, s_kotlin,
  s_laravel, s_mongodb, s_mysql, s_nodejs, s_postgresql, s_python, s_reactjs, s_redis, s_redux, s_ruby, s_rubyrails, s_rust, s_spring, s_typescript, s_vuejs,
  r_platoon,
  r_dwntwn,
  r_yetimotion,
  r_dffrntera,
  r_racksimply,
} from '../assets'

const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
    text: 'Reat, Next, Vue, Angular, Shopify, WordPress',
  },
  {
    title: 'Backend Developer',
    icon: backend,
    text: 'Node, Express, PHP, Laravel',
  },
  {
    title: 'UI/UX Design',
    icon: ux,
    text: 'MUI, COREUI, ',
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
    text: '',
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
]

const svgTech = [
  // s_amazon,
  // s_android,
  s_angular,
  s_boostrap,
  // s_c,
  // s_cPlus,
  s_css3,
  s_cassandra,
  s_django,
  s_docker,
  // s_firebase,
  s_html5,
  // s_java,
  s_javascript,
  s_jquery,
  // s_kotlin,
  s_laravel,
  s_mongodb,
  s_mysql,
  s_nodejs,
  // s_postgresql,
  // s_python,
  s_reactjs,
  // s_redis,
  // s_redux,
  // s_ruby,
  // s_rubyrails,
  // s_rust, 
  // s_spring,
  s_typescript,
  s_vuejs,
]

const experiences = [
  {
    title: 'Front-End Developer Intern',
    company_name: 'Hear',
    icon: hear,
    iconBg: '#111111',
    content: [
      'Translated designs and wireframes into high-quality code using HTML, CSS, and JavaScript.',
      'Worked closely with developers, designers, copywriters, and other cross-functional teams (CRO, Video, Marketing, etc..) to drive innovation and maximize conversions by 40 %.',
      'Provided input to leaders 3 times a year about the future development of new features.',
      'Ensured the technical feasibility of UI/UX designs.',
    ],
    date: 'June 2015 - April 2016',
    location: 'Miami, FL',
  },
  {
    title: 'Web Designer',
    company_name: 'Florida Polytechnic University ',
    icon: floridaPoly,
    iconBg: '#111111',
    content: [
      'Created and assisted with the development of 3 official university-sponsored websites.',
      'Created and assisted with the design, development, and support of new and existing secure websites and web applications.',
      'Conceptualized, created, and managed dynamic web pages for data display and entry using appropriate technologies(HTML, PHP, and Web CMS).',
      'Worked as part of a 4-person team, and communicated in a professional and collegial way.',
      'Provided training for continuous updating of websites.',
    ],
    date: 'April 2016 - January 2020',
    location: 'Lakeland, FL',
  },
  {
    title: 'Senior Web Developer',
    company_name: 'Squarespace',
    icon: squarespace,
    iconBg: '#111111',
    content: [
      'Led and managed a team of 12 developers and designers to create efficient, effective, and visually aesthetic websites for 60,000+ clients.',
      'Oversaw concept mock-up and wireframe design to further client satisfaction by 35%.',
      'Developed customer-specific design framework, reducing site production time by 4 days.',
      'Collaborated with VP of sales to create digital marketing designs that led to an average 20,000 + additional clients per month.',
      'Led bi-weekly standup to celebrate team successes, address weaknesses, and assign tasks.',
    ],
    date: 'January 2020 - current',
    location: 'Remote',
  },
  // {
  //   title: 'Full Stack Developer',
  //   company_name: 'Diversity Cyber Council',
  //   icon: dcc,
  //   iconBg: '#111111',
  //   date: 'Sep 2022 - Present',
  // },
]

const projects = [
  {
    id: 'project-1',
    name: 'KomiKult',
    description: 'A comic characters list app that displays Marvel characters.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Leaderboard',
    description:
      'A leaderboard list app that displays scores submitted by different players.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Math Magicians',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Movie Metro',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Nyeusi Fest Site',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
]

const r_projexts = [
  {
    id: 'project-1',
    name: 'Flyplatoon',
    description: 'Created by a core team of aviation- industry experts, PLATOON is the most sophisticated way to fly private.Our unrivalled connections, collective experience and class- leading hospitality elevate jet charter to a whole new level – where premium is paramount and style comes as standard.Come join us in the stratosphere and become part of the next generation in aviation.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: r_platoon,
    repo: 'https://www.flyplatoon.com',
    demo: 'https://www.flyplatoon.com',
  },
  {
    id: 'project-2',
    name: 'DWNTWN',
    description: 'We Are A Full-Service Digital Agency And Business Consulting Firm That Helps Companies Grow And Thri',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: r_dwntwn,
    repo: 'https://dwntwnmedia.consulting/',
    demo: 'https://dwntwnmedia.consulting/',
  },
  {
    id: 'project-3',
    name: 'Yetimotion',
    description: 'Yeti Pictures is a team of designers/directors with focus in motion graphics, 3D animation and art direction based in Athens, Greece.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: r_yetimotion,
    repo: 'https://yetimotion.com/',
    demo: 'https://yetimotion.com/',
  },
  {
    id: 'project-4',
    name: 'Dffrntera',
    description: 'Envision ideas, branding, distribution & retail trade for a new era.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: r_dffrntera,
    repo: 'https://www.dffrntera.com',
    demo: 'https://www.dffrntera.com',
  },
  {
    id: 'project-5',
    name: 'RackSimply',
    description: `RackSimply is a North American solution provider specializing in industry-leading IT hardware, software, services, and cloud consulting. RackSimply is taking on a traditionally slow sales process and creating a customer-centric experience for your organization's technical team.`,
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: r_racksimply,
    repo: 'https://racksimply.com/',
    demo: 'https://racksimply.com/',
  },
]

export { navLinks, services, technologies, svgTech, experiences, projects, r_projexts }
