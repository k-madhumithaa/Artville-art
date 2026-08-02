import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback((index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

  const goNext = useCallback(() => {
    goTo((current + 1) % testimonials.length);
  }, [current, goTo]);

  const goPrev = useCallback(() => {
    goTo((current - 1 + testimonials.length) % testimonials.length);
  }, [current, goTo]);

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [goNext]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <section id="testimonials" className="relative py-20 sm:py-28 bg-beige/40 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-burgundy/5 rounded-full blur-3xl" />

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
            What Clients Say
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-bold text-charcoal">
            Testimonials
          </h2>
          <p className="mt-4 text-charcoal-light text-base leading-relaxed">
            Hear from those who&apos;ve received our handcrafted creations
          </p>
          <div className="mt-6 w-16 h-0.5 bg-gold mx-auto rounded-full" />
        </motion.div>

        {/* Carousel */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="relative min-h-[280px] sm:min-h-[240px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-[#E8E0D0]/60 h-full flex flex-col justify-center">
                  {/* Quote icon */}
                  <Quote className="w-8 h-8 text-gold/30 mb-4" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-base sm:text-lg text-charcoal-light leading-relaxed italic font-heading">
                    &ldquo;{testimonials[current].text}&rdquo;
                  </p>

                  {/* Name */}
                  <div className="mt-6 pt-4 border-t border-[#E8E0D0]/60">
                    <p className="font-medium text-charcoal text-sm">
                      — {testimonials[current].name}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={goPrev}
              className="p-2 rounded-full bg-white border border-[#E8E0D0]/60 hover:border-gold/50 hover:bg-gold/5 transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-charcoal" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-burgundy w-6"
                      : "bg-[#E8E0D0] hover:bg-gold/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              className="p-2 rounded-full bg-white border border-[#E8E0D0]/60 hover:border-gold/50 hover:bg-gold/5 transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-charcoal" />
            </button>
          </div>
        </div>

        {/* Google Reviews hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-center text-xs text-muted-foreground"
        >
          Inspired by our Google reviews. Add your own testimonials here.
        </motion.p>
      </div>
    </section>
  );
}
