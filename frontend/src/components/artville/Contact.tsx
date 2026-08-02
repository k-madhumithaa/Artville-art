import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Send, MessageCircle, Mail, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { business } from "@/data/business";

// Backend base URL — set VITE_API_URL in .env (see server/.env.example for the backend side).
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.message || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
      setFormState({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-beige/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
            Get in Touch
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-bold text-charcoal">
            Contact Us
          </h2>
          <p className="mt-4 text-charcoal-light text-base leading-relaxed">
            We&apos;d love to hear about your project
          </p>
          <div className="mt-6 w-16 h-0.5 bg-gold mx-auto rounded-full" />
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-2 gap-10">
          {/* Contact info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E0D0]/60 shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-charcoal mb-6">
                Get In Touch
              </h3>

              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-burgundy/5 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-burgundy" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-charcoal">Address</p>
                    <p className="text-sm text-charcoal-light leading-relaxed mt-1">
                      {business.address.line1}<br />
                      {business.address.line2}<br />
                      {business.address.city}, {business.address.state} {business.address.postalCode}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-burgundy/5 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-burgundy" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-charcoal">Phone</p>
                    <a
                      href={`tel:${business.phone.tel}`}
                      className="text-sm text-burgundy hover:text-gold transition-colors mt-1 block"
                    >
                      {business.phone.display}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-burgundy/5 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-burgundy" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-charcoal">Business Hours</p>
                    <p className="text-sm text-charcoal-light mt-1">
                      {business.hours}
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp button */}
              <a
                href={`https://wa.me/${business.phone.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-[#E8E0D0]/60 bg-white shadow-sm">
              <div className="aspect-[16/9] bg-gradient-to-br from-beige to-beige-dark flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-burgundy/30 mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Google Maps Embed</p>
                  <p className="text-xs text-muted-foreground/60 mt-1">
                    205, JP Nagar 7th Phase, Bengaluru
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${business.address.mapsQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-xs text-burgundy hover:text-gold transition-colors underline"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E0D0]/60 shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-charcoal mb-6">
                Send us a Message
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-heading text-lg font-semibold text-charcoal">
                    Message Sent!
                  </h4>
                  <p className="text-sm text-charcoal-light mt-2">
                    Thank you! We&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-sm text-burgundy hover:text-gold transition-colors underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E8E0D0] bg-white focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-200 text-charcoal placeholder:text-muted-foreground/60 text-sm"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E8E0D0] bg-white focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-200 text-charcoal placeholder:text-muted-foreground/60 text-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1.5">
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E8E0D0] bg-white focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-200 text-charcoal placeholder:text-muted-foreground/60 text-sm"
                        placeholder="+91 9XXXXXXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E8E0D0] bg-white focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-200 text-charcoal placeholder:text-muted-foreground/60 text-sm resize-none"
                      placeholder="Tell us about your vision..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-burgundy hover:bg-burgundy-light rounded-xl transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-muted-foreground text-center">
                    We&apos;ll get back to you within 24 hours
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
