import { motion } from "framer-motion";
import Navbar from "@/components/artville/Navbar";
import Hero from "@/components/artville/Hero";
import About from "@/components/artville/About";
import Services from "@/components/artville/Services";
import Gallery from "@/components/artville/Gallery";
import Testimonials from "@/components/artville/Testimonials";
import Process from "@/components/artville/Process";
import Contact from "@/components/artville/Contact";
import Footer from "@/components/artville/Footer";
import BackToTop from "@/components/artville/BackToTop";

export default function Landing() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#FDFBF7]"
    >
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Process />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </motion.div>
  );
}
