"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
      
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gold z-[60] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav
        className={`fixed top-0 w-full z-50 h-[72px] flex items-center transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? "backdrop-blur-xl bg-navy/80 border-b border-white/5 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="font-display text-2xl font-bold tracking-tight text-white">
              KMB <span className="text-gold">Associates</span><span className="text-gold">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs tracking-[0.2em] uppercase font-medium text-white/70 hover:text-gold transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
            <Link 
              href="#contact"
              className="bg-gold hover:bg-gold-light text-navy px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105 shadow-lg shadow-gold/10"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-3xl text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-navy z-40 flex flex-col items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
          }`}
        >
          {/* Close Button for Mobile Menu */}
          <button 
            className="absolute top-6 right-6 text-3xl text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <HiX />
          </button>

          <div className="flex flex-col items-center space-y-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-4xl font-display font-bold text-white hover:text-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="#contact"
              className="bg-gold text-navy px-10 py-4 rounded-full text-lg font-bold tracking-wide transition-all mt-6"
              onClick={() => setIsMenuOpen(false)}
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
