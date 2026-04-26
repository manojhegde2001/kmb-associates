"use client";
import { useEffect, useState, useRef } from "react";
import { useInView } from "@/hooks/useInView";

const Counter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [ref, isInView] = useInView({ triggerOnce: true });
  
  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const endNum = parseInt(end.replace(/\D/g, ""));
    const increment = endNum / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= endNum) {
        setCount(endNum);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-playfair font-bold text-[#C9A84C] mb-2">
        {count}{suffix}
      </div>
    </div>
  );
};

export default function Stats() {
  const stats = [
    { number: "30", label: "Years Experience", suffix: "+" },
    { number: "500", label: "Clients Served", suffix: "+" },
    { number: "4", label: "Loan Products", suffix: "" },
    { number: "50", label: "Starting Amount", suffix: "L+" },
  ];

  return (
    <section className="bg-[#1E3A5F] py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center ${
                index !== stats.length - 1 ? "md:border-r border-[#C9A84C]/20" : ""
              }`}
            >
              <Counter end={stat.number} suffix={stat.suffix} />
              <p className="text-[#FAFAFA] text-sm font-medium tracking-widest uppercase opacity-80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Texture Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
    </section>
  );
}
