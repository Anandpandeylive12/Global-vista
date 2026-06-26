"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { navigationData } from "@/data/navigationData";

export default function MobileMenu({ open, onClose }) {
  return (
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
            {navigationData.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
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
              onClick={onClose}
            >
              Book Consultation
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}