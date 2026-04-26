"use client";
import { useEffect, useState, useRef } from "react";
import useInView from "@/hooks/useInView";

const Counter = ({ end, label, isFirst, isLast }) => {
  const [count, setCount] = useState(0);
  const containerRef = useRef(null);
  const isVisible = useInView(containerRef);
  const [isDone, setIsDone] = useState(false);

  // Extract prefix, number, and suffix
  const match = end.match(/([^0-9]*)([0-9]+)([^0-9]*)/);
  const prefix = match ? match[1] : "";
  const endNum = match ? parseInt(match[2]) : 0;
  const suffix = match ? match[3] : "";

  useEffect(() => {
    if (!isVisible || isDone) return;

    let current = 0;
    const steps = 30;
    const stepValue = endNum / steps;
    let iteration = 0;

    const timer = setInterval(() => {
      iteration++;
      current += stepValue;
      
      if (iteration >= steps) {
        setCount(endNum);
        setIsDone(true);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [isVisible, endNum, isDone]);

  return (
    <div 
      ref={containerRef} 
      className={`flex flex-col items-center justify-center text-center py-8 md:py-0 relative ${
        !isLast ? "lg:after:content-[''] lg:after:absolute lg:after:right-0 lg:after:top-1/4 lg:after:h-1/2 lg:after:w-px lg:after:bg-gold/20" : ""
      }`}
    >
      <div className={`font-display text-4xl md:text-5xl font-bold text-gold mb-2 transition-all duration-1000 ${isDone ? "animate-[shimmer_2s_infinite]" : ""}`}>
        {prefix}{count}{suffix}
      </div>
      <p className="font-body text-[10px] md:text-xs text-white/50 tracking-[0.2em] uppercase mt-2">
        {label}
      </p>
    </div>
  );
};

export default function Stats() {
  const stats = [
    { number: "30+", label: "Years Experience" },
    { number: "500+", label: "Happy Clients" },
    { number: "4", label: "Loan Products" },
    { number: "₹50L+", label: "Min. Loan Size" },
  ];

  return (
    <section className="bg-navy-card border-y border-white/5 py-16 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stats.map((stat, index) => (
            <Counter 
              key={index} 
              end={stat.number} 
              label={stat.label} 
              isFirst={index === 0}
              isLast={index === stats.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
