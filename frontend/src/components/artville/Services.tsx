import { motion } from "framer-motion";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28 bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, #6B1A2A 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
            What We Offer
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-bold text-charcoal">
            Our Services
          </h2>
          <p className="mt-4 text-charcoal-light text-base leading-relaxed">
            Each creation is meticulously handcrafted to tell your unique story
          </p>
          <div className="mt-6 w-16 h-0.5 bg-gold mx-auto rounded-full" />
        </motion.div>

        {/* Services grid */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-2xl border border-[#E8E0D0]/60 bg-white hover:shadow-xl hover:shadow-burgundy/5 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Hover accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-burgundy to-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="p-6 sm:p-8">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${service.iconColor}`} />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-lg font-semibold text-charcoal">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-charcoal-light leading-relaxed">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase text-burgundy hover:text-gold transition-colors group/link"
                  >
                    Enquire Now
                    <span className="inline-block transition-transform group-hover/link:translate-x-1">→</span>
                  </a>
                </div>

                {/* Decorative corner */}
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-burgundy/[0.02] rounded-tl-[3rem]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
