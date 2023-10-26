import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Akira Chan',
  title: "Hi all, I'm Akira",
  description:
    "I'm a full stack developer with 8 years of experience specializing in React. I have a passion for creating high-quality user interfaces and enjoy tackling complex problems. I'm constantly learning and exploring new technologies to improve my skills and deliver the best possible solutions.",
  resumeLink:
    'https://drive.google.com/file/d/1J3y0L2EdFgx4HfrQvFSNNlz3CmqexMej/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'czy30121',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  linkedin: 'https://www.linkedin.com/in/bright30121/',
  github: 'https://github.com/czy30121',
  telegram: '@bright0121',
  skype: 'https://join.skype.com/invite/sfWmX1jZ7IvT',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building user-friendly interfaces using CSS frameworks'),
        emoji('⚡ Building RESTful APIs in Django & Django REST Framework'),
        emoji('⚡ Building scalable and maintainable web applications that are secure, fast, and efficient using Laravel'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'Typescript',
          fontAwesomeClassName: 'vscode-icons:file-type-typescript',
        },
        {
          skillName: 'NodeJS',
          fontAwesomeClassName: 'vscode-icons:file-type-node',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassName: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Vue',
          fontAwesomeClassName: 'vscode-icons:file-type-vue',
        },
        {
          skillName: 'Nuxtjs',
          fontAwesomeClassName: 'vscode-icons:file-type-nuxt',
        },
        {
          skillName: 'Angular',
          fontAwesomeClassName: 'vscode-icons:file-type-angular',
        },
        {
          skillName: 'Redux',
          fontAwesomeClassName: 'logos:redux',
        },
        {
          skillName: 'Tailwind CSS',
          fontAwesomeClassName: 'vscode-icons:file-type-tailwind',
        },
        {
          skillName: 'Material-UI',
          fontAwesomeClassName: 'logos:material-ui',
        },
        {
          skillName: 'WordPress',
          fontAwesomeClassName: 'logos:wordpress-icon',
        },
        {
          skillName: 'Laravel',
          fontAwesomeClassName: 'logos:laravel',
        },
        {
          skillName: 'MariaDB',
          fontAwesomeClassName: 'vscode-icons:file-type-mariadb',
        },
        {
          skillName: 'MongoDB',
          fontAwesomeClassName: 'vscode-icons:folder-type-mongodb',
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassName: 'logos:postgresql',
        },
        {
          skillName: 'GraphQL',
          fontAwesomeClassName: 'logos:graphql',
        },
        {
          skillName: 'Python',
          fontAwesomeClassName: 'logos:python',
        },
        {
          skillName: 'Django',
          fontAwesomeClassName: 'vscode-icons:file-type-django',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassName: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          fontAwesomeClassName: 'logos:aws',
        },
        {
          skillName: 'Azure',
          fontAwesomeClassName: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          fontAwesomeClassName: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassName: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          fontAwesomeClassName: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          fontAwesomeClassName: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          fontAwesomeClassName: 'logos:github-actions',
        },
        {
          skillName: 'Cloudinary',
          fontAwesomeClassName: 'logos:cloudinary',
        },
        {
          skillName: 'Nginx',
          fontAwesomeClassName: 'logos:nginx',
        },
        {
          skillName: 'Sentry',
          fontAwesomeClassName: 'logos:sentry-icon',
        },
      ],
    },
    // {
    //   title: 'Blockchain',
    //   lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
    //   skills: [
    //     emoji(
    //       '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
    //     ),
    //     emoji(
    //       '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
    //     ),
    //     emoji(
    //       '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
    //     ),
    //     emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
    //     emoji(
    //       '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
    //     ),
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: 'Ethereum',
    //       fontAwesomeClassName: 'logos:ethereum',
    //     },
    //     {
    //       skillName: 'Solidity',
    //       fontAwesomeClassName: 'logos:solidity',
    //     },
    //     {
    //       skillName: 'Web3js',
    //       fontAwesomeClassName: 'logos:web3js',
    //     },
    //     {
    //       skillName: 'Metamask',
    //       fontAwesomeClassName: 'logos:metamask-icon',
    //     },
    //     {
    //       skillName: 'Ganache',
    //       fontAwesomeClassName: 'logos:ganache-icon',
    //     },
    //   ],
    // },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '95', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '80',
  },
  {
    Stack: 'Programming',
    progressPercentage: '90',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'The University of Hong Kong',
    subHeader: 'Bachelor of Computer Science',
    duration: 'From May 2011 to May 2015',
    desc: "Here's a some of my university experience.",
    grade: 'Grade A',
    descBullets: [
      'Completed coursework in data structures and algorithms, object-oriented programming, software engineering, database systems, and web development.',
      'Collaborated with classmates on team projects, using agile development methodologies to deliver high-quality software on time and within budget.',
      'Participated in student organizations and volunteered at coding events, sharing knowledge and expertise with other students.',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Senior Full Stack Developer',
    company: 'Sibedge',
    companyLogo: '/img/icons/common/Sibedge.png',
    date: 'From Aug. 2020 to Aug. 2023',
    desc: '',
    descBullets: [
      "Revamped client's e-commerce site, leading to a 32.3% increase in online sales.",
      "Designed and implemented custom React product filtering system, resulting in a 43.2% increase in average order value. ",
      "Built real-time chat app, handling 3000+ concurrent users with an average response time of <150ms."
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Vention',
    companyLogo: '/img/icons/common/vention.png',
    date: 'From Sept. 2016 to Jun. 2020',
    desc: '',
    descBullets: [
      "Developed sleek fintech UI using React, increasing user satisfaction by 22% and decreasing bounce rate by 19.2%.",
      "Implemented responsive design with Bootstrap, improving mobile user experience by 40% and organic traffic by 34.3%.",
      "Integrated Angular components with backend system, reducing page load time by 32%.",
      "Created product launch landing page, generating $10,000 in sales within first week with 42.5% conversion rate."
    ],
  },
  {
    role: 'Web Development Intern',
    company: 'ZENCODE Group',
    companyLogo: '/img/icons/common/zencode.png',
    date: 'From Sept. 2015 to Sept. 2016',
    desc: '',
    descBullets: [
      "Implemented responsive UI with Angular, achieving 26.3% sales increase.",
      "Created interactive e-commerce site with React, leading to 33.2% boost in sales revenue.",
      "Developed custom WordPress plugins, streamlining checkout and increasing online sales by 12.5%."
    ],
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Alma',
    desc: 'An interactive playground for generative graphics. Combine nodes & logic into WebGL shaders - all through an intuitive no-code interface.',
    github: 'https://github.com/czy30121/react-alma-app',
  },
  {
    name: 'API Platform Admin',
    desc: 'API Platform Admin is a tool to automatically create a beautiful (Material Design) and fully-featured administration interface for any API supporting the Hydra Core Vocabulary or exposing an OpenAPI documentation, including but not limited to all APIs created using the API Platform framework.',
    github: 'https://github.com/czy30121/react-admin-api',
  },
  {
    name: 'Next.js AI Chatbot',
    desc: 'An open-source AI chatbot app template built with Next.js, the Vercel AI SDK, OpenAI, and Vercel KV.',
    github: 'https://github.com/czy30121/react-ai-chatbot',
  },
  {
    name: 'VueWordPress Theme',
    desc: "A true WordPress theme with the guts ripped out and replaced with Vue. Looking to create a Vue-powered WordPress plugin? I've got a starter for that too!",
    github: 'https://github.com/czy30121/react-ai-chatbot',
  },
  {
    name: 'WordPress Author Theme',
    desc: "This theme was originally developed for a closed group of authors and not intended for a public release. This is still reflected in the code, which takes several liberties not considered best practice.",
    github: 'https://github.com/czy30121/wordpress-author-theme',
  },
  {
    name: 'Chatify',
    desc: 'Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.',
    github: 'https://github.com/czy30121/react-chat-app',
  },
  {
    name: 'Bits-0f-C0de',
    desc: 'My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown.',
    github: 'https://github.com/czy30121/react-blog-app',
  },
  {
    name: 'Editor.io',
    desc: 'Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage',
    github: 'https://github.com/czy30121/react-code-editor',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'Luca Edwards, USA',
    feedback:
      'Your capacity to promptly comprehend our requirements and deliver top-notch work surpassed our expectations. Your meticulousness, professionalism, and articulate communication were a refreshing change. We eagerly anticipate the opportunity to collaborate with you again.',
  },
  {
    name: 'Angus Cooper, USA',
    feedback:
      'Your skills as a full stack developer are truly exceptional. Your ability to understand complex requirements and deliver elegant solutions is a rare talent. We are grateful for your dedication, professionalism, and commitment to excellence.',
  },
  {
    name: 'Alexander Stokes, USA',
    feedback:
      'You excel at communication and were able to clearly elucidate technical concepts for us. We greatly appreciated your responsiveness and willingness to accommodate changes based on our feedback.',
  },
  {
    name: 'Rowan Sanders, USA',
    feedback:
      'It was a pleasure working with you, and we appreciate your positive attitude and collaborative approach. We are looking forward to the opportunity to work with you again in the future.',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = false;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Akira Chan',
  description:
    'A passionate Full Stack Web Developer.',
  author: 'Akira Chan',
  image: '',
  url: 'https://crazyp0rtf0li0.web.app/',
  keywords: [
    'Akira',
    'Akira Chan',
    '@czy30121',
    '1czy30121',
    'Portfolio',
    'Akira Portfolio ',
    'Akira Chan Portfolio',
  ],
};
