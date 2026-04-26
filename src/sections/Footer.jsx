import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 pt-16 pb-8 w-full overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand Info */}
          <div className="space-y-5 sm:col-span-2 lg:col-span-1">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tighter">
              NAVORIQ<span className="text-primary">EATS</span>
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm">
              Elevating the art of dining through passion, innovation, and the finest local ingredients.
              Join us for a culinary experience like no other.
            </p>
            <div className="flex space-x-3">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-gray-900 text-gray-400 flex items-center justify-center rounded-full hover:bg-primary hover:text-white transition-all border border-gray-800 text-sm"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base sm:text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Menu', 'Services', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    to={link.toLowerCase()}
                    smooth={true}
                    className="text-gray-500 hover:text-primary cursor-pointer transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold text-base sm:text-lg mb-6">Support</h4>
            <ul className="space-y-3">
              {['Privacy Policy', 'Terms of Service', 'Reservation Policy', 'Career', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-primary transition-colors text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-base sm:text-lg mb-6">Newsletter</h4>
            <p className="text-gray-500 mb-5 text-sm">Subscribe to get latest updates and offers.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-gray-900 border border-gray-800 text-white rounded-full px-5 py-3 text-sm focus:outline-none focus:border-primary pr-14"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-primary text-white flex items-center justify-center rounded-full hover:bg-red-600 transition-all shrink-0">
                <FaPaperPlane className="text-xs" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-900 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-gray-600 text-xs sm:text-sm text-center">
          <p>© {new Date().getFullYear()} Navoriq Eats Restaurant. All rights reserved.</p>
          <p>Designed with ❤️ for Food Lovers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
