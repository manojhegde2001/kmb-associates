"use client";
import { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaLinkedin, FaYoutube, FaInstagram, FaCheckCircle } from "react-icons/fa";
import { useReveal } from "@/hooks/useReveal";

export default function Contact() {
  const ref = useReveal();
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
    <section ref={ref} id="contact" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#00C2FF]" />
            <span className="text-[#00C2FF] text-xs tracking-[0.22em] uppercase font-medium">Get in Touch</span>
            <div className="w-8 h-px bg-[#00C2FF]" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#002B5B] leading-tight">
            Ready to start your <br />
            <span className="text-[#00C2FF]">financial journey?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left Details */}
          <div className="lg:col-span-2 reveal-left">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#00C2FF]/10 text-[#00C2FF] flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <span className="text-[10px] text-[#002B5B]/30 uppercase tracking-[0.18em] block mb-1 font-bold">Our Location</span>
                  <p className="text-[#002B5B] text-sm font-medium leading-relaxed">No.308, Shreshta Bhumi No 87, K R Road, V V Puram, Bengaluru 560004</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#00C2FF]/10 text-[#00C2FF] flex items-center justify-center shrink-0">
                  <FaPhone className="text-xl" />
                </div>
                <div>
                  <span className="text-[10px] text-[#002B5B]/30 uppercase tracking-[0.18em] block mb-1 font-bold">Call Us</span>
                  <p className="text-[#002B5B] text-sm font-medium">9964626265 | 9740562900</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#00C2FF]/10 text-[#00C2FF] flex items-center justify-center shrink-0">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <span className="text-[10px] text-[#002B5B]/30 uppercase tracking-[0.18em] block mb-1 font-bold">Email Us</span>
                  <p className="text-[#002B5B] text-sm font-medium">vikram@kmbassociates.in</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-12">
              {[FaFacebook, FaLinkedin, FaInstagram, FaYoutube].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full border border-[#002B5B]/10 flex items-center justify-center text-[#002B5B]/20 hover:border-[#00C2FF] hover:text-[#00C2FF] hover:bg-[#00C2FF]/5 transition-all duration-300"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-3 reveal-right delay-2 w-full">
            <div className="bg-[#F4F7FA] border border-black/[0.04] rounded-2xl p-8 md:p-10 shadow-sm">
              {submitted ? (
                <div className="text-center py-16 animate-fadeInUp">
                  <FaCheckCircle className="text-[#00C2FF] text-5xl mx-auto mb-5" />
                  <h3 className="font-display text-2xl text-[#002B5B] mb-2 font-bold">Message Sent!</h3>
                  <p className="text-[#002B5B]/40 text-sm font-body">Thank you. We&apos;ll contact you shortly.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-[#00C2FF] font-semibold text-sm underline hover:text-[#003B7B] transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-[10px] text-[#002B5B]/30 uppercase tracking-[0.18em] mb-2 font-bold">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-transparent border-0 border-b border-[#002B5B]/10 focus:border-[#00C2FF] outline-none py-3 text-[#002B5B] placeholder:text-[#002B5B]/20 text-sm transition-colors duration-300 caret-[#00C2FF]"
                        placeholder="Rahul Sharma"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] text-[#002B5B]/30 uppercase tracking-[0.18em] mb-2 font-bold">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-transparent border-0 border-b border-[#002B5B]/10 focus:border-[#00C2FF] outline-none py-3 text-[#002B5B] placeholder:text-[#002B5B]/20 text-sm transition-colors duration-300 caret-[#00C2FF]"
                        placeholder="+91 99XXX XXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] text-[#002B5B]/30 uppercase tracking-[0.18em] mb-2 font-bold">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-0 border-b border-[#002B5B]/10 focus:border-[#00C2FF] outline-none py-3 text-[#002B5B] placeholder:text-[#002B5B]/20 text-sm transition-colors duration-300 caret-[#00C2FF]"
                      placeholder="rahul@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] text-[#002B5B]/30 uppercase tracking-[0.18em] mb-2 font-bold">Loan Type</label>
                    <select
                      name="loanType"
                      value={formData.loanType}
                      onChange={handleChange}
                      className="w-full bg-transparent border-0 border-b border-[#002B5B]/10 focus:border-[#00C2FF] outline-none py-3 text-[#002B5B] appearance-none cursor-pointer text-sm transition-colors duration-300"
                    >
                      <option className="bg-white">Home Loan</option>
                      <option className="bg-white">Mortgage Loan</option>
                      <option className="bg-white">Business Loan</option>
                      <option className="bg-white">MSME/Project Loan</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] text-[#002B5B]/30 uppercase tracking-[0.18em] mb-2 font-bold">Your Message</label>
                    <textarea
                      name="message"
                      rows="3"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-transparent border-0 border-b border-[#002B5B]/10 focus:border-[#00C2FF] outline-none py-3 text-[#002B5B] placeholder:text-[#002B5B]/20 text-sm transition-colors duration-300 resize-none caret-[#00C2FF]"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 bg-[#002B5B] text-white font-bold py-4 rounded-xl hover:bg-[#003B7B] hover:shadow-[0_0_30px_rgba(0,43,91,0.15)] transition-all duration-300 hover:scale-[1.01] tracking-wide text-sm"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
