import { FaHome, FaBuilding, FaBriefcase, FaChartLine } from "react-icons/fa";

export default function Services() {
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
    <section id="services" className="py-28 px-6 bg-navy relative overflow-hidden">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,#132035_0%,transparent_70%)] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <hr className="w-10 h-[1px] bg-gold border-0" />
            <span className="text-gold text-xs tracking-[0.2em] uppercase font-medium">OUR EXPERTISE</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-white/45 text-base max-w-xl mx-auto font-body">
            Tailored financing options designed to meet the unique needs of individuals and growing enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`reveal bg-navy-card border border-white/[0.06] rounded-2xl p-8 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:border-gold/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3),0_0_0_1px_rgba(201,168,76,0.1)] group delay-${index + 1}`}
            >
              <div className="w-14 h-14 rounded-xl bg-gold/[0.08] flex items-center justify-center text-gold text-2xl transition-all duration-500 group-hover:bg-gold group-hover:text-navy">
                {service.icon}
              </div>
              
              <h3 className="font-display text-xl font-semibold text-white mt-6 mb-3">
                {service.title}
              </h3>
              
              <p className="text-white/45 text-sm leading-relaxed font-body">
                {service.desc}
              </p>

              <div className="w-full h-px bg-white/[0.05] my-6" />
              
              <div className="flex justify-between items-center">
                <span className="text-gold text-sm font-medium">
                  Starting at {service.price}
                </span>
                <a 
                  href="#contact" 
                  className="text-white/35 text-sm hover:text-gold transition-colors cursor-pointer flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                >
                  Enquire <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
