import { AnimationType } from './types'; // Importing AnimationType from types file

const animationTypes: AnimationType[] = [
  {
    name: 'Fade In',
    duration: '0.5s',
    timingFunction: 'ease-in',
  },
  {
    name: 'Slide Up',
    duration: '0.7s',
    timingFunction: 'ease-out',
  },
  {
    name: 'Zoom In',
    duration: '0.6s',
    timingFunction: 'ease-in-out',
  },
  {
    name: 'Bounce',
    duration: '0.8s',
    timingFunction: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
  },
];

export default animationTypes; // Default export of animationTypes array