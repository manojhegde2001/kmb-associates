"use client";
import { useRef } from "react";
import { FaHome, FaBuilding, FaBriefcase, FaChartLine } from "react-icons/fa";
import useInView from "@/hooks/useInView";

export default function Services() {
  const headerRef = useRef(null);
  const headerVisible = useInView(headerRef);

  const services = [
    {
      title: "Home Loan",
      icon: <FaHome />,
      desc: "Purchase, Construction and Repair. Finances for purchase or construction of residential/commercial property.",
      price: "₹50L+",
    },
    {
      title: "Mortgage Loan",
      icon: <FaBuilding />,
      desc: "Personal and Business. Loans provided by FIs against security to meet any financial need.",
      price: "₹50L+",
    },
    {
      title: "Business Loan",
      icon: <FaBriefcase />,
      desc: "Unsecured (term loans for Corporates) and Secured (Working capital/CC/Overdraft with Security).",
      price: "₹50L+",
    },
    {
      title: "Project/MSME Loan",
      icon: <FaChartLine />,
      desc: "Finance for new projects and expansion via Banks, VCs, and debentures. Ideal for New MSMEs.",
      price: "₹50L+",
    },
  ];

  return (
    <section id="services" className="py-28 bg-navy relative overflow-hidden">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,58,95,0.15)_0%,rgba(10,22,40,0)_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-gold font-body text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            OUR EXPERTISE
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-white/50 text-lg font-body">
            Tailored financing options designed to meet the unique needs of individuals and growing enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  const cardRef = useRef(null);
  const isVisible = useInView(cardRef);

  return (
    <div
      ref={cardRef}
      className={`group bg-navy-card border border-white/5 rounded-2xl p-8 relative transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-gold/40 hover:shadow-[0_8px_40px_rgba(201,168,76,0.08)] hover:-translate-y-2.5 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } stagger-${(index % 5) + 1}`}
    >
      {/* Hover left border trick */}
      <div className="absolute left-0 top-0 bottom-0 w-0 bg-gold transition-all duration-300 group-hover:w-1 rounded-l-2xl" />

      <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center text-gold text-2xl mb-8 group-hover:bg-gold group-hover:text-navy transition-all duration-500">
        {service.icon}
      </div>
      
      <h3 className="text-xl font-display font-semibold text-white mb-4">
        {service.title}
      </h3>
      
      <p className="text-white/50 font-body text-sm leading-relaxed mb-6">
        {service.desc}
      </p>

      <div className="w-full h-px bg-white/5 my-6" />
      
      <div className="flex items-center justify-between">
        <span className="text-gold text-sm font-medium">
          Starting at {service.price}
        </span>
        <a 
          href="#contact" 
          className="text-white/40 text-sm hover:text-gold transition-all duration-300 flex items-center gap-2 group-hover:gap-3"
        >
          Enquire <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>
    </div>
  );
}
