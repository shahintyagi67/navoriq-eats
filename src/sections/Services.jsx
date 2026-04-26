import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { FaUtensils, FaBiking, FaShoppingBag } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaUtensils />,
      title: "Fine Dining",
      desc: "Experience luxury and taste in our elegantly designed dining space.",
      color: "bg-amber-500"
    },
    {
      id: 2,
      icon: <FaBiking />,
      title: "Fast Delivery",
      desc: "Get your favorite meals delivered hot and fresh at your doorstep.",
      color: "bg-red-500"
    },
    {
      id: 3,
      icon: <FaShoppingBag />,
      title: "Quick Takeaway",
      desc: "Order online and pick up your meal without any waiting time.",
      color: "bg-blue-500"
    }
  ];

  return (
    <section id="services" className="section-padding bg-black">
      <div className="container-custom">
        <SectionTitle title="Our Services" subtitle="What We Offer" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 border border-gray-800 p-7 sm:p-10 rounded-3xl text-center hover:bg-gray-800/50 transition-all group"
            >
              <div className={`w-20 h-20 ${service.color} text-white text-3xl flex items-center justify-center mx-auto rounded-2xl mb-8 group-hover:scale-110 transition-transform shadow-xl`}>
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
