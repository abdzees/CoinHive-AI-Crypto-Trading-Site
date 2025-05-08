
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="text-2xl font-medium tracking-tight">
              <span className="text-gold">Coin</span>Hive
            </Link>
            <p className="mt-4">
              The most advanced AI-powered cryptocurrency trading platform, designed to maximize your profits with minimal effort.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#features" className="hover:text-gold transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-gold transition-colors">How it Works</a></li>
              <li><a href="#pricing" className="hover:text-gold transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Pages</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
              <li><Link to="/blog" className="hover:text-gold transition-colors">Blog</Link></li>
              <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Connect With Us</h3>
            <p className="mb-4">Stay updated with our latest news and updates.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gold transition-colors">Twitter</a>
              <a href="#" className="hover:text-gold transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-gold transition-colors">Discord</a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} CoinHive. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm hover:text-gold transition-colors">Terms of Service</a>
              <a href="#" className="text-sm hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-gold transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
