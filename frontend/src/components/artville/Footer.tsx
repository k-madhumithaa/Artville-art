import { MapPin, Phone, Clock, Heart, Instagram, Facebook, Palette } from "lucide-react";
import { navLinks as quickLinks } from "@/data/navigation";
import { services as serviceList } from "@/data/services";
import { business } from "@/data/business";

const services = serviceList.map((service) => service.title);

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: business.social.instagram },
  { icon: Facebook, label: "Facebook", href: business.social.facebook },
  { icon: Palette, label: "Pinterest", href: business.social.pinterest },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal text-white">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <h3 className="font-heading text-2xl font-bold text-gold">
              {business.name}
            </h3>
            <p className="mt-1 text-sm text-white/40 font-body">
              {business.tagline}
            </p>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              {business.description}
            </p>

            {/* Social links */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-base font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="text-sm text-white/50 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-base font-semibold text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.slice(0, 6).map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo("#services");
                    }}
                    className="text-sm text-white/50 hover:text-gold transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-base font-semibold text-white mb-4">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-white/50 leading-relaxed">
                  {business.address.line1} {business.address.line2} {business.address.city} {business.address.postalCode}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <a href={`tel:${business.phone.tel}`} className="text-sm text-white/50 hover:text-gold transition-colors">
                  {business.phone.display}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-white/50">
                  {business.hours.replace("Open daily from ", "")}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} {business.fullName}. All rights reserved.
          </p>
          <p className="text-xs text-white/30 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-400" /> in Bengaluru
          </p>
        </div>
      </div>
    </footer>
  );
}
