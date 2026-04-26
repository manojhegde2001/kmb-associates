import Image from "next/image";
import { FaAward, FaHandshake } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-28 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Col */}
        <div className="reveal-left">
          <div className="flex items-center gap-3 mb-6">
            <hr className="w-10 h-[1px] bg-gold border-0" />
            <span className="text-gold text-xs tracking-[0.2em] uppercase font-medium">ABOUT US</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-snug text-white mb-6">
            Preserving and enhancing <br />
            <span className="text-gold">business value</span> since 1994.
          </h2>
          
          <p className="text-white/55 leading-relaxed text-base mb-8 font-body">
            KMB, with its management consulting and banking services, focuses on developing customized end-to-end solutions that ensure organizations achieve sustainable growth.
            <br /><br />
            With a combined expertise of 30 years (23 years in Banking + 7 years Professional), we enable services in debt funding, stressed assets management, and corporate restructuring.
          </p>
          
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4 bg-navy-card border border-white/[0.07] rounded-xl px-5 py-4 transition-all duration-300 hover:border-gold/30 group">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold text-lg shrink-0 group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                <FaAward />
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-white text-sm">30 Years Exp.</p>
                <span className="text-white/40 text-xs">Deep-rooted industry knowledge and expertise.</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-navy-card border border-white/[0.07] rounded-xl px-5 py-4 transition-all duration-300 hover:border-gold/30 group">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold text-lg shrink-0 group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                <FaHandshake />
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-white text-sm">Bank Experts</p>
                <span className="text-white/40 text-xs">Negotiation experts for better rates and terms.</span>
              </div>
            </div>
          </div>

          <a 
            href="#contact" 
            className="mt-8 inline-flex items-center gap-2 text-gold font-medium text-sm hover:gap-4 transition-all duration-300 group"
          >
            Learn More About Our Journey <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Right Col */}
        <div className="reveal-right relative self-stretch">
          {/* Gold accent box */}
          <div className="absolute -top-5 -right-5 w-full h-full border border-gold/20 rounded-2xl z-0" />
          
          <div className="relative z-10 rounded-2xl overflow-hidden w-full h-[480px]">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80"
              alt="KMB Associates Team"
              fill
              className="object-cover"
            />
            
            {/* Overlay badge */}
            <div className="absolute bottom-6 left-6 z-20 bg-navy/90 backdrop-blur-sm border border-gold/20 rounded-xl px-6 py-5">
              <div className="font-display text-4xl font-bold text-gold">30+</div>
              <div className="text-white/60 text-sm mt-1">Years of Excellence</div>
            </div>

            {/* Decorative watermark element */}
            <div className="absolute bottom-6 right-6 z-20 opacity-80 w-32 h-32">
              <Image 
                src="/path142.png" 
                alt="Decorative element" 
                fill 
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
