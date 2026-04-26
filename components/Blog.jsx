import Image from "next/image";

export default function Blog() {
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
    <section id="blog" className="py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#C9A84C] font-dm-sans text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            FINANCIAL INSIGHTS
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#0A1628] mb-6">
            Latest From Our Blog
          </h2>
          <p className="text-[#8A97A8] text-lg font-dm-sans">
            Stay informed with our latest research and expert advice on banking and finance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <div key={index} className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest block mb-4">
                  {post.category}
                </span>
                <h3 className="text-2xl font-playfair font-bold text-[#0A1628] mb-4 group-hover:text-[#C9A84C] transition-colors">
                  {post.title}
                </h3>
                <p className="text-[#8A97A8] font-dm-sans mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <button className="text-[#0A1628] font-bold text-sm tracking-wide relative group-hover:text-[#C9A84C] transition-colors">
                  Read More <span className="ml-1">→</span>
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#C9A84C] transform scale-x-0 transition-transform group-hover:scale-x-100 origin-left"></span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
