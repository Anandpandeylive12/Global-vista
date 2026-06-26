"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { slideInRight } from "@/animations/slideIn";

const initialState = {
  name: "",
  email: "",
  phone: "",
  studentClass: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email.";
    }
    if (!form.message.trim()) nextErrors.message = "Message is required.";
    return nextErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setForm(initialState);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-offwhite placeholder:text-muted/60 outline-none transition-colors focus:border-gold/50";

  if (submitted) {
    return (
      <motion.div {...slideInRight(0)}>
        <GlassCard className="flex h-full flex-col items-center justify-center p-10 text-center" hover={false}>
          <CheckCircle2 className="h-12 w-12 text-gold" />
          <h3 className="mt-5 font-display text-2xl text-offwhite">Message sent</h3>
          <p className="mt-2 text-sm text-muted">
            Thank you for reaching out. Our team will contact you within one
            business day.
          </p>
          <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-6">
            Send another message
          </Button>
        </GlassCard>
      </motion.div>
    );
  }

  return (
    <motion.div {...slideInRight(0)}>
      <GlassCard className="p-10" hover={false}>
        <h3 className="font-display text-2xl text-offwhite">Send a message</h3>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5" noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={inputClass}
                placeholder="Your full name"
              />
              {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
                placeholder="you@example.com"
              />
              {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="phone" className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className={inputClass}
                placeholder="+91 00000 00000"
              />
            </div>
            <div>
              <label htmlFor="studentClass" className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted">
                Class
              </label>
              <input
                id="studentClass"
                name="studentClass"
                value={form.studentClass}
                onChange={handleChange}
                className={inputClass}
                placeholder="e.g. 11th"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className={inputClass}
              placeholder="Tell us what your student needs help with"
            />
            {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
          </div>

          <Button type="submit" variant="primary" className="mt-2 w-full sm:w-auto">
            Submit
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </GlassCard>
    </motion.div>
  );
}