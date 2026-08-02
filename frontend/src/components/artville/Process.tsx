import { motion } from "framer-motion";
import { processSteps as steps } from "@/data/process";

export default function Process() {
  return (
    <section id="process" className="relative py-20 sm:py-28 bg-white overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-burgundy/[0.02] to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
            How It Works
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-bold text-charcoal">
            Order Process
          </h2>
          <p className="mt-4 text-charcoal-light text-base leading-relaxed">
            From your idea to a finished masterpiece — here&apos;s how
          </p>
          <div className="mt-6 w-16 h-0.5 bg-gold mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="mt-16 relative">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-gold/40" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  className={`md:flex items-center ${isEven ? "" : "md:flex-row-reverse"} md:gap-8 relative pb-12 md:pb-0`}
                >
                  {/* Content */}
                  <div className={`md:w-[calc(50%-2rem)] ${isEven ? "md:text-right" : "md:text-left"}`}>
                    <div className={`bg-beige/30 rounded-2xl p-6 border border-[#E8E0D0]/60 hover:border-gold/20 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300 ${isEven ? "md:mr-0" : "md:ml-0"}`}>
                      <div className={`flex items-center gap-3 mb-3 ${isEven ? "md:flex-row-reverse md:justify-start" : ""}`}>
                        <div className="w-12 h-12 rounded-xl bg-burgundy/5 flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6 text-burgundy" />
                        </div>
                        <h3 className={`font-heading text-lg font-semibold text-charcoal ${isEven ? "md:text-right" : ""}`}>
                          {step.title}
                        </h3>
                      </div>
                      <p className={`text-sm text-charcoal-light leading-relaxed ${isEven ? "md:text-right" : ""}`}>
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-gold border-4 border-white shadow-md" />
                  </div>

                  {/* Empty space for the other side */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
