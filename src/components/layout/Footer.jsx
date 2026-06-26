"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Globe2 } from "lucide-react";
import { useScrolled } from "@/hooks/useScrolled";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const scrolled = useScrolled(24);
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "border-b border-white/10 bg-navy/70 backdrop-blur-xl py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-gold/40 border border-white/10">
            <Globe2 className="h-4.5 w-4.5 text-gold" strokeWidth={1.75} />
          </span>
          <span className="font-display text-lg text-offwhite tracking-wide">
            Global Vista <span className="text-gold">Educators</span>
          </span>
        </Link>

        <div className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm text-muted transition-colors hover:text-offwhite after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button as="a" href="/contact" variant="primary" className="text-xs">
            Book Consultation
          </Button>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-offwhite lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 bg-navy/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base text-muted transition-colors hover:bg-white/5 hover:text-offwhite"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                as="a"
                href="/contact"
                variant="primary"
                className="mt-3 w-full"
                onClick={() => setOpen(false)}
              >
                Book Consultation
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}