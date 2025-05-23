import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { List, X } from 'lucide-react';
import { Link } from 'react-router-dom';
const navLinks = [{
  name: 'Home',
  href: '#home'
}, {
  name: 'Features',
  href: '#features'
}, {
  name: 'How it Works',
  href: '#how-it-works'
}, {
  name: 'Testimonials',
  href: '#testimonials'
}, {
  name: 'Pricing',
  href: '#pricing'
}, {
  name: 'FAQ',
  href: '#faq'
}];
export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <nav className={cn("fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300", scrolled ? "bg-background/70 backdrop-blur-lg shadow-sm" : "")}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img alt="CoinHive Logo" src="/lovable-uploads/16935a0d-7c9b-472d-9ac2-14c879349b47.png" className="h-16 w-40 object-contain" />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => <a key={link.name} href={link.href} className="opacity-80 hover:opacity-100 hover:text-gold-dark transition-all">
              {link.name}
            </a>)}
          <a href="#contact" className="neumorphic-button bg-gold text-background">
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(true)} aria-label="Open menu">
          <List size={24} />
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={cn("fixed inset-y-0 right-0 w-full max-w-xs bg-background shadow-lg z-50 transition-all duration-300 transform", isOpen ? "translate-x-0" : "translate-x-full")}>
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center">
            <span className="text-xl font-medium">
              <img alt="CoinHive Logo" src="/lovable-uploads/66e1e136-bb73-4fea-80df-07f024b4d787.png" className="h-8 w-15 object-contain" />
            </span>
            <button onClick={() => setIsOpen(false)} aria-label="Close menu">
              <X size={24} />
            </button>
          </div>
          
          <div className="mt-8 flex flex-col space-y-6">
            {navLinks.map(link => <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg opacity-80 hover:opacity-100 px-[10px]">
                {link.name}
              </a>)}
            <a href="#contact" className="neumorphic-button text-center mt-8 bg-gold text-background" onClick={() => setIsOpen(false)}>
              Get Started
            </a>
          </div>
        </div>
      </div>
      
      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsOpen(false)} />}
    </nav>;
};
export default Navigation;