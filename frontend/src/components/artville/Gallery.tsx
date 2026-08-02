import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { galleryCategories as categories, galleryItems } from "@/data/gallery";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (id: number) => {
    const index = galleryItems.findIndex((item) => item.id === id);
    setLightboxIndex(index);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryItems.length);
    }
  };

  const goPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  return (
    <section id="gallery" className="relative py-20 sm:py-28 bg-[#FDFBF7]">
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
            Our Portfolio
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-bold text-charcoal">
            Gallery
          </h2>
          <p className="mt-4 text-charcoal-light text-base leading-relaxed">
            A glimpse into our handcrafted creations
          </p>
          <div className="mt-6 w-16 h-0.5 bg-gold mx-auto rounded-full" />
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
                activeCategory === cat.id
                  ? "bg-burgundy text-white shadow-md shadow-burgundy/20"
                  : "bg-white text-charcoal hover:bg-beige/60 border border-[#E8E0D0]/60"
              )}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery grid */}
        <motion.div
          layout
          className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="break-inside-avoid"
              >
                <button
                  onClick={() => openLightbox(item.id)}
                  className={cn(
                    "group relative w-full rounded-2xl overflow-hidden border border-[#E8E0D0]/60 bg-white hover:shadow-xl hover:shadow-burgundy/5 transition-all duration-300",
                    item.span
                  )}
                >
                  {/* Image placeholder */}
                  <div className={`w-full aspect-[3/4] bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                    <div className="text-center p-6">
                      <ImageIcon className="w-10 h-10 mx-auto text-white/40 mb-3" />
                      <p className="text-white/50 text-xs font-medium">{item.title}</p>
                      <p className="text-white/30 text-[10px] mt-1">[Client image]</p>
                    </div>
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <div className="text-left">
                      <h4 className="text-white font-heading font-semibold text-base">
                        {item.title}
                      </h4>
                      <p className="text-white/70 text-xs mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No items in this category yet. Check back soon!</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl w-full max-h-[80vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`w-full aspect-[4/5] bg-gradient-to-br ${galleryItems[lightboxIndex].color} flex items-center justify-center`}>
                <div className="text-center">
                  <ImageIcon className="w-16 h-16 mx-auto text-white/30 mb-4" />
                  <p className="text-white/50 text-sm">{galleryItems[lightboxIndex].title}</p>
                  <p className="text-white/30 text-xs mt-2">[Client image placeholder]</p>
                </div>
              </div>
              <div className="bg-white p-6">
                <h3 className="font-heading text-xl font-semibold text-charcoal">
                  {galleryItems[lightboxIndex].title}
                </h3>
                <p className="mt-2 text-sm text-charcoal-light">
                  {galleryItems[lightboxIndex].description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
