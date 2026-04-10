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
  dark: {
    label: "text-zinc-500",
    input:
      "border-white/10 bg-white/5 text-white placeholder:text-zinc-600 focus:border-cyan-400/50 focus:ring-cyan-400/15",
    select: "border-white/10 bg-zinc-900 text-white focus:border-cyan-400/50 focus:ring-cyan-400/15",
    btn: "from-cyan-500 to-fuchsia-600 text-zinc-950 shadow-cyan-500/25",
  },
  terra: {
    label: "text-stone-500",
    input:
      "border-stone-300 bg-[#faf7f2] text-stone-900 placeholder:text-stone-400 focus:border-[#c45c3a] focus:ring-[#c45c3a]/20",
    select: "border-stone-300 bg-[#faf7f2] text-stone-900 focus:border-[#c45c3a] focus:ring-[#c45c3a]/20",
    btn: "from-[#c45c3a] to-[#9a3412] text-white shadow-[#c45c3a]/25",
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
            className={`w-full rounded-xl border px-4 py-3 outline-none transition focus:ring-2 ${s.input}`}
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
            className={`w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 ${s.input}`}
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
          className={`w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 ${s.select}`}
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
          className={`w-full resize-y rounded-xl border px-4 py-3 outline-none focus:ring-2 ${s.input}`}
          placeholder="Tell us what you need…"
        />
      </label>
      <button
        type="submit"
        className={`w-full rounded-xl bg-gradient-to-r py-4 text-sm font-bold uppercase tracking-widest shadow-md transition hover:brightness-105 ${s.btn}`}
      >
        Send request
      </button>
    </form>
  );
}
