"use client";
import { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaLinkedin, FaYoutube, FaCheckCircle, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    loanType: "Home Loan",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

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
    <section id="contact" className="py-28 px-6 bg-navy-card max-w-7xl mx-auto">
      <div className="text-center mb-16 reveal">
        <div className="flex items-center justify-center gap-3 mb-4">
          <hr className="w-10 h-[1px] bg-gold border-0" />
          <span className="text-gold text-xs tracking-[0.2em] uppercase font-medium">CONTACT US</span>
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white">Get in touch with our experts</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        {/* Left Col */}
        <div className="lg:col-span-2 reveal-left">
          <div className="space-y-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold text-lg shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div>
                <label className="block text-white/35 text-[10px] uppercase tracking-[0.18em] mb-1">Our Location</label>
                <p className="text-white text-sm font-medium">No.308, Shreshta Bhumi No 87, K R Road, V V Puram, Bengaluru 560004</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold text-lg shrink-0">
                <FaPhone />
              </div>
              <div>
                <label className="block text-white/35 text-[10px] uppercase tracking-[0.18em] mb-1">Call Us</label>
                <p className="text-white text-sm font-medium">9964626265 | 9740562900</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold text-lg shrink-0">
                <FaEnvelope />
              </div>
              <div>
                <label className="block text-white/35 text-[10px] uppercase tracking-[0.18em] mb-1">Email Us</label>
                <p className="text-white text-sm font-medium">vikram@kmbassociates.in</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-10">
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

        {/* Right Col */}
        <div className="lg:col-span-3 reveal-right w-full">
          <div className="bg-navy border border-white/[0.06] rounded-2xl p-8 md:p-10 shadow-xl">
            {submitted ? (
              <div className="text-center py-16 animate-fadeInUp">
                <FaCheckCircle className="text-gold text-5xl mx-auto mb-4" />
                <h3 className="font-display text-2xl text-white mb-2">Message Sent!</h3>
                <p className="text-white/50 text-sm">Thank you for reaching out. We&apos;ll contact you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-gold font-medium text-sm underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] text-white/35 uppercase tracking-[0.18em] mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-0 border-b border-white/10 focus:border-gold outline-none py-3 text-white placeholder:text-white/25 text-sm transition-colors duration-300"
                      placeholder="Rahul Sharma"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-white/35 uppercase tracking-[0.18em] mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-0 border-b border-white/10 focus:border-gold outline-none py-3 text-white placeholder:text-white/25 text-sm transition-colors duration-300"
                      placeholder="+91 99XXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] text-white/35 uppercase tracking-[0.18em] mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b border-white/10 focus:border-gold outline-none py-3 text-white placeholder:text-white/25 text-sm transition-colors duration-300"
                    placeholder="rahul@example.com"
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-white/35 uppercase tracking-[0.18em] mb-2">Loan Type</label>
                  <select
                    name="loanType"
                    value={formData.loanType}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b border-white/10 focus:border-gold outline-none py-3 text-white appearance-none cursor-pointer text-sm transition-colors duration-300"
                  >
                    <option className="bg-navy">Home Loan</option>
                    <option className="bg-navy">Mortgage Loan</option>
                    <option className="bg-navy">Business Loan</option>
                    <option className="bg-navy">MSME/Project Loan</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] text-white/35 uppercase tracking-[0.18em] mb-2">Your Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b border-white/10 focus:border-gold outline-none py-3 text-white placeholder:text-white/25 text-sm transition-colors duration-300 resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full mt-8 bg-gold text-navy font-bold py-4 rounded-xl hover:bg-gold-light hover:shadow-[0_4px_30px_rgba(201,168,76,0.35)] hover:scale-[1.02] transition-all duration-300 tracking-wide text-sm"
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
