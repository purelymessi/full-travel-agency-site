import React from 'react';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/layout/HeroSection';
import TeamSection from './components/layout/TeamSection'; 
import ServicesSection from './components/layout/ServicesSection';
import PortfolioSection from './components/layout/PortfolioSection';
import TestimonialSectoin from './components/layout/TestimonialSection';
import Collab from './components/layout/Collab'
import Footer from './components/layout/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <TeamSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialSectoin />
      <Collab />
      <Footer />
    </div>
  );
}

export default App;
