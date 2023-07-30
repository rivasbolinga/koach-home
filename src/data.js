import card1Image from './assets/images/card-1.png';
import card2Image from './assets/images/card-2.png';
import card3Image from './assets/images/card-3.png';
import card4Image from './assets/images/card-4.png';
import mentor1Image from './assets/images/mentor-1.png';
import mentor2Image from './assets/images/mentor-2.png';
import mentor3Image from './assets/images/mentor-3.png';
import mentor4Image from './assets/images/mentor-4.png';

 const filtersContent = {
  title: 'Find the right Koach for you',
  filters: ['product designer', 'accountant', 'marketing', 'software developer', 'data analyst', 'project manager', 'UX researcher', 'Architect']
}

export const cardsData = [
  {
    id: 1,
    title: 'World-class coaching & mentorship',
    description:
      "Drive performance through 1-on-1 and group coaching with functional experts who work at the world's top companies.",
    img: card1Image,
  },
  {
    id: 2,
    title: 'Tools to unlock growth',
    description:
      "Supporting and promoting each person's unique goals and challenges through technology and software.",
    img: card2Image,
  },
  {
    id: 3,
    title: 'Community of top performers',
    description:
      'Bi-weekly community events and workshops with functional experts and coaches promote growth in collaborative settings.',
    img: card3Image,
  },
  {
    id: 4,
    title: 'Your Koach',
    description: 'is a skilled mentor listens to you without bias',
    description2: 'provides fresh insights and ideas',
    description3: 'collaborates with you on your career journey',
    description4: 'offers unwavering support',
    img: card4Image,
  },
];

export const mentorsData = {
  title: 'Our blend of coaching and mentorship helps people to',
  tags: [
    'create meaningful goals',
    'understand how to achieve them',
    'get unstuck along the way',
    'improve how people, teams & companies operate',
  ],
  mentors: [
    {
      img: mentor1Image,
      name: 'Alex Bricks 🇫🇷',
      job: 'Backend developer at Samsung',
    },
    {
      img: mentor2Image,
      name: 'Dany Blue 🇫🇷',
      job: 'Backend developer at Futurice',
    },
    {
      img: mentor3Image,
      name: 'Kate Millet 🇫🇷',
      job: 'Backend developer at Kone',
    },
    {
      img: mentor4Image,
      name: 'Alex Bricks 🇫🇷',
      job: 'Backend developer at Samsung',
    },
  ],
}

export default filtersContent;