"use client";
import { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaLinkedin, FaYoutube, FaCheckCircle } from "react-icons/fa";

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
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-[#0A1628]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="text-[#C9A84C] font-dm-sans text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
              GET IN TOUCH
            </span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-10">
              Ready to start your <br />
              <span className="text-[#C9A84C]">financial journey?</span>
            </h2>
            
            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-[#111E30] rounded-full flex items-center justify-center text-xl text-[#C9A84C] shrink-0 border border-[#1E3A5F]">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Our Location</h4>
                  <p className="text-[#8A97A8] font-dm-sans">
                    No.308, Shreshta Bhumi No 87, K R Road, <br />
                    V V Puram, Bengaluru 560004
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-[#111E30] rounded-full flex items-center justify-center text-xl text-[#C9A84C] shrink-0 border border-[#1E3A5F]">
                  <FaPhone />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Call Us</h4>
                  <p className="text-[#8A97A8] font-dm-sans">
                    9964626265 | 9740562900
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-[#111E30] rounded-full flex items-center justify-center text-xl text-[#C9A84C] shrink-0 border border-[#1E3A5F]">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Email Us</h4>
                  <p className="text-[#8A97A8] font-dm-sans">
                    vikram@kmbassociates.in
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-white font-bold mb-6">Follow Us</h4>
              <div className="flex space-x-4">
                {[FaFacebook, FaLinkedin, FaYoutube].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-12 h-12 bg-[#111E30] rounded-full flex items-center justify-center text-xl text-white hover:text-[#C9A84C] hover:border-[#C9A84C] border border-transparent transition-all duration-300"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#111E30] p-10 rounded-sm border border-[#1E3A5F] shadow-2xl relative">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-[fadeInUp_0.6s_ease-out]">
                <FaCheckCircle className="text-6xl text-[#C9A84C] mb-6" />
                <h3 className="text-3xl font-playfair font-bold text-white mb-4">Message Sent!</h3>
                <p className="text-[#8A97A8] font-dm-sans max-w-xs mx-auto">
                  Thank you for reaching out. Our team will contact you shortly to discuss your requirements.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-[#C9A84C] font-bold underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#8A97A8] uppercase tracking-widest">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#0A1628] border-b border-[#1E3A5F] px-4 py-3 text-white focus:border-[#C9A84C] transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#8A97A8] uppercase tracking-widest">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[#0A1628] border-b border-[#1E3A5F] px-4 py-3 text-white focus:border-[#C9A84C] transition-colors"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#8A97A8] uppercase tracking-widest">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#0A1628] border-b border-[#1E3A5F] px-4 py-3 text-white focus:border-[#C9A84C] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#8A97A8] uppercase tracking-widest">Loan Type</label>
                  <select
                    name="loanType"
                    value={formData.loanType}
                    onChange={handleChange}
                    className="w-full bg-[#0A1628] border-b border-[#1E3A5F] px-4 py-3 text-white focus:border-[#C9A84C] transition-colors appearance-none cursor-pointer"
                  >
                    <option>Home Loan</option>
                    <option>Mortgage Loan</option>
                    <option>Business Loan</option>
                    <option>MSME/Project Loan</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#8A97A8] uppercase tracking-widest">Your Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#0A1628] border-b border-[#1E3A5F] px-4 py-3 text-white focus:border-[#C9A84C] transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#C9A84C] text-[#0A1628] font-bold tracking-widest uppercase hover:bg-[#E8C96D] transition-all duration-300 rounded-sm mt-4"
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
