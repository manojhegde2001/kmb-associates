import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08111E]">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <WhyUs />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
