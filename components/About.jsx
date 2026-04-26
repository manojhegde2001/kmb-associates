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
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs tracking-[0.22em] uppercase font-medium">About KMB</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight mb-8">
            Expert financial consulting <br className="hidden sm:block" />
            <span className="text-[#C9A84C]">since 2014.</span>
          </h2>

          <p className="text-[#1A1A1A]/60 leading-relaxed text-base mb-10 font-body">
            KMB Associates LLP specializes in providing customized end-to-end solutions for sustainable business growth.
            Established in 2014, we deliver excellence in debt funding, stressed assets management, and corporate restructuring.
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-5 p-5 bg-white rounded-xl border border-black/[0.03] group hover:border-[#C9A84C]/20 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="w-11 h-11 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center text-[#C9A84C] shrink-0 group-hover:bg-[#C9A84C] group-hover:text-white transition-all duration-500">
                <FaAward className="text-xl" />
              </div>
              <div>
                <p className="font-semibold text-[#1A1A1A] text-sm">Established 2014</p>
                <span className="text-[#1A1A1A]/40 text-xs">A decade of financial excellence.</span>
              </div>
            </div>

            <div className="flex items-center gap-5 p-5 bg-white rounded-xl border border-black/[0.03] group hover:border-[#C9A84C]/20 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="w-11 h-11 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center text-[#C9A84C] shrink-0 group-hover:bg-[#C9A84C] group-hover:text-white transition-all duration-500">
                <FaHandshake className="text-xl" />
              </div>
              <div>
                <p className="font-semibold text-[#1A1A1A] text-sm">Trusted Advisory</p>
                <span className="text-[#1A1A1A]/40 text-xs">Expert negotiation and strategic planning.</span>
              </div>
            </div>
          </div>

          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 text-[#C9A84C] font-semibold text-sm hover:gap-4 transition-all duration-300 group"
          >
            Work with our experts <span className="text-lg">→</span>
          </a>
        </div>

        {/* Right Image */}
        <div className="reveal-right delay-2 relative h-[500px]">
          {/* Brand accent border */}
          <div className="absolute -top-4 -right-4 inset-0 border border-[#C9A84C]/20 rounded-2xl z-0" />

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
              <div className="font-display text-3xl font-bold text-[#C9A84C]">Since 2014</div>
              <div className="text-[#1A1A1A]/40 text-[10px] tracking-widest uppercase font-bold mt-1">Excellence in Finance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
