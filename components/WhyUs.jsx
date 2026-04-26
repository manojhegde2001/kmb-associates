"use client";
import { FaUserTie, FaBolt, FaSearchDollar } from "react-icons/fa";
import { useInView } from "@/hooks/useInView";

export default function WhyUs() {
  const [ref, inView] = useInView({ triggerOnce: true });

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
    <section className="py-24 bg-[#1E3A5F]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={ref}
              style={{ transitionDelay: `${index * 150}ms` }}
              className={`text-center transition-all duration-1000 ${
                inView ? "opacity-1 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="w-20 h-20 bg-[#0A1628] rounded-full flex items-center justify-center text-3xl text-[#C9A84C] mx-auto mb-8 border-t-2 border-[#C9A84C]">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-playfair font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-[#FAFAFA] font-dm-sans opacity-80 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
