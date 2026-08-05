import { MapPin, Phone, Instagram } from "lucide-react";
import { business } from "@/data/business";

export default function TopBar() {
  return (
    <div className="hidden md:block bg-[#5A1622] text-white/80 text-sm">
      <div className="max-w-7xl mx-auto h-10 px-6 flex items-center justify-between">

        <div className="flex items-center gap-6">

          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#D4AF37]" />
            <span>
              {business.address.city}, {business.address.state}
            </span>
          </div>

          <a
            href={`tel:${business.phone.display}`}
            className="flex items-center gap-2 hover:text-white transition"
          >
            <Phone className="w-4 h-4 text-[#D4AF37]" />
            {business.phone.display}
          </a>

        </div>

        <a
          href={business.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white transition"
        >
          <Instagram className="w-4 h-4 text-[#D4AF37]" />
          Instagram
        </a>

      </div>
    </div>
  );
}