import React from 'react';
import { Link } from 'react-router-dom';
export const Footer: React.FC = () => {
  return <footer className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <Link to="/" className="inline-block">
              <img alt="CoinHive Logo" className="h-8 mx-auto md:mx-0" src="/lovable-uploads/e34086cb-4578-4512-b757-9c3053d5eb63.png" />
            </Link>
            <p className="mt-4 text-center md:text-left">
              This site is a demo created for viewing purposes only. Not a real crypto trading platform.
            </p>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-lg font-medium mb-4 md:text-center text-left">Quick Links</h3>
            <ul className="space-y-2">
              <li className=""><Link to="/#home" className="hover:text-gold transition-colors">Home</Link></li>
              <li className=""><Link to="/#features" className="hover:text-gold transition-colors">Features</Link></li>
              <li><Link to="/#how-it-works" className="hover:text-gold transition-colors">How it Works</Link></li>
              <li><Link to="/#pricing" className="hover:text-gold transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          <div className="text-center md:text-left rounded-none">
            <h3 className="text-lg font-medium mb-4 text-center md:text-left">Pages</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-lg font-medium mb-4 md:text-center text-left">Connect With Us</h3>
            <p className="mb-4">Stay updated with our latest news and updates.</p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.linkedin.com/in/abdullah-zeeshan-6386ba186/" className="hover:text-gold transition-colors">Twitter</a>
              <a href="https://www.linkedin.com/in/abdullah-zeeshan-6386ba186/" className="hover:text-gold transition-colors">LinkedIn</a>
              <a href="https://www.linkedin.com/in/abdullah-zeeshan-6386ba186/" className="hover:text-gold transition-colors">Discord</a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} CoinHive Demo. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm hover:text-gold transition-colors">Terms of Service</a>
              <a href="#" className="text-sm hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-gold transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;