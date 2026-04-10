"use client";

import { FormEvent } from "react";

const styles = {
  light: {
    label: "text-neutral-500",
    input:
      "border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-400 focus:border-amber-400 focus:ring-amber-400/20",
    select: "border-neutral-200 bg-white text-neutral-900 focus:border-amber-400 focus:ring-amber-400/20",
    btn: "from-amber-500 to-amber-600 text-white shadow-amber-500/20",
  },
  /** Design B — navy labels, classic contractor form */
  dealer: {
    label: "text-slate-600",
    input:
      "rounded-md border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#0f2744] focus:ring-[#0f2744]/15",
    select: "rounded-md border-slate-300 bg-white text-slate-900 focus:border-[#0f2744] focus:ring-[#0f2744]/15",
    btn: "from-[#ea580c] to-[#c2410c] text-white shadow-orange-500/25",
  },
  /** Design C — sage / forest minimal */
  clima: {
    label: "text-[#3d5c4a]",
    input:
      "rounded-lg border-[#c5d4cc] bg-white text-[#1a2e26] placeholder:text-[#6b8578] focus:border-[#3f6b4f] focus:ring-[#3f6b4f]/20",
    select: "rounded-lg border-[#c5d4cc] bg-white text-[#1a2e26] focus:border-[#3f6b4f] focus:ring-[#3f6b4f]/20",
    btn: "from-[#2d4a3e] to-[#1a2e26] text-white shadow-[#2d4a3e]/30",
  },
} as const;

export type ContactFormVariant = keyof typeof styles;

export function ContactForm({ variant = "light" }: { variant?: ContactFormVariant }) {
  const s = styles[variant];

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const service = String(fd.get("service") ?? "");
    const message = String(fd.get("message") ?? "").trim();
    if (!name || !phone || !service || !message) return;
    const subject = encodeURIComponent(`Triple H — ${service}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nService: ${service}\n\nMessage:\n${message}`,
    );
    window.location.href = `mailto:info@hhhworks.com?subject=${subject}&body=${body}`;
  }

  const rounded = variant === "dealer" ? "rounded-md" : variant === "clima" ? "rounded-lg" : "rounded-xl";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className={`mb-1.5 block text-xs font-semibold uppercase tracking-wider ${s.label}`}>
            Name
          </span>
          <input
            name="name"
            required
            autoComplete="name"
            className={`w-full border px-4 py-3 outline-none transition focus:ring-2 ${rounded} ${s.input}`}
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className={`mb-1.5 block text-xs font-semibold uppercase tracking-wider ${s.label}`}>
            Phone
          </span>
          <input
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={`w-full border px-4 py-3 outline-none focus:ring-2 ${rounded} ${s.input}`}
            placeholder="(813) …"
          />
        </label>
      </div>
      <label className="block">
        <span className={`mb-1.5 block text-xs font-semibold uppercase tracking-wider ${s.label}`}>
          Service
        </span>
        <select
          name="service"
          required
          className={`w-full border px-4 py-3 outline-none focus:ring-2 ${rounded} ${s.select}`}
          defaultValue=""
        >
          <option value="" disabled>
            Select…
          </option>
          <option value="Repair">Repair</option>
          <option value="Installation">Installation</option>
          <option value="Tune-up">Tune-up</option>
          <option value="Duct cleaning">Duct cleaning</option>
          <option value="Emergency">Emergency</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <label className="block">
        <span className={`mb-1.5 block text-xs font-semibold uppercase tracking-wider ${s.label}`}>
          Message
        </span>
        <textarea
          name="message"
          required
          rows={4}
          className={`w-full resize-y border px-4 py-3 outline-none focus:ring-2 ${rounded} ${s.input}`}
          placeholder="Tell us what you need…"
        />
      </label>
      <button
        type="submit"
        className={`w-full bg-gradient-to-r py-4 text-sm font-bold uppercase tracking-widest shadow-md transition hover:brightness-105 ${rounded} ${s.btn}`}
      >
        {variant === "dealer" ? "Request service" : "Send request"}
      </button>
    </form>
  );
}
