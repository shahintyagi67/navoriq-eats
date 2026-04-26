import React from 'react';

export const Loader = () => (
  <div className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center">
    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4" />
    <h2 className="text-white text-2xl font-bold tracking-widest animate-pulse">
      NAVORIQ<span className="text-primary">EATS</span>
    </h2>
  </div>
);

import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-primary text-white p-4 rounded-full shadow-2xl hover:bg-secondary transition-all duration-300 z-50 animate-bounce"
    >
      <FaArrowUp />
    </button>
  );
};
