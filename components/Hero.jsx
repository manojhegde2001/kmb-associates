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
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1800&q=80"
          alt="KMB Associates Office"
          fill
          priority
          className="object-cover object-center"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        {/* Light Overlay for Contrast */}
        <div className="absolute inset-0 bg-white/90 z-[1]" />
      </div>

      {/* --- Layer 2: Animated gradient mesh (Subtle Light Theme) --- */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: `
          radial-gradient(ellipse 80% 60% at 20% 40%, rgba(201, 168, 76, 0.05) 0%, transparent 60%),
          radial-gradient(ellipse 60% 80% at 80% 20%, rgba(30, 90, 160, 0.04) 0%, transparent 55%),
          radial-gradient(ellipse 90% 50% at 50% 80%, rgba(255, 255, 255, 0.6) 0%, transparent 65%)
        `,
        backgroundSize: '300% 300%',
        animation: 'meshShift 18s ease infinite',
      }} />

      {/* --- Layer 3: Noise/grain texture overlay --- */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '180px 180px',
        opacity: 0.015,
        mixBlendMode: 'multiply',
      }} />

      {/* --- Layer 4: Subtle dot grid --- */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 3,
        backgroundImage: 'radial-gradient(circle, rgba(10, 22, 40, 0.03) 1px, transparent 1px)',
        backgroundSize: '36px 36px',
        animation: 'gridFade 8s ease-in-out infinite',
      }} />

      {/* --- Layer 5: Orbs (Reduced Opacity for Light Theme) --- */}
      <div className="hero-orb" style={{
        position: 'absolute', zIndex: 4,
        top: '-10%', left: '-5%',
        width: '50vw', height: '50vw',
        maxWidth: '600px', maxHeight: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle at center, rgba(201,168,76,0.06) 0%, transparent 70%)',
        filter: 'blur(80px)',
        animation: 'orbFloat1 22s ease-in-out infinite',
      }} />

      <div className="hero-orb" style={{
        position: 'absolute', zIndex: 4,
        top: '10%', right: '-5%',
        width: '40vw', height: '40vw',
        maxWidth: '500px', maxHeight: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle at center, rgba(30,90,160,0.04) 0%, transparent 70%)',
        filter: 'blur(90px)',
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
            className="font-display leading-[1.1] mb-6"
            style={{ animation: 'heroFadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s both' }}
          >
            <span className="block text-5xl md:text-6xl lg:text-[72px] text-[#0A1628] font-bold">You&apos;ve arrived at the</span>
            <span className="block text-5xl md:text-6xl lg:text-[72px] text-[#C9A84C] italic font-bold">ultimate financing</span>
            <span className="block text-5xl md:text-6xl lg:text-[72px] text-[#0A1628] font-bold">destination!</span>
          </h1>
          
          <p 
            className="font-body text-[#0A1628]/70 text-lg md:text-xl leading-relaxed max-w-2xl mb-10 font-medium"
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
              className="bg-[#C9A84C] text-white font-bold px-8 py-4 rounded-full text-sm tracking-wide hover:bg-[#E2BC6A] hover:shadow-[0_0_35px_rgba(201,168,76,0.25)] transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
            <a
              href="#services"
              className="border border-[#C9A84C]/35 text-[#C9A84C] px-8 py-4 rounded-full text-sm tracking-wide hover:bg-[#C9A84C]/5 hover:border-[#C9A84C]/60 transition-all duration-300"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
