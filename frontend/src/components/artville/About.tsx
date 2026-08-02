import { motion } from "framer-motion";
import { highlights } from "@/data/about";
import { business } from "@/data/business";

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 bg-beige/40">
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
            About Us
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-bold text-charcoal">
            Our Story
          </h2>
          <div className="mt-4 w-16 h-0.5 bg-gold mx-auto rounded-full" />
        </motion.div>

        {/* Story placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mt-10 max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-[#E8E0D0]/60">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-gold" />
              <div className="w-2 h-2 rounded-full bg-burgundy" />
              <div className="w-2 h-2 rounded-full bg-gold" />
            </div>
            <p className="text-base sm:text-lg text-charcoal-light leading-relaxed italic font-heading">
              &ldquo;{business.story}&rdquo;
            </p>
            <p className="mt-6 text-sm text-muted-foreground border-t border-[#E8E0D0] pt-4">
              <span className="font-medium text-charcoal">{business.fullName}</span> is a
              women-owned customized gift studio based in Bengaluru, India. We specialize in
              creating personalized handmade gifts that capture life&apos;s most precious moments.
            </p>
          </div>
        </motion.div>

        {/* Highlights grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group bg-white rounded-xl p-6 border border-[#E8E0D0]/60 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-burgundy/5 flex items-center justify-center mb-4 group-hover:bg-burgundy/10 transition-colors">
                <item.icon className="w-6 h-6 text-burgundy" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-charcoal">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-charcoal-light leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
