"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-md border-b border-border/50' 
        : 'bg-transparent'
    }`}>
      <div className="container flex items-center justify-between py-6">
        <Link 
          className="text-xl font-bold tracking-tight hover:opacity-70 transition-opacity" 
          href="/"
        >
          EZ Studio<span className="text-primary/60">®</span>
        </Link>
        
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8 text-sm font-medium">
            {[
              { href: "/projects", label: "Projects" },
              { href: "/services", label: "Services" },
              { href: "/about", label: "About" },
              { href: "/experience", label: "Experience" },
              { href: "/contact", label: "Contact" }
            ].map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href} 
                  className="relative group hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="md:hidden p-2 hover:bg-secondary/50 rounded-lg transition-colors z-50 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <Menu className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
              isMenuOpen ? 'opacity-0 rotate-45' : 'opacity-100 rotate-0'
            }`} />
            <X className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
              isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-45'
            }`} />
          </div>
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-background/95 backdrop-blur-lg z-40 md:hidden transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <nav className="flex flex-col items-center justify-center h-full">
            <ul className="space-y-8 text-center">
              {[
                { href: "/projects", label: "Projects" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About" },
                { href: "/experience", label: "Experience" },
                { href: "/contact", label: "Contact" }
              ].map((item, index) => (
                <li key={item.href} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <Link 
                    href={item.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl font-medium hover:text-primary transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
              <p className="text-sm text-muted-foreground">Ready to start your project?</p>
              <Link 
                href="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className="inline-block mt-2 px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
