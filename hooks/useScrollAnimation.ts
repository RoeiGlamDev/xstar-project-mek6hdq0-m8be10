import { useEffect, useState } from 'react';

const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY; // Get current scroll position
    setIsVisible(scrollPosition > 100); // Change visibility based on scroll position
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Add scroll event listener
    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up listener on unmount
    };
  }, []);

  return isVisible; // Return visibility state
};

export default useScrollAnimation;