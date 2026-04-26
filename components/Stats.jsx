"use client";
import { useEffect, useState, useRef } from "react";

const StatItem = ({ number, label, isLast }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.5 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const match = number.match(/([^0-9]*)([0-9]+)([^0-9]*)/);
    const endNum = match ? parseInt(match[2]) : 0;
    
    let start = 0;
    const duration = 2000;
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
  }, [isVisible, number]);

  const match = number.match(/([^0-9]*)([0-9]+)([^0-9]*)/);
  const prefix = match ? match[1] : "";
  const suffix = match ? match[3] : "";

  return (
    <div 
      ref={ref}
      className={`flex flex-col items-center text-center px-8 py-4 border-r border-white/[0.06] last:border-r-0 ${isLast ? "border-r-0" : ""}`}
    >
      <div className="font-display text-5xl md:text-6xl font-bold text-gold leading-none">
        {prefix}{count}{suffix}
      </div>
      <p className="text-white/40 text-xs tracking-[0.15em] uppercase mt-3">{label}</p>
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
    <section className="bg-navy-card border-y border-white/[0.05] py-16 px-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 max-w-5xl mx-auto">
        {stats.map((stat, index) => (
          <StatItem 
            key={index} 
            number={stat.number} 
            label={stat.label} 
            isLast={index === stats.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
