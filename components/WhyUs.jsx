"use client";
import { FaUserTie, FaBolt, FaSearchDollar } from "react-icons/fa";
import { useReveal } from "@/hooks/useReveal";

export default function WhyUs() {
  const ref = useReveal();

  const features = [
    {
      title: "Deep Expertise",
      icon: <FaUserTie />,
      desc: "30 years of specialized banking experience providing profound insights into financial structures.",
    },
    {
      title: "Operational Efficiency",
      icon: <FaBolt />,
      desc: "Streamlined assessment and negotiation processes to secure the most favorable market rates.",
    },
    {
      title: "Banking Advisory",
      icon: <FaSearchDollar />,
      desc: "Comprehensive research and corporate advisory capabilities focused on banking and debt instruments.",
    },
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs tracking-[0.22em] uppercase font-medium">Why Choose KMB</span>
            <div className="w-8 h-px bg-[#C9A84C]" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0A1628] leading-tight mb-4">
            Our Competitive Advantage
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`reveal delay-${index + 1} p-8 bg-[#F8F9FA] rounded-2xl border border-black/[0.03] transition-all duration-300 hover:border-[#C9A84C]/10 group relative overflow-hidden`}
            >
              <div className="w-10 h-0.5 bg-[#C9A84C] mb-7 transition-all duration-500 group-hover:w-16" />
              
              <div className="text-black/[0.03] text-6xl absolute top-8 right-8 pointer-events-none transition-all duration-500 group-hover:text-[#C9A84C]/10">
                {feature.icon}
              </div>

              <h3 className="font-display text-xl font-semibold text-[#0A1628] mb-3 transition-colors group-hover:text-[#C9A84C]">
                {feature.title}
              </h3>
              
              <p className="text-[#0A1628]/50 text-sm leading-relaxed font-body">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
