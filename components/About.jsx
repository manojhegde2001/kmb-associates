"use client";
import Image from "next/image";
import { FaAward, FaHandshake } from "react-icons/fa";
import { useReveal } from "@/hooks/useReveal";

export default function About() {
  const ref = useReveal();

  return (
    <section ref={ref} id="about" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Content */}
        <div className="reveal-left">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#00C2FF]" />
            <span className="text-[#00C2FF] text-xs tracking-[0.22em] uppercase font-medium">About KMB</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#002B5B] leading-tight mb-8">
            Expert financial consulting <br />
            <span className="text-[#00C2FF]">since 1994.</span>
          </h2>
          
          <p className="text-[#002B5B]/60 leading-relaxed text-base mb-10 font-body">
            KMB Associates LLP specializes in providing customized end-to-end solutions for sustainable business growth. 
            With over 30 years of combined expertise in banking and management consulting, we deliver excellence in 
            debt funding, stressed assets management, and corporate restructuring.
          </p>
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-5 p-5 bg-[#F4F7FA] rounded-xl border border-black/[0.03] group hover:border-[#00C2FF]/20 transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-[#00C2FF]/10 flex items-center justify-center text-[#00C2FF] shrink-0 group-hover:bg-[#00C2FF] group-hover:text-white transition-all duration-500">
                <FaAward className="text-xl" />
              </div>
              <div>
                <p className="font-semibold text-[#002B5B] text-sm">30 Years of Excellence</p>
                <span className="text-[#002B5B]/40 text-xs">Deep-rooted industry knowledge.</span>
              </div>
            </div>
            
            <div className="flex items-center gap-5 p-5 bg-[#F4F7FA] rounded-xl border border-black/[0.03] group hover:border-[#00C2FF]/20 transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-[#00C2FF]/10 flex items-center justify-center text-[#00C2FF] shrink-0 group-hover:bg-[#00C2FF] group-hover:text-white transition-all duration-500">
                <FaHandshake className="text-xl" />
              </div>
              <div>
                <p className="font-semibold text-[#002B5B] text-sm">Trusted Advisory</p>
                <span className="text-[#002B5B]/40 text-xs">Expert negotiation and strategic planning.</span>
              </div>
            </div>
          </div>

          <a 
            href="#contact" 
            className="mt-10 inline-flex items-center gap-2 text-[#00C2FF] font-semibold text-sm hover:gap-4 transition-all duration-300 group"
          >
            Work with our experts <span className="text-lg">→</span>
          </a>
        </div>

        {/* Right Image */}
        <div className="reveal-right delay-2 relative h-[500px]">
          {/* Brand accent border */}
          <div className="absolute -top-4 -right-4 inset-0 border border-[#00C2FF]/20 rounded-2xl z-0" />
          
          <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80"
              alt="Professional Business Meeting"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
            
            {/* Experience Badge */}
            <div className="absolute bottom-6 left-6 z-20 bg-white/95 border border-black/[0.05] rounded-xl px-6 py-5 shadow-xl">
              <div className="font-display text-4xl font-bold text-[#00C2FF]">30+</div>
              <div className="text-[#002B5B]/40 text-[10px] tracking-widest uppercase font-bold mt-1">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
