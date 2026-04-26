import React from 'react';
import { motion } from 'framer-motion';

const FoodCard = ({ item }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-primary transition-colors group"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          ${item.price.toFixed(2)}
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
            {item.name}
          </h3>
          <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded border ${
            item.category === 'Veg' ? 'border-green-500 text-green-500' : 
            item.category === 'Non-Veg' ? 'border-red-500 text-red-500' : 'border-amber-500 text-amber-500'
          }`}>
            {item.category}
          </span>
        </div>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {item.description}
        </p>
        <button className="w-full py-2 bg-transparent border border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all duration-300">
          Order Now
        </button>
      </div>
    </motion.div>
  );
};

export default FoodCard;
