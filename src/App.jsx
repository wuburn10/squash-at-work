import React, { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ProgramsSection } from './components/ProgramsSection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { PastEventsSection } from './components/PastEventsSection';
import { CoachesSection } from './components/CoachesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CalendarSection } from './components/CalendarSection';
import { CTAFooter } from './components/CTAFooter';

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <ProgramsSection />
        <ActivitiesSection />
        <PastEventsSection />
        <CoachesSection />
        <TestimonialsSection />
        <CalendarSection />
      </main>
      <CTAFooter />
    </div>
  );
}

export default App;
