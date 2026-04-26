"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
      
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollWidth(scrolled);
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
        id="scroll-progress" 
        style={{ width: `${scrollWidth}%` }}
      />

      <nav
        className={`fixed top-0 w-full z-50 h-[72px] flex items-center transition-all duration-400 ease-in-out ${
          isScrolled
            ? "bg-[rgba(8,17,30,0.90)] backdrop-blur-xl border-b border-white/[0.06] shadow-lg"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center h-full">
          {/* Logo */}
          <Link href="/" className="relative z-50 flex items-center">
            {!logoError ? (
              <Image 
                src="/KMB Logo.png" 
                alt="KMB Associates" 
                width={130} 
                height={48} 
                className="object-contain"
                priority
                onError={() => setLogoError(true)}
              />
            ) : (
              <span style={{fontFamily:'var(--font-playfair)'}}>
                <span className="text-white font-bold text-xl">KMB</span>
                <span className="text-[#C9A84C] font-bold text-xl"> Associates</span>
              </span>
            )}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[12px] tracking-[0.14em] uppercase text-[rgba(238,233,223,0.55)] hover:text-[#C9A84C] transition-colors duration-300 font-medium"
              >
                {link.name}
              </Link>
            ))}
            
            <Link 
              href="#contact"
              className="bg-[#C9A84C] text-[#08111E] font-bold text-[12px] tracking-wide px-5 py-2.5 rounded-full hover:bg-[#E2BC6A] hover:shadow-[0_0_24px_rgba(201,168,76,0.4)] transition-all duration-300 ml-4"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-1.5 focus:outline-none group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-[#08111E]/98 backdrop-blur-2xl z-40 flex flex-col items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
            isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-3xl font-display font-bold text-white/80 hover:text-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="#contact"
              className="bg-gold text-navy font-bold px-10 py-4 rounded-full text-lg tracking-wide transition-all mt-6"
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
