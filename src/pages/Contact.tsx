
import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "We've received your message and will respond shortly.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <div className="animate-fade-in">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">Contact Us</h1>
            <p className="text-xl opacity-80 mx-auto text-center">
              Have questions about CoinHive? Our team is here to help you.
            </p>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollReveal>
              <h2 className="text-3xl mb-6">Get in Touch</h2>
              <p className="mb-8 opacity-80">
                Whether you have questions about our platform, pricing, or need technical support, our team is ready to answer your questions.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl mb-2">Office</h3>
                  <p className="opacity-80">123 Innovation Drive, San Francisco, CA 94107</p>
                </div>
                
                <div>
                  <h3 className="text-xl mb-2">Email</h3>
                  <p className="opacity-80">support@coinhive.ai</p>
                </div>
                
                <div>
                  <h3 className="text-xl mb-2">Phone</h3>
                  <p className="opacity-80">+1 (555) 123-4567</p>
                </div>
                
                <div>
                  <h3 className="text-xl mb-2">Hours</h3>
                  <p className="opacity-80">Monday-Friday: 9am - 6pm PST</p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <form onSubmit={handleSubmit} className="glassmorphic p-8">
                <div className="mb-6">
                  <label htmlFor="name" className="block mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-200 rounded-lg bg-white/50 focus:outline-none focus:ring-2 focus:ring-gold/50 placeholder-black"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-200 rounded-lg bg-white/50 focus:outline-none focus:ring-2 focus:ring-gold/50 placeholder-black"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-200 rounded-lg bg-white/50 focus:outline-none focus:ring-2 focus:ring-gold/50 placeholder-black"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="partnership">Partnership Opportunity</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full p-3 border border-gray-200 rounded-lg bg-white/50 focus:outline-none focus:ring-2 focus:ring-gold/50 placeholder-black"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="neumorphic-button w-full"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl mb-6">Our Location</h2>
          </ScrollReveal>
          
          <ScrollReveal>
            <div className="rounded-xl overflow-hidden shadow-lg h-96 bg-gray-200">
              {/* Placeholder for map */}
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-lg opacity-70">Interactive Map Will Be Displayed Here</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
