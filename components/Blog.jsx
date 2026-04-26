"use client";
import { useState } from "react";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

export default function Blog() {
  const ref = useReveal();
  const [imgErrors, setImgErrors] = useState({});

  const posts = [
    {
      title: "Know More About Your CIBIL Score and Report",
      excerpt: "Understanding the critical role of credit scores in loan sanctions and financial health maintenance.",
      image: "/Credit.png",
      fallback: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
      category: "Credit Tips",
    },
    {
      title: "Home Loan Interest Rates",
      excerpt: "A comprehensive comparison of current market rates and strategic advice beyond just the percentages.",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",
      category: "Home Loans",
    },
    {
      title: "Types of Bank Loans in India",
      excerpt: "An essential guide to the various credit facilities available for businesses and individuals.",
      image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=600&q=80",
      category: "Finance Guide",
    },
  ];

  return (
    <section ref={ref} id="blog" className="py-24 md:py-32 px-6 bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs tracking-[0.22em] uppercase font-medium">Financial Insights</span>
            <div className="w-8 h-px bg-[#C9A84C]" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0A1628] leading-tight">
            Latest From Our Blog
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <div 
              key={index}
              className={`reveal delay-${index + 1} group bg-white border border-black/[0.04] rounded-2xl overflow-hidden transition-all duration-350 ease-in-out hover:border-[#C9A84C]/20 hover:-translate-y-1 hover:shadow-lg`}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={imgErrors[index] ? (post.fallback || post.image) : post.image}
                  alt={post.title}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  onError={() => setImgErrors(prev => ({ ...prev, [index]: true }))}
                />
              </div>
              
              <div className="p-6">
                <span className="bg-[#C9A84C]/10 text-[#C9A84C] text-[11px] tracking-wide px-3 py-1 rounded-full font-semibold">
                  {post.category}
                </span>
                
                <h3 className="font-display text-base font-semibold text-[#0A1628] mt-4 mb-2 group-hover:text-[#C9A84C] transition-colors leading-snug">
                  {post.title}
                </h3>
                
                <p className="text-[#0A1628]/50 text-sm leading-relaxed line-clamp-2 font-body mb-5">
                  {post.excerpt}
                </p>
                
                <a 
                  href="#contact"
                  className="pt-4 border-t border-black/[0.05] text-[#C9A84C] text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Read More <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
