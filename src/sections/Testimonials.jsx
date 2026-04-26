import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { testimonials } from '../data/menuData';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-gray-900/30 w-full overflow-hidden">
      <div className="container-custom">
        <SectionTitle title="Customer Reviews" subtitle="Testimonials" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/40 p-6 sm:p-8 rounded-3xl relative overflow-hidden group"
            >
              <FaQuoteLeft className="absolute -top-4 -right-4 text-gray-700 text-6xl opacity-20 group-hover:text-primary transition-colors" />
              
              <div className="flex text-amber-400 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <FaStar key={i} className="mr-1" />
                ))}
              </div>

              <p className="text-gray-300 italic mb-8 relative z-10 leading-relaxed">
                "{t.review}"
              </p>

              <div className="flex items-center">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-14 h-14 rounded-full border-2 border-primary p-0.5 mr-4"
                />
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-gray-500 text-sm">Happy Customer</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
