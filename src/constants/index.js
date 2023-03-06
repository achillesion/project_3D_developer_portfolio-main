import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  bank,
  jobit,
  tripguide,
  threejs,
  Finipad,
  street,
} from "../assets";

export const navLinks = [
 
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "about",
    title: "About",
  },
 
  // {
  //   id: "work",
  //   title: "Work",
  // },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web & Mobile UI/UX Design",
    icon: web,
  },
  {
    title: "Wordpress Development",
    icon: mobile,
  },
  {
    title: "React Development",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  
  {
    name: "TypeScript",
    icon: typescript,
  },
 
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
 
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "UI/UX Design and Development",
    company_name: "Jaytron Labs",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ahmad proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    source_code_link: "https://www.figma.com/community/file/1214243100168067211",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ahmad does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    source_code_link: "https://www.figma.com/community/file/1214243100168067211",
  },
  {
    testimonial:
      "After Ahmad optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    source_code_link: "https://www.figma.com/community/file/1214243100168067211",
  },
];

const projects = [
  {
    name: "Bankfolio",
    description:
      "Mobile Application allows users to  send, buy and recieve funds , and manage funds from various providers, providing a convenient and efficient solution for Banking needs.",
    tags: [
      {
        name: "mobile",
        color: "blue-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
      {
        name: "wireframing",
        color: "green-text-gradient",
      },
      {
        name: "design-system",
        color: "pink-text-gradient",
      },
    ],
    image: bank,
    source_code_link: "https://www.figma.com/community/file/1214243100168067211",
  },
  {
    name: "Finipad",
    description:
      "Mobile Application allows users to  send, buy and recieve funds , and manage funds from various providers, providing a convenient and efficient solution for Banking needs.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "wireframing",
        color: "green-text-gradient",
      },
      {
        name: "design-system",
        color: "pink-text-gradient",
      },
    ],
    image: Finipad,
    source_code_link: "https://github.com/",
  },
  {
    name: "Street Justice",
    description:
      "A comprehensive lawyers booking mobile application, using it your lawyer is one-call away. App allows users to book lawyers on call, video calls, and manage cases, and offers curated recommendations for popular lawyers in surrounding, which are live at any poitn of time",
    tags: [
      {
        name: "mobile",
        color: "blue-text-gradient",
      },
      {
        name: "UI/UX",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: street,
    source_code_link: "https://github.com/",
  },
  {
    name: "Finipad",
    description:
      "Mobile Application allows users to  send, buy and recieve funds , and manage funds from various providers, providing a convenient and efficient solution for Banking needs.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "wireframing",
        color: "green-text-gradient",
      },
      {
        name: "design-system",
        color: "pink-text-gradient",
      },
    ],
    image: Finipad,
    source_code_link: "https://github.com/",
  },{
    name: "Finipad",
    description:
      "Mobile Application allows users to  send, buy and recieve funds , and manage funds from various providers, providing a convenient and efficient solution for Banking needs.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "wireframing",
        color: "green-text-gradient",
      },
      {
        name: "design-system",
        color: "pink-text-gradient",
      },
    ],
    image: Finipad,
    source_code_link: "https://github.com/",
  },{
    name: "Finipad",
    description:
      "Mobile Application allows users to  send, buy and recieve funds , and manage funds from various providers, providing a convenient and efficient solution for Banking needs.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "wireframing",
        color: "green-text-gradient",
      },
      {
        name: "design-system",
        color: "pink-text-gradient",
      },
    ],
    image: Finipad,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
