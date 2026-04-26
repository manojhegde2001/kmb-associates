"use client";
import { useRef } from "react";
import { FaUserTie, FaBolt, FaSearchDollar } from "react-icons/fa";
import useInView from "@/hooks/useInView";

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
    <section className="py-24 bg-navy-card relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {features.map((feature, index) => (
            <WhyUsItem 
              key={index} 
              feature={feature} 
              index={index} 
              isLast={index === features.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUsItem({ feature, index, isLast }) {
  const itemRef = useRef(null);
  const isVisible = useInView(itemRef);

  return (
    <div
      ref={itemRef}
      className={`relative p-12 flex flex-col items-start transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } stagger-${index + 1} ${
        !isLast ? "md:border-r border-white/5" : ""
      }`}
    >
      {/* Decorative large icon */}
      <div className="absolute top-8 right-8 text-6xl text-gold/5 pointer-events-none">
        {feature.icon}
      </div>

      <div className="w-12 h-0.5 bg-gold mb-8" />
      
      <h3 className="text-2xl font-display font-bold text-white mb-4">
        {feature.title}
      </h3>
      
      <p className="text-white/50 font-body text-sm leading-relaxed max-w-xs">
        {feature.desc}
      </p>
    </div>
  );
}
