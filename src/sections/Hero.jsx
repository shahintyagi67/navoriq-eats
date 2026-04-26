import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaPlayCircle, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  const stats = [
    { number: '15+', label: 'Years' },
    { number: '200+', label: 'Menu Items' },
    { number: '50K+', label: 'Customers' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden w-full"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1920&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-32 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT — Text Content */}
          <div className="w-full min-w-0">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 px-3 py-2 rounded-full mb-6 max-w-full"
            >
              <FaStar className="text-secondary text-[10px] shrink-0" />
              <span className="text-secondary text-[10px] sm:text-xs font-bold tracking-widest uppercase truncate">
                Rated #1 Restaurant in the City
              </span>
              <FaStar className="text-secondary text-[10px] shrink-0" />
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-5"
            >
              Taste the{' '}
              <span className="text-primary">Art</span>{' '}
              of<br className="hidden sm:block" />{' '}
              <span className="text-white">Modern </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
                Dining
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-md"
            >
              Experience a symphony of flavors crafted with passion and served
              with elegance. Join us for an unforgettable culinary journey.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <button className="flex items-center gap-2 bg-primary hover:bg-red-600 text-white px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-lg shadow-primary/25">
                Explore Menu
                <FaArrowRight className="text-xs" />
              </button>
              <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-105">
                <FaPlayCircle className="text-primary text-base shrink-0" />
                Our Story
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-6 sm:gap-10 flex-wrap"
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-left">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-0.5">
                    {stat.number}
                  </h3>
                  <p className="text-gray-500 text-xs">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Floating Cards (desktop only) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="hidden lg:flex flex-col items-end gap-5 w-full min-w-0"
          >
            {/* Featured Dish Card */}
            <div className="relative bg-black/50 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl w-72">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
                alt="Featured Dish"
                className="w-full h-44 object-cover"
              />
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-white font-bold text-sm">Chef's Special</p>
                    <p className="text-gray-400 text-xs mt-0.5">Grilled Salmon & Herbs</p>
                  </div>
                  <span className="bg-primary text-white text-xs font-black px-3 py-1 rounded-full shrink-0">
                    $24
                  </span>
                </div>
                <div className="flex items-center gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-secondary text-xs" />
                  ))}
                  <span className="text-gray-500 text-xs ml-1">(4.9)</span>
                </div>
              </div>
            </div>

            {/* Promo badge */}
            <div className="bg-secondary/10 border border-secondary/30 rounded-2xl px-5 py-4 w-64 backdrop-blur-md">
              <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-1">
                🔥 Today's Offer
              </p>
              <p className="text-white text-sm font-bold">20% off on all desserts</p>
              <p className="text-gray-400 text-xs mt-0.5">Valid until 10 PM tonight</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Glow FX */}
      <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-48 sm:h-72 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-20 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-secondary/5 blur-[80px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Hero;
