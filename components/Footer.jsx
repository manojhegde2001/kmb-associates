import { FaFacebook, FaLinkedin, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1628] border-t border-[#C9A84C]/20 pt-20 pb-10 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-playfair text-2xl font-bold text-white mb-6">
              KMB ASSOCIATES<span className="text-[#C9A84C]">.</span>
            </h3>
            <p className="text-[#8A97A8] font-dm-sans mb-8">
              &quot;You&apos;ve arrived at the ultimate financing destination!&quot; Solutions for all your financial needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "Services", "About", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-[#8A97A8] hover:text-[#C9A84C] transition-colors font-dm-sans text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Our Services</h4>
            <ul className="space-y-4">
              {["Home Loan", "Mortgage Loan", "Business Loan", "Project Loan"].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-[#8A97A8] hover:text-[#C9A84C] transition-colors font-dm-sans text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Contact Details</h4>
            <div className="text-[#8A97A8] font-dm-sans text-sm space-y-4">
              <p>No.308, Shreshta Bhumi No 87, <br />K R Road, V V Puram, <br />Bengaluru 560004</p>
              <p>+91 99646 26265</p>
              <p>vikram@kmbassociates.in</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-[#1E3A5F] flex flex-col md:row items-center justify-between space-y-6 md:space-y-0">
          <p className="text-[#8A97A8] text-xs font-dm-sans">
            © {currentYear} KMB Associates LLP. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            {[FaFacebook, FaLinkedin, FaYoutube].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="text-[#8A97A8] hover:text-[#C9A84C] transition-colors text-lg"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919964626265"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-3xl text-white shadow-2xl z-50 whatsapp-pulse transition-transform hover:scale-110 active:scale-95"
      >
        <FaWhatsapp />
      </a>
    </footer>
  );
}
