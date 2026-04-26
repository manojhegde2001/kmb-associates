"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border)] relative overflow-hidden">
      <div className="py-14 px-6 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Col 1 */}
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="inline-block mb-6">
            {!logoError ? (
              <Image 
                src="/KMB Logo.png" 
                alt="KMB Associates" 
                width={120} 
                height={48} 
                className="object-contain"
                onError={() => setLogoError(true)}
              />
            ) : (
              <span style={{fontFamily:'var(--font-playfair)'}}>
                <span className="text-[#1A1A1A] font-bold text-xl">KMB</span>
                <span className="text-[#C9A84C] font-bold text-xl"> Associates</span>
              </span>
            )}
          </Link>
          <p className="text-[#1A1A1A]/40 text-sm mt-4 leading-relaxed max-w-xs font-body">
            &quot;You&apos;ve arrived at the ultimate financing destination!&quot; Solutions for all your financial needs.
          </p>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="text-[10px] text-[#C9A84C] tracking-[0.2em] uppercase font-bold mb-6">Quick Links</h4>
          <ul className="flex flex-col">
            {["Home", "Services", "About", "Blog", "Contact"].map((link) => (
              <li key={link}>
                <Link 
                  href={`#${link.toLowerCase()}`} 
                  className="text-[#1A1A1A]/40 text-sm hover:text-[#1A1A1A] transition-colors leading-9 font-body"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="text-[10px] text-[#C9A84C] tracking-[0.2em] uppercase font-bold mb-6">Our Services</h4>
          <ul className="flex flex-col">
            {["Home Loan", "Mortgage Loan", "Business Loan", "MSME Loan"].map((service) => (
              <li key={service}>
                <Link 
                  href="#services" 
                  className="text-[#1A1A1A]/40 text-sm hover:text-[#1A1A1A] transition-colors leading-9 font-body"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 */}
        <div>
          <h4 className="text-[10px] text-[#C9A84C] tracking-[0.2em] uppercase font-bold mb-6">Contact Details</h4>
          <div className="text-[#1A1A1A]/40 text-sm leading-8 font-body mt-2">
            <p>No.308, Shreshta Bhumi No 87,</p>
            <p>K R Road, V V Puram,</p>
            <p>Bengaluru 560004</p>
            <p className="mt-4 text-[#1A1A1A] font-medium">+91 99646 26265</p>
            <p>vikram@kmbassociates.in</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-black/[0.04] mt-12 pt-6 pb-8 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[#1A1A1A]/25 text-xs font-body">© {currentYear} KMB Associates LLP. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-4">
          {[FaFacebook, FaLinkedin, FaInstagram, FaYoutube].map((Icon, idx) => (
            <a
              key={idx}
              href="#"
              className="text-[#1A1A1A]/20 hover:text-[#C9A84C] transition-all duration-300"
            >
              <Icon className="text-lg" />
            </a>
          ))}
        </div>
      </div>

      <WhatsAppButton />
    </footer>
  );
}

function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group cursor-pointer">
      {/* Pulse ring */}
      <div className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-[pulse-ring_2.5s_ease_out_infinite]" />
      
      {/* Button */}
      <a
        href="https://wa.me/919964626265"
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.45)] hover:scale-110 transition-transform duration-300"
      >
        <FaWhatsapp className="text-white text-2xl md:text-[26px]" />
      </a>

      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-white border border-black/10 text-black/80 text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300 pointer-events-none shadow-md">
        Chat with us
      </div>
    </div>
  );
}
