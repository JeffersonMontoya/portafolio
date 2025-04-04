import {
  Github,
  Facebook,
  Mail,
  HomeIcon,
  UserRound,
  CodeSquare,
  BookText,
  Crop,
  Pencil,
  Computer,
  Rocket,
  Book,
  Code,
  Database,
  Youtube,
  Linkedin,
  Twitter,
  Rss,
  Twitch,
  Instagram,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "User",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "/about",
  },
  {
    id: 3,
    title: "Services",
    icon: <BookText size={25} color="#fff" />,
    link: "/services",
  },
  {
    id: 4,
    title: "Project",
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: "/portfolio",
  },
];

export const socialNetworks = [
  {
    id: 1,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: "#!",
  },
  {
    id: 2,
    logo: <FaWhatsapp size={30} strokeWidth={1} />,
    src: "#!",
  },

  {
    id: 3,
    logo: <Instagram size={30} strokeWidth={1} />,
    src: "#!",
  },

  {
    id: 4,
    logo: <Mail size={30} strokeWidth={1} />,
    src: "#!",
  },
];

export const dataCounter = [
  {
    id: 0,
    endCounter: 1,
    text: "Años de experiencia",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    endCounter: 3,
    text: "Clientes satisfechos",
    lineRight: true,
    lineRightMobile: false,
  },
  {
    id: 2,
    endCounter: 4,
    text: "Proyectos finalizados",
    lineRight: true,
    lineRightMobile: true,
  },
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Desarrollador Full Stack",
    subtitle: "Prácticas SENA - AndesBPO",
    description:
      "Realicé mis prácticas profesionales en AndesBPO, donde participé en varios proyectos enfocados en la optimización de procesos empresariales. Diseñé y desarrollé sistemas CRM, integrando funcionalidades tanto en el frontend como en el backend, utilizando tecnologías modernas para satisfacer las necesidades del cliente.",
    date: "Nov 2023",
  },
  {
    id: 2,
    title: "Estudiante de Desarrollo Web",
    subtitle: "Coderhouse",
    description:
      "Completé cursos en Desarrollo Web y JavaScript en Coderhouse, donde adquirí habilidades sólidas en programación, diseño responsivo y buenas prácticas en desarrollo web. Implementé proyectos prácticos que consolidaron mi comprensión del ecosistema web moderno.",
    date: "May 2022",
  },
  {
    id: 3,
    title: "Desarrollador Frontend y Backend",
    subtitle: "Proyectos Personales - CRM",
    description:
      "Desarrollé proyectos CRM completos, integrando soluciones frontend atractivas y funcionales con un backend robusto. Este trabajo me permitió perfeccionar mis habilidades en tecnologías como React, Django, y Laravel, así como en la gestión de bases de datos y despliegue de aplicaciones.",
    date: "Ago 2021",
  },
];

export const serviceData = [
  {
    icon: <Pencil />,
    title: "Diseño web",
    description:
      "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
  },
  {
    icon: <Computer />,
    title: "Desarrollo web",
    description:
      "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
  },
  {
    icon: <Code />,
    title: "Desarrollo de APIs con Python",
    description: "Creación de APIs robustas y escalables utilizando Python ",
  },
  {
    icon: <Database />,
    title: "Desarrollo de APIs con Laravel",
    description: "Desarrollo de APIs eficientes y seguras con Laravel",
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "CRM",
    image: "/crm.jpeg",
    urlGithub: "https://github.com/Alexsanta045/AndesCobra-Back",
    technologies: ["Next.js", "Django", "PostgreSQL"],
  },
  {
    id: 2,
    title: "Cesde",
    image: "/cesde.jpeg",
    urlGithub: "https://github.com/JeffersonMontoya/cesde",
    technologies: ["Django", "Python", "PostgreSQL"], 
  },
  {
    id: 3,
    title: "Portafolio",
    image: "/portafolio.jpeg",
    urlGithub: "https://github.com/JeffersonMontoya/portafolio",
    technologies: ["Next.js" , "TypeScript", "Tailwind"], 
  },
  {
    id: 4,
    title: "Gesationes Globales",
    image: "/gestiones-globales.jpeg",
    urlGithub: "https://github.com/JeffersonMontoya/gestionesglobales",
    technologies: ["Next.js" , "TypeScript", "Tailwind"], 

  }
];
