import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import ContactModal from './components/ContactModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div className="relative min-h-screen w-full bg-[#0C0C0C] font-sans antialiased overflow-x-clip text-[#D7E2EA]">
      {/* Scrollable Layout sections */}
      <HeroSection onContactClick={openContact} />
      <MarqueeSection />
      <AboutSection onContactClick={openContact} />
      <ServicesSection />
      <ProjectsSection />

      {/* Global Interactive Elements */}
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </div>
  );
}
