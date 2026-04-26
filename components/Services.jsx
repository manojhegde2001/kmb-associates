"use client";
import { FaHome, FaBuilding, FaBriefcase, FaChartLine } from "react-icons/fa";
import { useReveal } from "@/hooks/useReveal";

export default function Services() {
  const ref = useReveal();

  const services = [
    {
      title: "Home Loan",
      icon: <FaHome />,
      desc: "Comprehensive solutions for purchase, construction, and repair of residential or commercial properties.",
      price: "₹50L+",
    },
    {
      title: "Mortgage Loan",
      icon: <FaBuilding />,
      desc: "Personal and business loans provided against security to meet your urgent financial requirements.",
      price: "₹50L+",
    },
    {
      title: "Business Loan",
      icon: <FaBriefcase />,
      desc: "Secured and unsecured funding options including working capital, overdrafts, and term loans.",
      price: "₹50L+",
    },
    {
      title: "Project/MSME Loan",
      icon: <FaChartLine />,
      desc: "Strategic financing for new projects and expansion via banking institutions and venture capital.",
      price: "₹50L+",
    },
  ];

  return (
    <section ref={ref} id="services" className="py-24 md:py-32 px-6 bg-[#0D1A2D]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs tracking-[0.22em] uppercase font-medium">Our Expertise</span>
            <div className="w-8 h-px bg-[#C9A84C]" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#EEE9DF] leading-tight mb-6">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-[rgba(238,233,223,0.45)] text-base max-w-2xl mx-auto font-body">
            Strategic advisory and end-to-end support for a wide spectrum of credit requirements.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`reveal delay-${index + 1} bg-[#111F33] border border-[rgba(255,255,255,0.06)] rounded-2xl p-7 transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[#C9A84C]/25 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(0,0,0,0.3)] group`}
            >
              <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center text-[#C9A84C] text-xl transition-all duration-500 group-hover:bg-[#C9A84C] group-hover:text-[#08111E]">
                {service.icon}
              </div>
              
              <h3 className="font-display text-lg font-semibold text-[#EEE9DF] mt-5 mb-3 group-hover:text-[#C9A84C] transition-colors">
                {service.title}
              </h3>
              
              <p className="text-[rgba(238,233,223,0.45)] text-sm leading-relaxed font-body">
                {service.desc}
              </p>

              <div className="h-px bg-white/[0.05] my-5" />
              
              <div className="flex justify-between items-center">
                <span className="text-[#C9A84C] text-[13px] font-semibold">
                  Starting at {service.price}
                </span>
                <a 
                  href="#contact" 
                  className="text-white/30 text-[13px] font-medium hover:text-[#C9A84C] transition-colors flex items-center gap-1.5"
                >
                  Enquire <span className="text-lg">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
