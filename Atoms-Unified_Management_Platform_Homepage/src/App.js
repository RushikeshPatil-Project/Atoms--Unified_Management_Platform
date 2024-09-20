// src/App.js
import React from 'react';
import Header from './components/Header';
import './App.css'; // Optional: Import your App-wide styles
import HeroSection from './components/HeroSection';
import TalentSection from './components/TalentSection';
import Service from './components/Service';
import Footer from './components/Footer';
import FAQSection from './components/FAQSection';
import Testimonials from './components/Testimonials';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Box from './components/Box';


import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
      <Router>
      <Header />
      
      <Routes>
       
        
      <Route path="/service" element={<Service />} />
        
      <Route path="/whyatoms" element={<Box/>} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="*" element={<Navigate to="/" />} />
        

        
      </Routes>
      
     
    </Router>
      
      <TalentSection/>
      <HeroSection />
     <Service/>
     <Testimonials/>
     <Box/>
    <AboutUs/>
    <ContactUs/>
     <FAQSection/>
     <Footer/>
    </div>
  );
}

export default App;
