"use client";
import { useRef } from "react";
import Image from "next/image";
import { FaAward, FaHandshake, FaArrowRight } from "react-icons/fa";
import useInView from "@/hooks/useInView";

export default function About() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const leftVisible = useInView(leftRef);
  const rightVisible = useInView(rightRef);

  return (
    <section id="about" className="py-28 px-4 bg-navy overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-[60%_40%] gap-16 items-center">
          {/* Left Content */}
          <div
            ref={leftRef}
            className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              leftVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-gold inline-block" />
              <span className="text-gold font-body text-xs font-bold tracking-[0.2em] uppercase">
                ABOUT US
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 leading-snug">
              Preserving and enhancing <br />
              <span className="text-gold">business value</span> since 1994.
            </h2>
            
            <div className="space-y-6 text-white/60 text-base font-body leading-relaxed max-w-2xl">
              <p>
                KMB, with its management consulting and banking services, focuses on developing customized end-to-end solutions that ensure organizations achieve sustainable growth.
              </p>
              <p>
                With a combined expertise of 30 years (23 years in Banking + 7 years Professional), we enable services in debt funding, stressed assets management, and corporate restructuring.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              <div className="bg-navy-card border border-gold/20 rounded-xl px-5 py-4 flex items-center gap-4 group hover:border-gold/40 transition-colors">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold text-xl shrink-0 group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                  <FaAward />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">30 Years Exp.</h4>
                  <p className="text-white/40 text-xs">Deep-rooted industry knowledge.</p>
                </div>
              </div>
              
              <div className="bg-navy-card border border-gold/20 rounded-xl px-5 py-4 flex items-center gap-4 group hover:border-gold/40 transition-colors">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold text-xl shrink-0 group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                  <FaHandshake />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Bank Experts</h4>
                  <p className="text-white/40 text-xs">Expert negotiation & terms.</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-gold font-medium hover:gap-4 transition-all duration-300"
              >
                <span>Learn More About Our Journey</span>
                <FaArrowRight className="text-sm" />
                <div className="h-px bg-gold w-0 group-hover:w-full transition-all duration-300" />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div
            ref={rightRef}
            className={`relative transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              rightVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            {/* Gold accent border */}
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-gold/30 rounded-2xl z-0" />
            
            <div className="relative z-10 overflow-hidden rounded-2xl aspect-[4/5] md:aspect-auto">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80"
                alt="Business Meeting at KMB Associates"
                width={900}
                height={1200}
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Overlay badge bottom-left */}
            <div className="absolute bottom-6 left-6 bg-navy/90 backdrop-blur-sm border border-gold/20 rounded-xl px-6 py-5 z-20">
              <div className="font-display text-3xl font-bold text-gold">30+</div>
              <div className="text-white/60 text-xs font-medium uppercase tracking-wider mt-1">
                Years of Excellence
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
