import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Menu', to: 'menu' },
    { name: 'Services', to: 'services' },
    { name: 'Testimonials', to: 'testimonials' },
    { name: 'Contact', to: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-md shadow-xl' : 'bg-transparent'
    }`}>

      {/* Top announcement bar — hidden on scroll */}
      {!isScrolled && (
        <div className="bg-primary/10 border-b border-white/5 py-2 w-full overflow-hidden">
          <div className="container-custom flex justify-center">
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-secondary text-[10px] font-bold tracking-[0.3em] uppercase text-center truncate"
            >
              ✨ Welcome to Navoriq Eats — Taste the Excellence ✨
            </motion.p>
          </div>
        </div>
      )}

      {/* Main nav bar */}
      <div className={`container-custom flex justify-between items-center transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-4'
      }`}>

        {/* Logo */}
        <Link to="home" smooth={true} className="cursor-pointer shrink-0">
          <span className="text-xl sm:text-2xl font-black text-white tracking-tighter">
            NAVORIQ<span className="text-primary">EATS</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                offset={-80}
                className="text-gray-300 hover:text-primary font-medium cursor-pointer transition-colors text-sm uppercase tracking-wider"
                activeClass="text-primary"
                spy={true}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block shrink-0">
          <button className="bg-primary text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-red-600 transition-all hover:scale-105 shadow-lg shadow-primary/20">
            Book a Table
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-2xl text-white cursor-pointer p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-950 border-t border-gray-800 overflow-hidden w-full"
          >
            <ul className="flex flex-col px-4 py-6 gap-4">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth={true}
                    offset={-80}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:text-primary text-base font-semibold block cursor-pointer py-1 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <button className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-red-600 transition-colors">
                  Book a Table
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
