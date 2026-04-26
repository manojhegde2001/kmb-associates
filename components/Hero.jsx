import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&q=80"
          alt="KMB Associates Office Building"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0A1628]/75"></div>
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#C9A84C]/10 blur-[120px] rounded-full animate-[float_6s_ease-in-out_infinite_alternate]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1E3A5F]/20 blur-[150px] rounded-full animate-[float_8s_ease-in-out_infinite_alternate_reverse]"></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-[#C9A84C] font-dm-sans text-sm font-semibold tracking-[0.2em] mb-4 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
            TRUSTED SINCE 1994
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white leading-tight mb-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
            You&apos;ve arrived at the <br /> 
            <span className="text-[#C9A84C]">ultimate</span> financing destination!
          </h1>
          
          <p className="text-lg md:text-xl text-[#8A97A8] font-dm-sans max-w-2xl mx-auto mb-10 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
            Solutions for all your financial needs. KMB Associates LLP specializes in debt funding, stressed assets, and corporate restructuring.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.8s_forwards]">
            <a
              href="#contact"
              className="px-8 py-4 bg-[#C9A84C] text-[#0A1628] font-bold tracking-wide rounded-sm hover:bg-[#E8C96D] transition-all duration-300 w-full sm:w-auto"
            >
              Get In Touch
            </a>
            <a
              href="#services"
              className="px-8 py-4 border border-[#C9A84C] text-[#C9A84C] font-bold tracking-wide rounded-sm hover:bg-[#C9A84C]/10 transition-all duration-300 w-full sm:w-auto"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-0.5 h-12 bg-gradient-to-b from-[#C9A84C] to-transparent opacity-50"></div>
      </div>
    </section>
  );
}
