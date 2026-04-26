"use client";
import { useRef } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import useInView from "@/hooks/useInView";

export default function Blog() {
  const headerRef = useRef(null);
  const headerVisible = useInView(headerRef);

  const posts = [
    {
      title: "Know More About Your CIBIL Score and Report",
      excerpt: "Why credit score matters for loan sanction and how to maintain a healthy financial profile.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
      category: "Credit Tips",
    },
    {
      title: "Home Loan Interest Rates",
      excerpt: "Comparison of lowest home loan interest rates in India and what to look for beyond percentages.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
      category: "Home Loans",
    },
    {
      title: "Various Types of Bank Loans in India",
      excerpt: "An extensive overview of loan types available for businesses and individuals in the current market.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
      category: "Finance Guide",
    },
  ];

  return (
    <section id="blog" className="py-28 bg-navy px-4">
      <div className="container mx-auto">
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-gold font-body text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            FINANCIAL INSIGHTS
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Latest From Our Blog
          </h2>
          <p className="text-white/50 text-lg font-body">
            Stay informed with our latest research and expert advice on banking and finance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <BlogCard key={index} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogCard({ post, index }) {
  const cardRef = useRef(null);
  const isVisible = useInView(cardRef);

  return (
    <div
      ref={cardRef}
      className={`group bg-navy-card rounded-2xl overflow-hidden border border-white/5 hover:border-gold/20 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } stagger-${(index % 5) + 1}`}
    >
      <div className="h-52 overflow-hidden relative">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-gold/90 backdrop-blur-sm text-navy text-[10px] font-bold px-3 py-1 rounded-full tracking-wide uppercase">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-8">
        <h3 className="font-display text-xl font-semibold text-white mt-3 leading-snug group-hover:text-gold transition-colors duration-300">
          {post.title}
        </h3>
        <p className="text-white/40 text-sm mt-4 leading-relaxed line-clamp-2 font-body">
          {post.excerpt}
        </p>
        
        <div className="mt-8 flex items-center text-gold text-sm font-medium gap-2 group-hover:gap-4 transition-all duration-300">
          <span className="tracking-wide">Read More</span>
          <FaArrowRight className="text-xs" />
        </div>
      </div>
    </div>
  );
}
