// images
import Logo from '../src/assets/img/header/logo.svg';

// icons
import CalendarIcn from '../src/assets/img/workouts/icons/calendar.svg';
import PriceIcn from '../src/assets/img/pricing/icons/price.svg';
import QuestionMarkIcn from '../src/assets/img/faq/icons/question-mark.svg';

  // Import Images EMILIANO
  
  import nievalogo from './assets/emiassets/logonieva.png'
  import futbol from './assets/emiassets/futbol.webp'
  import voley from './assets/emiassets/voley.webp'
  import basquet from './assets/emiassets/basquet.webp'
  import gym from './assets/emiassets/gym.webp'
  import pilates from './assets/emiassets/pilates.webp'
  import hockey from './assets/emiassets/hockey.webp'
  import padel from './assets/emiassets/padel.webp'
  import hockey2 from './assets/emiassets/hockey2.webp'
  import nievanew from './assets/emiassets/nievaNew.webp'

export const header = {
  logo: Logo,
  btnLoginText: 'Registrate',
  btnSignupText: 'Ingresa',
};

export const nav = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/' },
  { name: 'Workouts', href: '/' },
  { name: 'Pricing', href: '/' },
  { name: 'Community', href: '/' },
  { name: 'FAQ', href: '/' },
];

export const banner = {
  titlePart1: 'Club Atletico',
  titlePart2: '–Ciudad de Nieva.',
  subtitle:
    '',
  textBtn: 'Unete Ahora',
  img: '',
};

export const about = {
  icon: nievalogo,
  title: 'Nuestro Objetivo',
  subtitle1:
    'Cada entrenamiento es una oportunidad para mejorar, para crecer, para convertirte en la mejor versión de ti mismo. ¡No la desperdicies, haz que cuente!',
  subtitle2:
    'La fuerza de nuestra identidad sincera se refleja en el ambiente de nuestra institucion, motivando a cada alumno a esforzarse a lograr sus objetivos.',
  link: 'Unete',
};

export const workouts = {
  icon: CalendarIcn,
  title: 'Deportes',
  programs: [
    {
      image: futbol,
      name: 'Futbol',
    },
    {
      image: voley,
      name: 'Voley',
    },
    {
      image: basquet,
      name: 'Basquet',
    },
    {
      image: gym,
      name: 'Gym',
    },
    {
      image: pilates,
      name: 'Pilates',
    },
    {
      image: hockey,
      name: 'Hockey',
    },
    {
      image: padel,
      name: 'Padel',
    },
  ],
};

export const pricing = {
  icon: PriceIcn,
  title: 'Cuota Mensual.',
  plans: [
    {
      name: 'Cuota Mensual',
      price: '9000',
      list: [
        { name: 'Beneficios' },
        { name: 'Beneficios' },
        { name: 'Beneficios' },
      ],
      delay: 600,
    },
]}


export const faq = {
  icon: QuestionMarkIcn,
  title: 'Preguntas Frecuentes',
  accordions: [
    {
      question: 'Pregunta',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'Pregunta',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'Pregunta',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'Pregunta',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'Pregunta',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'Pregunta',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
  ],
};

export const join = {
  image: nievanew,
  title: 'Unete a Nuestro Club',
  subtitle:
    'Cada gota de sudor es un paso más hacia el éxito. ¡Sigue trabajando duro y nunca pierdas de vista tus sueños!',
  btnText: 'Unete',
};

export const footer = {
  logo: Logo,
  copyrightText: 'All rights reserved. Gymme 2022.',
};
