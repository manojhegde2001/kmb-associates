"use client";
import Image from "next/image";
import { FaAward, FaHandshake } from "react-icons/fa";
import { useInView } from "@/hooks/useInView";

export default function About() {
  const [contentRef, contentInView] = useInView({ triggerOnce: true });
  const [imageRef, imageInView] = useInView({ triggerOnce: true });

  return (
    <section id="about" className="py-24 bg-[#0A1628] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            ref={contentRef}
            className={`transition-all duration-1000 ${
              contentInView ? "opacity-1 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <span className="text-[#C9A84C] font-dm-sans text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
              ABOUT US
            </span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-8 leading-tight">
              Preserving and enhancing <br />
              <span className="text-[#C9A84C]">business value</span> since 1994.
            </h2>
            <div className="space-y-6 text-[#8A97A8] text-lg font-dm-sans">
              <p>
                KMB, with its management consulting and banking services, focuses on developing customized end-to-end solutions that ensure organizations achieve sustainable growth.
              </p>
              <p>
                With a combined expertise of 30 years (23 years in Banking + 7 years Professional), we enable services in debt funding, stressed assets management, and corporate restructuring.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 p-4 bg-[#111E30] rounded-lg border border-[#1E3A5F]">
                <div className="text-3xl text-[#C9A84C] mt-1">
                  <FaAward />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">30 Years Exp.</h4>
                  <p className="text-[#8A97A8] text-sm">Deep-rooted industry knowledge and expertise.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-[#111E30] rounded-lg border border-[#1E3A5F]">
                <div className="text-3xl text-[#C9A84C] mt-1">
                  <FaHandshake />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Bank Experts</h4>
                  <p className="text-[#8A97A8] text-sm">Negotiation experts for better rates and terms.</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-[#C9A84C] text-[#0A1628] font-bold tracking-wide rounded-sm hover:bg-[#E8C96D] transition-all duration-300"
              >
                Learn More About Our Journey
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div
            ref={imageRef}
            className={`relative transition-all duration-1000 delay-300 ${
              imageInView ? "opacity-1 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            {/* Decorative Offset Border */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#C9A84C] z-0 rounded-sm"></div>
            
            <div className="relative z-10 overflow-hidden rounded-sm">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80"
                alt="Business Meeting at KMB Associates"
                width={900}
                height={600}
                className="object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute top-10 -left-10 bg-[#C9A84C] p-6 text-[#0A1628] z-20 shadow-2xl rounded-sm hidden md:block">
              <div className="text-4xl font-playfair font-bold">30+</div>
              <div className="text-xs font-bold uppercase tracking-widest leading-tight">
                Years of <br /> Excellence
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
