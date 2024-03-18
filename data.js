// icons
import CalendarIcn from "./src/app/assets/icons/calendar.svg";
import QuestionMarkIcn from "./src/app/assets/icons/question-mark-icon.svg";

// Import Images EMILIANO

import nievalogo from "./src/app/assets/img/logonieva.png";
import basquet from "./src/app/assets/img/Carrousel1.webp";
import futbol from "./src/app/assets/img/Carrousel2.webp";
import gym from "./src/app/assets/img/Carrousel3.webp";
import voley from "./src/app/assets/img/Carrousel4.webp";
import pilates from "./src/app/assets/img/Carrousel5.webp";
import padel from "./src/app/assets/img/Carrousel6.webp";
import hockey from "./src/app/assets/img/Carrousel7.webp";
import nievanew from "./src/app/assets/img/Landing1.webp";

export const header = {
  btnLoginText: "Registrate",
  btnSignupText: "Ingresa",
};

export const nav = [
  { name: "Home", href: "/" },
  { name: "About", href: "/" },
  { name: "Workouts", href: "/" },
  { name: "Pricing", href: "/" },
  { name: "Community", href: "/" },
  { name: "FAQ", href: "/" },
];

export const banner = {
  titlePart1: "Club Atletico",
  titlePart2: "–Ciudad de Nieva.",
  subtitle: "",
  textBtn: "Unete Ahora",
  img: "",
};

export const about = {
  icon: nievalogo,
  title: "Nuestro Objetivo",
  subtitle1:
    "Cada entrenamiento es una oportunidad para mejorar, para crecer, para convertirte en la mejor versión de ti mismo. ¡No la desperdicies, haz que cuente!",
  subtitle2:
    "La fuerza de nuestra identidad sincera se refleja en el ambiente de nuestra institucion, motivando a cada alumno a esforzarse a lograr sus objetivos.",
  link: "Unete",
};

export const workouts = {
  icon: CalendarIcn,
  title: "Deportes",
  programs: [
    {
      image: futbol,
      name: "Futbol",
    },
    {
      image: voley,
      name: "Voley",
    },
    {
      image: basquet,
      name: "Basquet",
    },
    {
      image: gym,
      name: "Gym",
    },
    {
      image: pilates,
      name: "Pilates",
    },
    {
      image: hockey,
      name: "Hockey",
    },
    {
      image: padel,
      name: "Padel",
    },
  ],
};

export const faq = {
  icon: QuestionMarkIcn,
  title: "Preguntas Frecuentes",
  accordions: [
    {
      question: "Pregunta",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.",
    },
    {
      question: "Pregunta",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.",
    },
    {
      question: "Pregunta",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.",
    },
    {
      question: "Pregunta",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.",
    },
    {
      question: "Pregunta",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.",
    },
    {
      question: "Pregunta",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.",
    },
  ],
};

export const join = {
  image: nievanew,
  title: "Unete a Nuestro Club",
  subtitle:
    "Cada gota de sudor es un paso más hacia el éxito. ¡Sigue trabajando duro y nunca pierdas de vista tus sueños!",
  btnText: "Unete",
};
