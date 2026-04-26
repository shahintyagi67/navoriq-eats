import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import FoodCard from '../components/FoodCard';
import { menuData } from '../data/menuData';
import { motion, AnimatePresence } from 'framer-motion';

const Menu = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Veg', 'Non-Veg', 'Drinks', 'Desserts'];

  const filteredItems = filter === 'All' 
    ? menuData 
    : menuData.filter(item => item.category === filter);

  return (
    <section id="menu" className="section-padding bg-gray-900/50 w-full overflow-hidden">
      <div className="container-custom">
        <SectionTitle title="Our Special Menu" subtitle="Chef's Selection" />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm font-bold transition-all ${
                filter === cat
                ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Explore More CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6 italic">Looking for something else?</p>
          <button className="bg-white/5 border border-gray-700 text-white px-10 py-3 rounded-full font-bold hover:bg-white/10 transition-all">
            Download Full Menu (PDF)
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
