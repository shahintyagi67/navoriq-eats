import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding bg-black w-full overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <img
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80"
                alt="Chef Cooking"
                className="w-full h-64 sm:h-80 md:h-auto object-cover"
              />
            </div>
            {/* Floating stat — only lg+ to avoid overflow on smaller screens */}
            <div className="absolute -bottom-8 -right-4 lg:-right-10 bg-gray-900 border border-gray-800 p-5 lg:p-8 rounded-2xl shadow-2xl z-20 hidden sm:block">
              <h4 className="text-3xl lg:text-4xl font-black text-primary mb-1">15+</h4>
              <p className="text-gray-400 text-xs lg:text-sm font-bold uppercase tracking-widest">
                Years of <br /> Excellence
              </p>
            </div>
            <div className="absolute -top-6 -left-6 w-28 h-28 bg-primary rounded-full blur-[60px] opacity-20 -z-10" />
          </motion.div>

          {/* Text Side */}
          <div className="text-left w-full min-w-0">
            <SectionTitle title="Our Story" subtitle="About Navoriq Eats" />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-gray-300 text-base lg:text-lg leading-relaxed mb-5"
            >
              Founded in 2008, Navoriq Eats began with a simple mission: to bring authentic flavors
              and innovative cooking techniques together in a warm, inviting atmosphere.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm leading-relaxed mb-8"
            >
              Our chefs source the finest ingredients from local farmers and global artisans,
              ensuring every plate we serve is a masterpiece of taste and presentation.
              From our signature steaks to our handcrafted desserts, we invite you to
              discover why we've been a favourite for over a decade.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div>
                <h5 className="text-white font-bold mb-1 text-sm sm:text-base">Fresh Ingredients</h5>
                <p className="text-gray-500 text-xs sm:text-sm">Farm-to-table approach for maximum flavor.</p>
              </div>
              <div>
                <h5 className="text-white font-bold mb-1 text-sm sm:text-base">Expert Chefs</h5>
                <p className="text-gray-500 text-xs sm:text-sm">World-class culinary masters at your service.</p>
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 bg-transparent border-2 border-primary text-primary px-7 py-3 rounded-full font-bold text-sm hover:bg-primary hover:text-white transition-all"
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
