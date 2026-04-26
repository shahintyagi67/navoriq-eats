import React, { useState, useEffect } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Menu from './sections/Menu';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import { Loader, ScrollToTop } from './components/Utilities';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-black min-h-screen selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Services />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
