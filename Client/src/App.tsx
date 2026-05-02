import React from 'react';
import Navbar from './Pages/Navbar';
import Hero from './Pages/Hero';
import LatestProducts from './Pages/LatestProducts';
import HowItWorks from './Pages/HowItWorks';
import WhyChooseUs from './Pages/WhyChooseUs';
import ContactSection from './Pages/ContactSection';
import  TestimonialSection from './Pages/TestimonialSection';
import FAQSection from './Pages/FAQSection';
import Footer from './Pages/Footer';
import MapSection from './Pages/MapSection';



const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* ─── Navigation Session ─── */}
      <header className="w-full">
        <Navbar />
      </header>

      {/* Main content area: 
          The 'pt-20' ensures content doesn't hide 
          under the sticky glass navbar.
      */}
      
        <Hero />
        <LatestProducts />
        <HowItWorks />
        <WhyChooseUs />
        <ContactSection />
        <MapSection />
        <TestimonialSection />
        <FAQSection /> 
        <Footer />
        
         {/* Your page content will go here */}
      
    </div>
  );
};

export default App;