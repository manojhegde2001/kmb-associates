import Link from "next/link";
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#060E1A] border-t border-white/5 pt-20 pb-10 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <span className="font-display text-2xl font-bold text-white">
                KMB <span className="text-gold">Associates</span><span className="text-gold">.</span>
              </span>
            </Link>
            <p className="text-white/40 font-body text-sm leading-relaxed max-w-xs">
              &quot;You&apos;ve arrived at the ultimate financing destination!&quot; Solutions for all your financial needs. KMB Associates LLP specializes in debt funding and corporate restructuring.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-bold uppercase tracking-[0.2em] text-[10px] mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "Services", "About", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase()}`}
                    className="text-white/40 hover:text-white transition-colors font-body text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-gold font-bold uppercase tracking-[0.2em] text-[10px] mb-8">Our Services</h4>
            <ul className="space-y-4">
              {["Home Loan", "Mortgage Loan", "Business Loan", "Project/MSME Loan"].map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-white/40 hover:text-white transition-colors font-body text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-gold font-bold uppercase tracking-[0.2em] text-[10px] mb-8">Contact Details</h4>
            <div className="text-white/40 font-body text-sm space-y-4">
              <p className="leading-relaxed">No.308, Shreshta Bhumi No 87, <br />K R Road, V V Puram, <br />Bengaluru 560004</p>
              <p className="text-white font-medium">+91 99646 26265</p>
              <p>vikram@kmbassociates.in</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/30 text-[10px] md:text-xs font-body tracking-wider">
            © {currentYear} KMB Associates LLP. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-4">
            {[FaFacebook, FaLinkedin, FaInstagram, FaYoutube].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-gold hover:text-gold hover:bg-gold/5 transition-all duration-300"
              >
                <Icon className="text-sm" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </footer>
  );
}

function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-navy-card text-white text-xs px-4 py-2 rounded-lg border border-white/5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 pointer-events-none shadow-xl">
        Chat with us
      </div>
      
      {/* Pulse effect */}
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-[ping_2s_infinite] opacity-30" />
      
      <a
        href="https://wa.me/919964626265"
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white text-2xl shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-transform hover:scale-110 active:scale-95"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}
