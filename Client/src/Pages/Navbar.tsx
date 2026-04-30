import React, { useState, useEffect } from 'react';
import { Menu, X, Eye } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position to toggle background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Shop', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Help', href: '#' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled 
          ? 'glass-nav py-2 shadow-md' // Your original glass-nav/normal bg when scrolled
          : 'bg-transparent py-4'      // Fully transparent at the top
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-3 group cursor-pointer">
            <div className="w-11 h-11 bg-[var(--brand-primary)] rounded-xl flex items-center justify-center shadow-lg shadow-[var(--brand-primary)]/20 group-hover:scale-105 transition-transform">
               <Eye className="text-white w-6 h-6" />
            </div>
            <span className={`text-2xl font-bold tracking-tight font-heading transition-colors duration-300 ${
              scrolled ? 'text-foreground' : 'text-white drop-shadow-md'
            }`}>
              Brite Vision<span className="text-[var(--brand-primary)]"> Optical</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-all relative group py-2 ${
                  scrolled 
                    ? 'text-muted-foreground hover:text-[var(--brand-primary)]' 
                    : 'text-white hover:text-[var(--brand-primary)] drop-shadow-sm'
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--brand-primary)] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-dark)] text-white px-6 py-2.5 rounded-[var(--radius)] font-semibold shadow-md hover:shadow-green-500/20 transition-all transform hover:-translate-y-0.5 active:scale-95">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none transition-colors ${
                scrolled 
                  ? 'text-foreground hover:bg-[var(--brand-bg-light)]' 
                  : 'text-white bg-white/10 backdrop-blur-sm'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-[var(--brand-border)] animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 rounded-lg text-base font-medium text-muted-foreground hover:text-[var(--brand-primary)] hover:bg-[var(--brand-bg-light)] transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-[var(--brand-border)] space-y-3">
              <button className="w-full bg-[var(--brand-primary)] text-white py-3 rounded-[var(--radius)] font-semibold shadow-sm">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;