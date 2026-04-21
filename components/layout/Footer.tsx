import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { restaurantInfo } from "@/data/restaurant-info";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--color-border)] bg-[color:var(--color-surface)]">
      <div className="container-shell py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="eyebrow mb-4">brand</p>
            <h3 className="mb-3 text-lg font-medium tracking-tight">Noirumi Studio</h3>
            <p className="max-w-xs text-sm leading-6 text-[#5f5a54]">
              Online-first sushi designed to feel calm, precise, and quietly
              special from food to packaging.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4">contact</p>
            <div className="space-y-3 text-sm text-[#5f5a54]">
              <a
                href={`tel:${restaurantInfo.phone}`}
                className="flex items-start gap-3 transition-colors hover:text-[color:var(--foreground)]"
              >
                <Phone className="mt-0.5 h-4 w-4" />
                <span>{restaurantInfo.phone}</span>
              </a>
              <a
                href={`mailto:${restaurantInfo.email}`}
                className="flex items-start gap-3 transition-colors hover:text-[color:var(--foreground)]"
              >
                <Mail className="mt-0.5 h-4 w-4" />
                <span>{restaurantInfo.email}</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4" />
                <span>{restaurantInfo.address}</span>
              </div>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-4">hours</p>
            <ul className="space-y-2 text-sm text-[#5f5a54]">
              {Object.entries(restaurantInfo.openingHours).map(([day, hours]) => (
                <li key={day} className="flex justify-between gap-4">
                  <span className="capitalize">{day}</span>
                  <span>
                    {hours.open} - {hours.close}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">follow</p>
            <div className="space-y-3 text-sm text-[#5f5a54]">
              <a href="/menu" className="block transition-colors hover:text-[color:var(--foreground)]">
                Menu
              </a>
              <a
                href="/concept"
                className="block transition-colors hover:text-[color:var(--foreground)]"
              >
                Concept
              </a>
              <a
                href="/gallery"
                className="block transition-colors hover:text-[color:var(--foreground)]"
              >
                Gallery
              </a>
              {restaurantInfo.socialMedia.instagram && (
                <a
                  href={restaurantInfo.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-[color:var(--foreground)]"
                >
                  <Instagram className="h-4 w-4" />
                  <span>Instagram</span>
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[color:var(--color-border)] pt-6 text-xs uppercase tracking-[0.16em] text-[#7b756e] md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} Noirumi Studio</p>
          <div className="flex gap-5">
            <a href="/privacy" className="transition-colors hover:text-[color:var(--foreground)]">
              Privacy
            </a>
            <a href="/terms" className="transition-colors hover:text-[color:var(--foreground)]">
              Terms
            </a>
            <a
              href="/accessibility"
              className="transition-colors hover:text-[color:var(--foreground)]"
            >
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}