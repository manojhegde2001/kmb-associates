"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&q=80"
          alt="KMB Associates Office Building"
          fill
          className="object-cover"
          priority
        />
        {/* Layered Gradient Overlay */}
        <div 
          className="absolute inset-0" 
          style={{ 
            background: 'linear-gradient(135deg, rgba(10,22,40,0.92) 0%, rgba(30,58,95,0.75) 50%, rgba(10,22,40,0.88) 100%)' 
          }}
        />
      </div>

      {/* Decorative Floating Orbs */}
      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-gold opacity-10 blur-[120px] rounded-full animate-[float_10s_infinite_alternate]" />
      <div className="absolute bottom-20 right-10 w-[300px] h-[300px] bg-navy-light opacity-20 blur-[100px] rounded-full animate-[float_12s_infinite_alternate_reverse]" />
      <div className="absolute top-1/2 right-1/4 w-[200px] h-[200px] bg-gold opacity-8 blur-[80px] rounded-full animate-[float_8s_infinite_alternate]" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 border border-gold/30 bg-gold/10 rounded-full px-4 py-1.5 text-gold text-[10px] md:text-xs tracking-[0.2em] uppercase mb-8 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards] opacity-0">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            TRUSTED SINCE 1994
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-8">
            <span className="block text-white animate-[fadeInUp_0.8s_ease-out_0.4s_forwards] opacity-0">
              You&apos;ve arrived at the
            </span>
            <span className="block text-gold italic animate-[fadeInUp_0.8s_ease-out_0.6s_forwards] opacity-0">
              ultimate financing
            </span>
            <span className="block text-white animate-[fadeInUp_0.8s_ease-out_0.8s_forwards] opacity-0">
              destination!
            </span>
          </h1>
          
          <p className="font-body text-lg md:text-xl text-white/60 max-w-xl mx-auto mb-10 leading-relaxed animate-[fadeInUp_0.8s_ease-out_1s_forwards] opacity-0">
            Solutions for all your financial needs. KMB Associates LLP specializes in debt funding, stressed assets, and corporate restructuring.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 animate-[fadeInUp_0.8s_ease-out_1.2s_forwards] opacity-0">
            <a
              href="#contact"
              className="bg-gold hover:bg-gold-light text-navy font-bold px-8 py-4 rounded-full text-sm tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.4)] hover:scale-105"
            >
              Get In Touch
            </a>
            <a
              href="#services"
              className="border border-gold/40 text-gold hover:bg-gold/10 px-8 py-4 rounded-full text-sm tracking-wide transition-all duration-300"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-[fadeInUp_1s_ease-out_1.5s_forwards] opacity-0">
        <div className="w-px h-16 bg-gradient-to-b from-gold to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 animate-bounce">
          Scroll to explore
        </span>
      </div>
    </section>
  );
}
