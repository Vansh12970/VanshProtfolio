import React, { useState, useEffect } from 'react';
import { Menu, X, } from 'lucide-react';
import { NAV_LINKS} from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const MotionDiv = motion.div as any;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to render label with Neon #
  const renderNavLink = (label: string) => {
    if (label.startsWith('#')) {
      return (
        <>
          <span className="text-neon">#</span>
          {label.substring(1)}
        </>
      );
    }
    return label;
  };

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  setIsOpen(false);

  if (href.startsWith('#')) {
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      setTimeout(() => {
        window.scrollTo({ top: y, behavior: 'smooth' });
      }, 300); 
    }
  } else {
    window.location.href = href;
  }
};


  return (
    <nav className={`fixed top-0 right-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md border-b border-neon/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Brand (Left Side) */}
        <div className="text-neon font-mono font-bold text-xl tracking-wider">
          VANSH PRATAP SINGH
        </div>

        {/* Desktop Menu (Right Side) */}
        <div className="hidden md:flex items-center gap-8 font-mono text-lg">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-400 hover:text-neon transition-colors duration-300 relative group"
            >
              {renderNavLink(link.label)}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-neon transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <span className="text-gray-600">|</span>
          <span className="text-neon font-bold cursor-pointer hover:shadow-neon transition-shadow">EN</span>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-neon"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <MotionDiv
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-neon/30 overflow-hidden + pointer-events-auto"
          >
            <div className="flex flex-col items-center gap-6 py-8 font-mono">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleMobileNavClick(e, link.href)}
                  className="text-textMain hover:text-neon text-lg cursor-pointer"
                >
                  {renderNavLink(link.label)}
                </a>
              ))}
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;