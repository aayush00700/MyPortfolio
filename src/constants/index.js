
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Python Developer",
    icon: import.meta.env.BASE_URL + "web.png",
  },
  {
    title: "Web App Developer",
    icon: import.meta.env.BASE_URL + "backend.png",
  },
  {
    title: "Backend Developer",
    icon: import.meta.env.BASE_URL + "backend.png",
  },
  {
    title: "Web Developer",
    icon: import.meta.env.BASE_URL + "creator.png",
  },
  {
    title: "System Developer",
    icon: import.meta.env.BASE_URL + "mobile.png",
  },
  {
    title: "frontend Developer",
    icon: import.meta.env.BASE_URL + "mobile.png",
  },
];

const technologies = [
  {
    name: "html",
    icon: import.meta.env.BASE_URL + "html.png",
  },
  {
    name: "css",
    icon: import.meta.env.BASE_URL + "css.png",
  },
  {
    name: "javascript",
    icon: import.meta.env.BASE_URL + "javascript.png",
  },
  {
    name: "tailwind",
    icon: import.meta.env.BASE_URL + "tailwind.png",
  },
  {
    name: "reactjs",
    icon: import.meta.env.BASE_URL + "reactjs.png",
  },
  {
    name: "nodejs",
    icon: import.meta.env.BASE_URL + "nodejs.png",
  },
  {
    name: "mongodb",
    icon: import.meta.env.BASE_URL + "mongodb.png",
  },
  {
    name: "threejs",
    icon: import.meta.env.BASE_URL + "threejs.png",
  },
  {
    name: "git",
    icon: import.meta.env.BASE_URL + "git.png",
  },
  {
    name: "docker",
    icon: import.meta.env.BASE_URL + "docker.png",
  },
  {
    name: "figma",
    icon: import.meta.env.BASE_URL + "figma.png",
  },
  {
    name: "Linux",
    icon: import.meta.env.BASE_URL + "linuxSymbol.png",
  }
];

const experiences = [
  {
    title: "Web App Developer",
    company_name: "IPSA",
    icon: import.meta.env.BASE_URL + "web.png",
    iconBg: "#383E56",
    points: [
      "Collaborated developing and maintaing website for my college that trancs everthing from the student details to trachers.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  }, 
  {
    title: "Software Developer",
    company_name: "Acmagrade",
    icon: import.meta.env.BASE_URL + "web.png",
    iconBg: "#383E56",
    points: [
      "Created websites and web apps here in js, html, css.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Learnt a lot of things here as a intern , mainly the frontend development.",
    ],
  }, 
];

const testimonials = [
  {
    testimonial:
      "Rapid developemnt with clean details can be done by aayushman.",
    name: "Neha Talreja",
    designation: "Branch Coordinator",
    company: "IPSA",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Created clean and problem solving , attractive projects that can be used further.",
    name: "Vipin Gupta",
    designation: "HR",
    company: "Acmagrade",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

const projects = [
  {
    name: "Patcher-Neo",
    description:
      "A CLI Patch tool made up on llama which is used to patch the error of code in code editors , with various functionalities , can be downloaded using pip isntall Patcher-Neo.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Llama",
        color: "green-text-gradient",
      },
      {
        name: "PIP",
        color: "pink-text-gradient",
      },
    ],
    image: import.meta.env.BASE_URL + "tripguide.png",
    source_code_link: "https://github.com/",
    website_link: "",
  },
  {
    name: "Nexus.ai",
    description:
      "Its a ai tool ,that generates shorts, reels, tiktoks, etc . From a Youtube video and return you you to use it further. It add subtitles ,rating ,Title ,keywords ,extract the most chance to get famous parts of a video.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Llama",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
      {
        name: "ReactJS",
        color: "green-text-gradient",
      },
      {
        name: "smtp",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "RazorPay",
        color: "green-text-gradient",
      },
    ],
    image: import.meta.env.BASE_URL + "NexusAI.png",
    source_code_link: "https://github.com/aayush00700/Nexus.ai",
    website_link:"https://aayush00700.github.io/Nexus.ai/",
  },
  {
    name: "Zap",
    description:
      "A React chat app that provides user to connect and tranfer data to each hother by seraching one's id and sending them a request , you can send any kind of data and add as many users you want is your chatlist.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Zustand",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: import.meta.env.BASE_URL + "Zap.png",
    source_code_link: "https://github.com/aayush00700/Zap",
    website_link: 'https://aayush00700.github.io/Zap'
  },
  {
    name: "Amazon Clone",
    description:
      "A Amazon clone ecommmerce website that allow users to buy and cancel the products, It provides you with searching ability for products, it provides you with adding to cart ability , it provides you with increment or decrement product quantity etc.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Jasemine",
        color: "blue-text-gradient",
      },
      {
        name: "JSON",
        color: "green-text-gradient",
      },
    ],
    image: import.meta.env.BASE_URL + "Amazon.png",
    source_code_link: "https://github.com/aayush00700/Amazon-clone",
    website_link:'https://aayush00700.github.io/Amazon-clone/'
  },
  {
    name: "YoutubeUI",
    description:
      "A Youtube FrontPage User Interface with several sections ,Header ,body ,navabar ,footer ,Video divsm, searchBars etc.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: import.meta.env.BASE_URL + "YoutbeUI.png",
    source_code_link: "https://github.com/YoutubeUI",
    website_link: 'https://aayush00700.github.io/YoutubeUI/',
  },
  {
    name: "Pilot",
    description:
      "A obsticles shooting game totally build in javascript providing user a trip to space shooter , facing various obsticles comming to him from vaccum in agaony to hit him , he stands though and shoot them with his globster.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Gaming",
        color: "green-text-gradient",
      },
      {
        name: "Online games",
        color: "pink-text-gradient",
      },
    ],
    image: import.meta.env.BASE_URL + "Pilot.png",
    source_code_link: "https://github.com/aayush00700/Pilot",
    website_link: 'https://aayush00700.github.io/Pilot'
  },
  {
    name: "Aura",
    description:
      "Aura is a snake game build corely in java only, its a beaultifull game in which you are a anaconda and you have to eat apples to survive and grow long ,as it has no limit to grow you can enjoy it by downloading it's jar file and run it locally .",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Java gaming",
        color: "green-text-gradient",
      },
      {
        name: "Snake games",
        color: "pink-text-gradient",
      },
    ],
    image: import.meta.env.BASE_URL + "Aura.png",
    source_code_link: "https://github.com/aayush00700/Aura",
    website_link: 'https://aayush00700.github.io/Aura'
  },
];

export { services, technologies, experiences, testimonials, projects };
