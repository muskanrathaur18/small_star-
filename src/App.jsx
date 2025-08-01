import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './common/Navbar';
import Footer from './common/Footer';

// Page Components
import Home from './Pages/Home/Home';
import About from './Pages/aboutus/About';
import Services from './Pages/services/Services';
import Contact from './Pages/contactus/Contactus';
import Testimonial from './Pages/testimonial/Testimonial';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonial" element={<Testimonial />} />

       
      </Routes>

      <Footer />
    </>
  );
}

export default App;
