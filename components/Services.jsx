"use client";
import { FaHome, FaLandmark, FaBriefcase, FaProjectDiagram } from "react-icons/fa";
import { useInView } from "@/hooks/useInView";

export default function Services() {
  const [headerRef, headerInView] = useInView({ triggerOnce: true });

  const services = [
    {
      title: "Home Loan",
      icon: <FaHome />,
      desc: "Purchase, Construction and Repair. Finances for purchase or construction of residential/commercial property.",
      price: "₹50L+",
    },
    {
      title: "Mortgage Loan",
      icon: <FaLandmark />,
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
      icon: <FaProjectDiagram />,
      desc: "Finance for new projects and expansion via Banks, VCs, and debentures. Ideal for New MSMEs.",
      price: "₹50L+",
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#111E30]">
      <div className="container mx-auto px-6">
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ${
            headerInView ? "opacity-1 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-[#C9A84C] font-dm-sans text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            OUR EXPERTISE
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-[#8A97A8] text-lg font-dm-sans">
            Tailored financing options designed to meet the unique needs of individuals and growing enterprises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`group bg-[#0A1628] p-10 relative overflow-hidden transition-all duration-700 border-l-0 hover:border-l-[3px] border-[#C9A84C] hover:-translate-y-2 hover:shadow-2xl ${
        inView ? "opacity-1 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="text-5xl text-[#C9A84C] mb-8 transition-transform duration-500 group-hover:scale-110">
        {service.icon}
      </div>
      <h3 className="text-2xl font-playfair font-bold text-white mb-4">
        {service.title}
      </h3>
      <p className="text-[#8A97A8] font-dm-sans mb-8 leading-relaxed">
        {service.desc}
      </p>
      
      <div className="flex items-center justify-between mt-auto">
        <span className="inline-block px-3 py-1 border border-[#C9A84C] text-[#C9A84C] text-xs font-bold rounded-full">
          Starting at {service.price}
        </span>
        <a href="#contact" className="text-white text-sm font-bold hover:text-[#C9A84C] transition-colors flex items-center">
          Enquire <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </div>
  );
}
