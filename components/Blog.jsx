import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function Blog() {
  const posts = [
    {
      title: "Know More About Your CIBIL Score and Report",
      excerpt: "Why credit score matters for loan sanction and how to maintain a healthy financial profile.",
      image: "/Credit.png",
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
    <section id="blog" className="py-28 px-6 bg-navy relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <hr className="w-10 h-[1px] bg-gold border-0" />
            <span className="text-gold text-xs tracking-[0.2em] uppercase font-medium">FINANCIAL INSIGHTS</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Latest From Our Blog
          </h2>
          <p className="text-white/45 text-base max-w-xl mx-auto font-body">
            Stay informed with our latest research and expert advice on banking and finance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <div 
              key={index}
              className={`reveal group bg-navy-card border border-white/[0.06] rounded-2xl overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-gold/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] hover:-translate-y-1 delay-${index + 1}`}
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gold/10 backdrop-blur-md text-gold text-[10px] font-bold px-3 py-1 rounded-full tracking-wide uppercase border border-gold/20">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-white leading-snug mb-3 group-hover:text-gold transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed line-clamp-2 font-body">
                  {post.excerpt}
                </p>
                
                <div className="mt-5 pt-4 border-t border-white/[0.05] flex items-center gap-2 text-gold text-sm font-medium group-hover:gap-3 transition-all duration-300">
                  <span>Read More</span>
                  <FaArrowRight />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
