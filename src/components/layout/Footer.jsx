import Link from "next/link";
import {
  Globe2,
  Mail,
  Phone,
  Send,
  MessageCircle,
  Github,
} from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "STEM Support",
  "Exam Preparation",
  "Mentorship",
  "Career Guidance",
  "Flexible Learning",
];

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
          <div className="grid gap-12 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-gold/40 border border-white/10">
                  <Globe2 className="h-4.5 w-4.5 text-gold" strokeWidth={1.75} />
                </span>
                <span className="font-display text-lg text-offwhite">
                  Global Vista <span className="text-gold">Educators</span>
                </span>
              </Link>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
                Connecting Indian students with UK educators for mentorship,
                exam preparation and global academic opportunity.
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.25em] text-gold">
                Explore • Educate • Empower
              </p>
              <div className="mt-6 flex items-center gap-3">
              {[Mail, Send, MessageCircle].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Social link"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted transition-all hover:border-gold/40 hover:text-gold"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-display text-base text-offwhite">Quick Links</h4>
              <ul className="mt-4 space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-base text-offwhite">Services</h4>
              <ul className="mt-4 space-y-3">
                {services.map((service) => (
                  <li key={service} className="text-sm text-muted">
                    {service}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center gap-2 text-sm text-muted">
                <Phone className="h-4 w-4 text-gold" />
                +91 98765 43210
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-muted sm:flex-row">
            <p>© {new Date().getFullYear()} Global Vista Educators. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gold">Privacy Policy</a>
              <a href="#" className="hover:text-gold">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}