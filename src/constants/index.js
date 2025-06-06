
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
    title: "System Developer",
    icon: import.meta.env.BASE_URL + "mobile.png",
  },
  {
    title: "Backend Developer",
    icon: import.meta.env.BASE_URL + "backend.png",
  },
  {
    title: "Web Developer",
    icon: import.meta.env.BASE_URL + "creator.png",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: import.meta.env.BASE_URL + "html.png",
  },
  {
    name: "CSS 3",
    icon: import.meta.env.BASE_URL + "css.png",
  },
  {
    name: "JavaScript",
    icon: import.meta.env.BASE_URL + "javascript.png",
  },
  {
    name: "Tailwind CSS",
    icon: import.meta.env.BASE_URL + "tailwind.png",
  },
  {
    name: "React JS",
    icon: import.meta.env.BASE_URL + "reactjs.png",
  },
  {
    name: "Node JS",
    icon: import.meta.env.BASE_URL + "nodejs.png",
  },
  {
    name: "MongoDB",
    icon: import.meta.env.BASE_URL + "mongodb.png",
  },
  {
    name: "Three JS",
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
  }
];

const experiences = [
  {
    title: "Web App Developer",
    company_name: "IPSA",
    icon: import.meta.env.BASE_URL + "meta.png",
    iconBg: "#383E56",
    date: "Feb 2023 - June 2024",
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
      "Rapid developemnt with clean details can be done by aayushman.",
    name: "Neha Talreja",
    designation: "Branch Coordinator",
    company: "IPSA",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
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
  },
];

export { services, technologies, experiences, testimonials, projects };
