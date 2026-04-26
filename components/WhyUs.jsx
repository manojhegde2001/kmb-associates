import { FaUserTie, FaBolt, FaSearchDollar } from "react-icons/fa";

export default function WhyUs() {
  const features = [
    {
      title: "Expertise",
      icon: <FaUserTie />,
      desc: "30 years of banking experience providing deep insights into financial structures.",
    },
    {
      title: "Efficiency",
      icon: <FaBolt />,
      desc: "Proper assessment, guidance & negotiation with banks for better rates/terms.",
    },
    {
      title: "Advisory",
      icon: <FaSearchDollar />,
      desc: "Specialized corporate experience and research capabilities in banking advisory.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-navy-card border-y border-white/[0.05] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <hr className="w-10 h-[1px] bg-gold border-0" />
            <span className="text-gold text-xs tracking-[0.2em] uppercase font-medium">WHY CHOOSE US</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Our Competitive Advantage
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`reveal relative p-8 rounded-2xl bg-navy/50 border border-white/[0.05] overflow-hidden group transition-all duration-300 hover:border-gold/20 delay-${index + 1}`}
            >
              {/* Top accent */}
              <div className="w-10 h-[2px] bg-gold mb-8 transition-all duration-300 group-hover:w-16" />
              
              {/* Decorative icon */}
              <div className="absolute top-6 right-6 text-6xl text-white/[0.03] transition-all duration-500 group-hover:text-gold/5 group-hover:scale-110">
                {feature.icon}
              </div>
              
              <h3 className="font-display text-xl font-semibold text-white mb-4 transition-colors duration-300 group-hover:text-gold">
                {feature.title}
              </h3>
              
              <p className="text-white/45 text-sm leading-relaxed font-body">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
