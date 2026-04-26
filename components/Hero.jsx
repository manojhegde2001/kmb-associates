"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-white"
      style={{ isolation: 'isolate' }}
    >
      {/* --- Layer 1: Base Image --- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1800&q=80"
          alt="KMB Associates Office"
          fill
          priority
          className="object-cover object-center scale-105"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        {/* Soft Overlay for Contrast - Increased for better logo visibility */}
        <div className="absolute inset-0 bg-white/75 z-[1]" />
      </div>

      {/* --- Layer 2: Animated gradient mesh (Brand Theme) --- */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: `
          radial-gradient(ellipse 80% 60% at 20% 40%, rgba(201, 168, 76, 0.08) 0%, transparent 60%),
          radial-gradient(ellipse 60% 80% at 80% 20%, rgba(26, 26, 26, 0.06) 0%, transparent 55%)
        `,
        backgroundSize: '300% 300%',
        animation: 'meshShift 18s ease infinite',
      }} />

      {/* --- Layer 5: Orbs (Floating for depth) --- */}
      <div className="hero-orb" style={{
        position: 'absolute', zIndex: 4,
        top: '-10%', left: '-5%',
        width: '50vw', height: '50vw',
        maxWidth: '600px', maxHeight: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle at center, rgba(201, 168, 76, 0.1) 0%, transparent 70%)',
        filter: 'blur(80px)',
        animation: 'orbFloat1 22s ease-in-out infinite',
      }} />

      <div className="hero-orb" style={{
        position: 'absolute', zIndex: 4,
        top: '15%', right: '-5%',
        width: '45vw', height: '45vw',
        maxWidth: '500px', maxHeight: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle at center, rgba(26, 26, 26, 0.08) 0%, transparent 70%)',
        filter: 'blur(100px)',
        animation: 'orbFloat2 28s ease-in-out infinite',
      }} />

      {/* --- Layer 10: Bottom fade into next section --- */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '160px', zIndex: 6,
        background: 'linear-gradient(to bottom, transparent, #FFFFFF)',
        pointerEvents: 'none',
      }} />

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-40 pb-28">
        <div className="flex flex-col items-start text-left">
          <h1 
            className="font-display leading-[1.1] mb-6 drop-shadow-sm"
            style={{ animation: 'heroFadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s both' }}
          >
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[72px] text-[#1A1A1A] font-bold">You&apos;ve arrived at the</span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[72px] text-[#C9A84C] italic font-bold">ultimate financing</span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[72px] text-[#1A1A1A] font-bold">destination!</span>
          </h1>
          
          <p 
            className="font-body text-[#1A1A1A] text-lg md:text-xl leading-relaxed max-w-2xl mb-10 font-medium drop-shadow-sm"
            style={{ animation: 'heroFadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.5s both' }}
          >
            Providing expert solutions for debt funding, stressed assets, and corporate restructuring. Excellence since 2014 in banking advisory.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto"
            style={{ animation: 'heroFadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.7s both' }}
          >
            <a
              href="#contact"
              className="bg-[#C9A84C] text-white font-bold px-8 py-4 rounded-full text-sm tracking-wide hover:bg-[#E2BC6A] hover:shadow-[0_10px_30px_rgba(201,168,76,0.3)] transition-all duration-300 hover:scale-105 text-center"
            >
              Get In Touch
            </a>
            <a
              href="#services"
              className="bg-[#1A1A1A]/5 backdrop-blur-sm border border-[#1A1A1A]/10 text-[#1A1A1A] px-8 py-4 rounded-full text-sm tracking-wide hover:bg-[#1A1A1A]/10 transition-all duration-300 text-center"
            >
              Our Services
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
