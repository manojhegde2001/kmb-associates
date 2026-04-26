import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#060D18] border-t border-white/[0.05]">
      <div className="py-16 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Col 1 */}
        <div className="md:col-span-2">
          <Image 
            src="/KMB Logo.png" 
            alt="KMB Associates Logo" 
            width={130} 
            height={52} 
            className="object-contain"
          />
          <p className="text-white/40 text-sm leading-relaxed mt-4 max-w-xs font-body">
            &quot;You&apos;ve arrived at the ultimate financing destination!&quot; Solutions for all your financial needs. KMB Associates LLP specializes in debt funding and corporate restructuring.
          </p>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="text-[10px] text-gold uppercase tracking-[0.2em] font-semibold mb-6">Quick Links</h4>
          <ul className="flex flex-col gap-2">
            {["Home", "Services", "About", "Blog", "Contact"].map((link) => (
              <li key={link}>
                <Link 
                  href={`#${link.toLowerCase()}`} 
                  className="text-white/40 text-sm hover:text-white transition-colors leading-8 font-body"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="text-[10px] text-gold uppercase tracking-[0.2em] font-semibold mb-6">Our Services</h4>
          <ul className="flex flex-col gap-2">
            {["Home Loan", "Mortgage Loan", "Business Loan", "Project/MSME Loan"].map((service) => (
              <li key={service}>
                <Link 
                  href="#services" 
                  className="text-white/40 text-sm hover:text-white transition-colors leading-8 font-body"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 */}
        <div>
          <h4 className="text-[10px] text-gold uppercase tracking-[0.2em] font-semibold mb-6">Contact Details</h4>
          <div className="text-white/40 text-sm leading-7 font-body">
            <p>No.308, Shreshta Bhumi No 87,</p>
            <p>K R Road, V V Puram,</p>
            <p>Bengaluru 560004</p>
            <p className="mt-4 text-white font-medium">+91 99646 26265</p>
            <p>vikram@kmbassociates.in</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.04] py-6 px-6 max-w-7xl mx-auto flex flex-col sm:sm:flex-row justify-between items-center gap-4">
        <p className="text-white/25 text-xs font-body">© {currentYear} KMB Associates LLP. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-3">
          {[FaFacebook, FaLinkedin, FaInstagram, FaYoutube].map((Icon, idx) => (
            <a
              key={idx}
              href="#"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-gold hover:text-gold hover:bg-gold/5 transition-all duration-300"
            >
              <Icon />
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
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Pulse ring */}
      <div className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-[pulse-ring_2s_ease_infinite]" />
      
      {/* Button */}
      <a
        href="https://wa.me/919964626265"
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300"
      >
        <FaWhatsapp className="text-white text-2xl" />
      </a>

      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#0F1C2E] border border-white/10 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us
      </div>
    </div>
  );
}
