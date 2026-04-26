"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-navy"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&q=80"
          alt="KMB Associates Office Building"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/95 via-[#1E3A5F]/70 to-[#0A1628]/90 z-[1]" />
        
        {/* Decorative Orbs */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full bg-[#C9A84C]/[0.06] blur-[100px] top-[-10%] left-[-10%] z-[2] animate-float" 
          style={{ animationDuration: '8s' }} 
        />
        <div 
          className="absolute w-[400px] h-[400px] rounded-full bg-[#1E3A5F]/40 blur-[80px] bottom-[-5%] right-[-5%] z-[2] animate-float" 
          style={{ animationDuration: '11s', animationDelay: '2s' }} 
        />
        <div 
          className="absolute w-[250px] h-[250px] rounded-full bg-[#C9A84C]/[0.04] blur-[60px] top-[30%] right-[20%] z-[2] animate-float" 
          style={{ animationDuration: '14s', animationDelay: '4s' }} 
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-[3] w-full max-w-5xl mx-auto px-6 md:px-12 pt-32 pb-24">
        <div className="flex flex-col items-start text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-[#C9A84C]/25 bg-[#C9A84C]/[0.08] rounded-full px-4 py-1.5 mb-8 animate-fadeInUp opacity-0" style={{ animationDelay: '0.1s' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-blink" />
            <span className="text-[#C9A84C] text-xs tracking-[0.18em] uppercase font-medium">TRUSTED SINCE 1994</span>
          </div>
          
          <h1 className="font-display leading-[1.1] mb-6 animate-fadeInUp opacity-0" style={{ animationDelay: '0.25s' }}>
            <span className="block text-4xl md:text-6xl lg:text-7xl text-white font-bold">You&apos;ve arrived at the</span>
            <span className="block text-4xl md:text-6xl lg:text-7xl text-gold italic font-bold">ultimate financing</span>
            <span className="block text-4xl md:text-6xl lg:text-7xl text-white font-bold">destination!</span>
          </h1>
          
          <p className="font-body text-white/55 text-lg md:text-xl leading-relaxed max-w-2xl mb-10 animate-fadeInUp opacity-0" style={{ animationDelay: '0.4s' }}>
            Solutions for all your financial needs. KMB Associates LLP specializes in debt funding, stressed assets, and corporate restructuring.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-16 animate-fadeInUp opacity-0" style={{ animationDelay: '0.55s' }}>
            <a
              href="#contact"
              className="bg-gold text-navy font-bold px-8 py-4 rounded-full text-sm tracking-wide hover:bg-gold-light hover:shadow-[0_0_35px_rgba(201,168,76,0.45)] transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
            <a
              href="#services"
              className="border border-gold/35 text-gold px-8 py-4 rounded-full text-sm tracking-wide hover:bg-gold/10 hover:border-gold/60 transition-all duration-300"
            >
              Our Services
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center gap-2 mt-4 animate-fadeInUp opacity-0" style={{ animationDelay: '0.7s' }}>
            <div className="w-6 h-9 rounded-full border border-white/20 flex justify-center pt-1.5">
              <div className="w-1 h-1.5 bg-white/40 rounded-full animate-bounce" />
            </div>
            <span className="text-white/25 text-[11px] tracking-[0.15em] uppercase">Scroll to explore</span>
          </div>
        </div>
      </div>
      
      {/* Bottom Decorative Rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent z-[3]" />
    </section>
  );
}
