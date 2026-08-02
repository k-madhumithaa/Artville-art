import { motion } from "framer-motion";
import { ArrowRight, Eye, MessageCircle } from "lucide-react";
import { business } from "@/data/business";
import heroBg from "@/assets/hero-bg.jpg";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background with artistic gradient overlay */}
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-[#22070B]/65" />

        {/* Left gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#24080D]/90 via-[#24080D]/55 to-transparent" />

        {/* Soft vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.45)]" />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-flex items-center px-3 py-1.5 text-xs font-medium tracking-wider uppercase text-gold-light bg-white/10 backdrop-blur-sm rounded-full border border-gold/20">
              Women-Owned Customized Gift Studio
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="
              mt-6
              font-heading
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-bold
              leading-tight
              tracking-tight
              text-white
              drop-shadow-2xl
            "
          >
            Art that Speaks
            <span className="block text-gold-light mt-2">
              from the Heart
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="
              mt-6
              text-base
              sm:text-lg
              md:text-xl
             text-white/90
              drop-shadow-lg
              max-w-xl
              leading-relaxed
            "
          >
            Bengaluru&apos;s premier destination for handmade custom gifts and blood art portraits.
            Every piece is crafted with love, care, and attention to detail.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollTo("#gallery")}
              className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-burgundy bg-white hover:bg-beige rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Eye className="w-4 h-4" />
              View Gallery
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-transparent border-2 border-white/30 hover:border-gold hover:text-gold-light rounded-full transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              Contact Us
            </button>
            <a
              href={`https://wa.me/${business.phone.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gold/90 hover:bg-gold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Order Now
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mt-16 w-24 h-0.5 bg-gold/60 origin-left"
          />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FDFBF7] to-transparent" />
    </section>
  );
}
