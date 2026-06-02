"use client";

import { FormEvent } from "react";

export function ContactForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const service = String(fd.get("service") ?? "");
    const message = String(fd.get("message") ?? "").trim();
    if (!name || !phone || !service || !message) return;
    const subject = encodeURIComponent(`Website — ${service}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email || "—"}\nService: ${service}\n\nMessage:\n${message}`,
    );
    window.location.href = `mailto:triplehair@gmail.com?subject=${subject}&body=${body}`;
  }

  const field =
    "w-full rounded-lg border border-navy/10 bg-page px-4 py-3 text-navy outline-none transition placeholder:text-muted/55 focus:border-navy/20 focus:ring-2 focus:ring-navy/[0.06]";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-navy-muted">Name</span>
          <input
            name="name"
            required
            autoComplete="name"
            className={field}
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-navy-muted">Phone</span>
          <input
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={field}
            placeholder="(813) …"
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-xs font-medium text-navy-muted">
          Email <span className="font-normal lowercase text-muted">(optional)</span>
        </span>
        <input name="email" type="email" autoComplete="email" className={field} placeholder="you@email.com" />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-xs font-medium text-navy-muted">Interested in</span>
        <select name="service" required className={field} defaultValue="">
          <option value="" disabled>
            Select…
          </option>
          <option value="HVAC repairs">HVAC repairs</option>
          <option value="HVAC replacement">HVAC replacement</option>
          <option value="HVAC maintenance">HVAC maintenance</option>
          <option value="HVAC tune-ups">HVAC tune-ups</option>
          <option value="Duct cleaning">Duct cleaning</option>
          <option value="Construction installations">Construction installations</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <label className="block">
        <span className="mb-1.5 block text-xs font-medium text-navy-muted">Message</span>
        <textarea
          name="message"
          required
          rows={4}
          className={`${field} resize-y`}
          placeholder="What can we help with?"
        />
      </label>
      <button
        type="submit"
        className="w-full rounded-lg bg-accent py-3.5 text-sm font-medium text-white transition hover:bg-accent-hover"
      >
        Send request
      </button>
      <p className="text-center text-xs text-muted">
        Prefer the phone?{" "}
        <a href="tel:+18136554501" className="font-medium text-navy underline decoration-navy/15 underline-offset-4 hover:decoration-navy/35">
          (813) 655-4501
        </a>
      </p>
    </form>
  );
}
