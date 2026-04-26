"use client";
import { useState, useRef } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaLinkedin, FaYoutube, FaCheckCircle, FaInstagram } from "react-icons/fa";
import useInView from "@/hooks/useInView";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    loanType: "Home Loan",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const headerRef = useRef(null);
  const headerVisible = useInView(headerRef);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-28 bg-navy px-4">
      <div className="container mx-auto">
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-gold font-body text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to start your <br />
            <span className="text-gold">financial journey?</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[40%_60%] gap-16">
          {/* Left: Contact Info */}
          <div className="space-y-10">
            <ContactItem 
              icon={<FaMapMarkerAlt />} 
              label="Our Location" 
              value="No.308, Shreshta Bhumi No 87, K R Road, V V Puram, Bengaluru 560004" 
            />
            <ContactItem 
              icon={<FaPhone />} 
              label="Call Us" 
              value="9964626265 | 9740562900" 
            />
            <ContactItem 
              icon={<FaEnvelope />} 
              label="Email Us" 
              value="vikram@kmbassociates.in" 
            />

            <div className="pt-8">
              <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-6">Follow Us</h4>
              <div className="flex gap-4">
                {[FaFacebook, FaLinkedin, FaInstagram, FaYoutube].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-gold hover:text-gold hover:bg-gold/5 transition-all duration-300"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-navy-card rounded-2xl p-8 md:p-12 border border-white/5 shadow-2xl relative">
            {submitted ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center animate-[fadeInUp_0.8s_ease-out]">
                <FaCheckCircle className="text-6xl text-gold mb-6 animate-bounce" />
                <h3 className="text-3xl font-display font-bold text-white mb-4">Message Sent!</h3>
                <p className="text-white/40 font-body max-w-xs mx-auto">
                  Thank you! We&apos;ll contact you shortly to discuss your requirements.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-10 text-gold font-bold underline hover:text-gold-light transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative">
                    <label className="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-1 block">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/10 focus:border-gold outline-none px-0 py-3 text-white placeholder:text-white/20 text-sm transition-all duration-300"
                      placeholder="e.g. Rahul Sharma"
                    />
                  </div>
                  <div className="relative">
                    <label className="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-1 block">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/10 focus:border-gold outline-none px-0 py-3 text-white placeholder:text-white/20 text-sm transition-all duration-300"
                      placeholder="+91 98XXX XXXXX"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-1 block">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/10 focus:border-gold outline-none px-0 py-3 text-white placeholder:text-white/20 text-sm transition-all duration-300"
                    placeholder="name@email.com"
                  />
                </div>

                <div className="relative">
                  <label className="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-1 block">Loan Type</label>
                  <select
                    name="loanType"
                    value={formData.loanType}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/10 focus:border-gold outline-none px-0 py-3 text-white cursor-pointer transition-all duration-300"
                  >
                    <option className="bg-navy">Home Loan</option>
                    <option className="bg-navy">Mortgage Loan</option>
                    <option className="bg-navy">Business Loan</option>
                    <option className="bg-navy">MSME/Project Loan</option>
                  </select>
                </div>

                <div className="relative">
                  <label className="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-1 block">Your Message</label>
                  <textarea
                    name="message"
                    rows="3"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/10 focus:border-gold outline-none px-0 py-3 text-white placeholder:text-white/20 text-sm transition-all duration-300 resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-5 bg-gold hover:bg-gold-light text-navy font-bold rounded-xl tracking-[0.1em] uppercase transition-all duration-300 hover:shadow-[0_4px_30px_rgba(201,168,76,0.3)] hover:scale-[1.02] mt-4"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, label, value }) {
  return (
    <div className="flex items-start gap-5 group">
      <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold text-lg shrink-0 group-hover:bg-gold group-hover:text-navy transition-all duration-300">
        {icon}
      </div>
      <div>
        <label className="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-1 block">{label}</label>
        <p className="text-white font-medium text-base leading-relaxed">{value}</p>
      </div>
    </div>
  );
}
