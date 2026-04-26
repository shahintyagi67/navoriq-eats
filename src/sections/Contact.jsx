import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gray-900/50 w-full overflow-hidden">
      <div className="container-custom">
        <SectionTitle title="Get In Touch" subtitle="Contact Us" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">Contact Information</h3>
            <div className="space-y-6">
              {[
                { icon: <FaPhoneAlt />, title: 'Phone Number', lines: ['+1 (234) 567-890', '+1 (234) 987-654'] },
                { icon: <FaEnvelope />, title: 'Email Address', lines: ['info@navoriqeats.com', 'support@navoriqeats.com'] },
                { icon: <FaMapMarkerAlt />, title: 'Our Location', lines: ['123 Culinary Ave, Foodie District', 'New York, NY 10001'] },
                { icon: <FaClock />, title: 'Working Hours', lines: ['Mon - Fri: 09:00 AM - 11:00 PM', 'Sat - Sun: 10:00 AM - 12:00 PM'] },
              ].map((item, i) => (
                <div key={i} className="flex items-start group">
                  <div className="w-11 h-11 shrink-0 bg-primary/10 text-primary flex items-center justify-center rounded-xl mr-4 group-hover:bg-primary group-hover:text-white transition-all text-lg">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-white font-bold mb-1 text-sm sm:text-base">{item.title}</h4>
                    {item.lines.map((l, j) => (
                      <p key={j} className="text-gray-400 text-sm">{l}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 p-6 sm:p-10 rounded-3xl border border-gray-700 w-full"
          >
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-400 text-sm font-bold mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-gray-900 border border-gray-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-bold mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-gray-900 border border-gray-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-400 text-sm font-bold mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="Inquiry about catering"
                  className="w-full bg-gray-900 border border-gray-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm font-bold mb-2">Your Message</label>
                <textarea
                  rows="5"
                  placeholder="Tell us something..."
                  className="w-full bg-gray-900 border border-gray-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-primary hover:bg-red-600 text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.02] shadow-xl shadow-primary/20 text-sm sm:text-base">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
