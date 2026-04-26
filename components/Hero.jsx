"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#08111E]"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1800&q=80"
          alt="KMB Associates Office"
          fill
          priority
          className="object-cover object-center"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#08111E]/95 via-[#0D1A2D]/80 to-[#08111E]/92 z-[1]" />
        
        {/* Decorative Orbs */}
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[#C9A84C]/[0.05] blur-[100px] top-[-10%] left-[-10%] z-[2] animate-float opacity-40" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-[#1E3A5F]/30 blur-[80px] bottom-[-5%] right-[-5%] z-[2] animate-float opacity-30" style={{ animationDelay: '2s' }} />
        <div className="absolute w-[250px] h-[250px] rounded-full bg-[#C9A84C]/[0.04] blur-[60px] top-[30%] right-[20%] z-[2] animate-float opacity-20" style={{ animationDelay: '4s' }} />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-40 pb-28">
        <div className="flex flex-col items-start text-left">
          <h1 
            className="font-display leading-[1.1] mb-6"
            style={{ animation: 'heroFadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s both' }}
          >
            <span className="block text-5xl md:text-6xl lg:text-[72px] text-white font-bold">You&apos;ve arrived at the</span>
            <span className="block text-5xl md:text-6xl lg:text-[72px] text-[#C9A84C] italic font-bold">ultimate financing</span>
            <span className="block text-5xl md:text-6xl lg:text-[72px] text-white font-bold">destination!</span>
          </h1>
          
          <p 
            className="font-body text-[rgba(238,233,223,0.55)] text-lg md:text-xl leading-relaxed max-w-2xl mb-10"
            style={{ animation: 'heroFadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.5s both' }}
          >
            Providing expert solutions for debt funding, stressed assets, and corporate restructuring. 30 years of excellence in banking advisory.
          </p>
          
          <div 
            className="flex flex-wrap gap-4 mb-16"
            style={{ animation: 'heroFadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.7s both' }}
          >
            <a
              href="#contact"
              className="bg-[#C9A84C] text-[#08111E] font-bold px-8 py-4 rounded-full text-sm tracking-wide hover:bg-[#E2BC6A] hover:shadow-[0_0_35px_rgba(201,168,76,0.45)] transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
            <a
              href="#services"
              className="border border-[#C9A84C]/35 text-[#C9A84C] px-8 py-4 rounded-full text-sm tracking-wide hover:bg-[#C9A84C]/10 hover:border-[#C9A84C]/60 transition-all duration-300"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom Decorative Rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent z-[3]" />
    </section>
  );
}
