
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Cryptocurrency Trading",
    excerpt: "How artificial intelligence is revolutionizing the way we trade digital assets and what to expect in the coming years.",
    date: "May 2, 2025",
    author: "Abdullah Zeeshan",
    image: "/placeholder.svg",
    category: "Technology",
  },
  {
    id: 2,
    title: "Understanding Market Sentiment Analysis for Crypto Traders",
    excerpt: "Dive into how natural language processing algorithms can interpret social media and news to predict market movements.",
    date: "April 28, 2025",
    author: "Abdullah Zeeshan",
    image: "/placeholder.svg",
    category: "Trading",
  },
  {
    id: 3,
    title: "5 Risk Management Strategies Every Crypto Trader Should Know",
    excerpt: "Protect your investments with these proven risk management techniques specifically designed for cryptocurrency markets.",
    date: "April 15, 2025",
    author: "Abdullah Zeeshan",
    image: "/placeholder.svg",
    category: "Strategy",
  },
  {
    id: 4,
    title: "How CoinHive's AI Predicted the Recent Bitcoin Rally",
    excerpt: "A case study on how our algorithms detected early signals of Bitcoin's price surge weeks before traditional analysts.",
    date: "April 3, 2025",
    author: "Abdullah Zeeshan",
    image: "/placeholder.svg",
    category: "Case Study",
  },
];

const Blog: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fade-in">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">CoinHive Blog</h1>
            <p className="text-xl opacity-80">
              Insights, tutorials, and updates from the world of AI-powered crypto trading.
            </p>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Featured Post */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <Link to={`/blog/${blogPosts[0].id}`} className="block group">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ aspectRatio: '16/9' }}
                  />
                </div>
                
                <div>
                  <span className="text-sm text-gold mb-2 block">{blogPosts[0].category}</span>
                  <h2 className="text-2xl md:text-3xl mb-4 group-hover:text-gold transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="opacity-80 mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="opacity-70">{blogPosts[0].author}</span>
                    <span className="opacity-70">{blogPosts[0].date}</span>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>
      
      {/* All Posts */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <ScrollReveal className="mb-10">
            <h2 className="text-3xl md:text-4xl">Latest Articles</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <ScrollReveal key={post.id} delay={index * 100}>
                <Link to={`/blog/${post.id}`} className="block group">
                  <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-sm text-gold mb-2 block">{post.category}</span>
                      <h3 className="text-xl mb-3 group-hover:text-gold transition-colors">
                        {post.title}
                      </h3>
                      <p className="opacity-80 mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="opacity-70">{post.author}</span>
                        <span className="opacity-70">{post.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl mb-4">Subscribe to Our Newsletter</h2>
            <p className="opacity-80 mb-6">
              Get the latest insights, tutorials, and updates from CoinHive delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow p-3 border border-border bg-card rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50"
              />
              <button type="submit" className="neumorphic-button whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
