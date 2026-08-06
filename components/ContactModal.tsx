"use client";

import { useEffect, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useModal } from "./ModalContext";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const EMPTY: FormState = { name: "", email: "", message: "" };

export function ContactModal() {
  const { isOpen, subject, close } = useModal();
  const [form, setForm] = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  // Opened from a service card — start the visitor off with the right context.
  useEffect(() => {
    if (!isOpen || !subject) return;
    setForm((prev) =>
      prev.message
        ? prev
        : { ...prev, message: `I'd like to know more about ${subject}.` }
    );
  }, [isOpen, subject]);

  // Lock scroll + close on Escape while open.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close]);

  // Reset the form a beat after the modal finishes closing.
  useEffect(() => {
    if (isOpen) return;
    const t = setTimeout(() => {
      setStatus("idle");
      setForm(EMPTY);
    }, 350);
    return () => clearTimeout(t);
  }, [isOpen]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    // Simulated submission — purely client-side, no network/refresh.
    setTimeout(() => setStatus("sent"), 1100);
  };

  const update =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Contact Game Makers Studio"
        >
          <div
            className="absolute inset-0 bg-black/75 backdrop-blur-md"
            onClick={close}
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            className="glass-strong relative z-10 w-full max-w-lg overflow-hidden rounded-3xl p-7 sm:p-9"
          >
            {/* Ambient glow */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-crimson/20 blur-[80px]" />

            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-mist transition-colors hover:bg-crimson hover:text-white"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            <AnimatePresence mode="wait">
              {status !== "sent" ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <span className="kicker">
                    <span className="h-px w-6 bg-teal-soft/60" />
                    Get in touch
                  </span>
                  <h3 className="heading mt-3 text-2xl sm:text-3xl">
                    Contact <span className="text-gradient">With Us</span>
                  </h3>
                  <p className="mt-2 text-sm text-mist-dim">
                    Drop us a line about your project — we&apos;ll reply within one
                    business day.
                  </p>

                  {subject && (
                    <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-mist">
                      <span className="h-1.5 w-1.5 rounded-full bg-crimson-soft" />
                      {subject}
                    </p>
                  )}

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <Field
                        label="Name"
                        name="name"
                        value={form.name}
                        onChange={update("name")}
                        placeholder="Jane Doe"
                        type="text"
                      />
                      <Field
                        label="Email"
                        name="email"
                        value={form.email}
                        onChange={update("email")}
                        placeholder="jane@studio.com"
                        type="email"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-mist-dim"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={form.message}
                        onChange={update("message")}
                        placeholder="Tell us about your game…"
                        className="w-full resize-none rounded-xl border border-white/10 bg-ink-800/60 px-4 py-3 text-sm text-white placeholder:text-mist-dim/60 outline-none transition-colors focus:border-crimson/60 focus:ring-2 focus:ring-crimson/30"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {status === "sending" ? (
                        <>
                          <Spinner />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m22 2-7 20-4-9-9-4Z" />
                            <path d="M22 2 11 13" />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="relative flex flex-col items-center py-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 260, damping: 18 }}
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-crimson/15 ring-1 ring-crimson/40"
                  >
                    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#ff3355" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <motion.path
                        d="M20 6 9 17l-5-5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
                      />
                    </svg>
                  </motion.div>
                  <h3 className="heading mt-6 text-2xl sm:text-3xl">
                    Successfully <span className="text-gradient">Sent</span>
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-mist-dim">
                    Thank you{form.name ? `, ${form.name.split(" ")[0]}` : ""}! Your
                    message is on its way. Our team will be in touch shortly.
                  </p>
                  <button type="button" onClick={close} className="btn-ghost mt-7">
                    Close
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

type FieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type: string;
};

function Field({ label, name, value, onChange, placeholder, type }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-mist-dim"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-ink-800/60 px-4 py-3 text-sm text-white placeholder:text-mist-dim/60 outline-none transition-colors focus:border-crimson/60 focus:ring-2 focus:ring-crimson/30"
      />
    </div>
  );
}

function Spinner() {
  return (
    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.25" />
      <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
