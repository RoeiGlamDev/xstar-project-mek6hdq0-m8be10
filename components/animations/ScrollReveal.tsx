'use client';

import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ScrollRevealAnimation: React.FC = ({ children }) => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom', // Animation origin
      distance: '50px', // Distance of the reveal
      duration: 1000, // Animation duration
      delay: 200, // Delay before animation starts
      easing: 'ease-in-out', // Animation easing
      opacity: 0, // Initial opacity
    });

    sr.reveal('.reveal', { interval: 200 }); // Reveal elements with class 'reveal'

    return () => {
      sr.destroy(); // Cleanup on unmount
    };
  }, []);

  return <div className="reveal">{children}</div>; // Wrap children in div with 'reveal' class
};

export default ScrollRevealAnimation;