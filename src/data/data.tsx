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
  Settings
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
  {
    id: 4, 
    title: "Desarrollador Full Stack (Prueba Técnica)",
    subtitle: "Sistema de Inventario - Proceso de Selección",
    description:
      "Desarrollé una solución integral de gestión de inventarios utilizando Vue.js para una interfaz reactiva y Firebase para la persistencia de datos en tiempo real y autenticación. El proyecto incluyó el manejo de estados complejos y una arquitectura serverless, cumpliendo con los estándares requeridos para un proceso de selección empresarial.",
    date: "Dic 2024",
  },
];





export const serviceData = [
  {
    icon: <Computer />,
    title: "Desarrollo Frontend",
    description:
      "Interfaces modernas y reactivas con Vue.js y React, enfocadas en rendimiento y experiencia de usuario.",
  },
  {
    icon: <Settings />,
    title: "Optimización de Procesos",
    description:
      "Automatización de flujos de trabajo y tareas repetitivas para maximizar la eficiencia operativa.",
  },
  {
    icon: <Code />,
    title: "Backend & APIs",
    description:
      "Creación de lógica de servidor y APIs escalables con Node.js bajo arquitecturas modernas.",
  },
  {
    icon: <Database />,
    title: "Cloud & Real-time",
    description:
      "Bases de datos y autenticación con Firebase, garantizando sincronización de datos en tiempo real.",
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
    title: "Portafolio",
    image: "/portafolio.jpeg",
    urlGithub: "https://github.com/JeffersonMontoya/portafolio",
    technologies: ["Next.js" , "TypeScript", "Tailwind"], 
  },
  {
    id: 3,
    title: "Gesationes Globales",
    image: "/gestiones-globales.jpeg",
    urlGithub: "https://github.com/JeffersonMontoya/gestionesglobales",
    technologies: ["Next.js" , "TypeScript", "Tailwind"], 

  },
  {
    id: 4,
    title: "Inventario con firerbase",
    image: "/inventario.jpeg",
    urlGithub: "https://github.com/JeffersonMontoya/inventario-vite.git",
    technologies: ["Vue Js" , "Firebase", "Tailwind"], 

  }
];
