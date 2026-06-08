"use client";

import { FormEvent } from "react";
import { COMPANY, EMAIL_HREF } from "@/lib/site";

type ContactFormProps = {
  variant?: "default" | "quote" | "compact";
};

export function ContactForm({ variant = "default" }: ContactFormProps) {
  const isQuote = variant === "quote";
  const isCompact = variant === "compact";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const service = String(fd.get("service") ?? "");
    const message = String(fd.get("message") ?? "").trim();
    if (!name || !phone || !email || !service || !message) return;
    const subject = encodeURIComponent(`Website — ${service}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`,
    );
    window.location.href = `${EMAIL_HREF}?subject=${subject}&body=${body}`;
  }

  const field = isCompact
    ? "w-full rounded-lg border border-navy/10 bg-surface px-3 py-2 text-sm text-navy outline-none transition placeholder:text-muted/55 focus:border-brand/30 focus:ring-2 focus:ring-brand/10"
    : "w-full rounded-xl border border-navy/10 bg-surface px-4 py-3 text-navy outline-none transition placeholder:text-muted/55 focus:border-brand/30 focus:ring-2 focus:ring-brand/10";

  const label = isCompact
    ? "mb-1 block text-xs font-medium text-navy"
    : "mb-1.5 block text-sm font-medium text-navy";

  const formGap = isCompact ? "gap-3" : isQuote ? "space-y-5" : "space-y-5";
  const namePhoneLayout = isCompact
    ? "grid gap-3 sm:grid-cols-2"
    : isQuote
      ? "space-y-5"
      : "grid gap-4 sm:grid-cols-2";

  return (
    <form
      onSubmit={handleSubmit}
      className={isCompact ? `grid ${formGap}` : formGap}
    >
      <div className={namePhoneLayout}>
        <label className="block">
          <span className={label}>
            Name <span className="text-accent">*</span>
          </span>
          <input
            name="name"
            required
            autoComplete="name"
            className={field}
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className={label}>
            Phone <span className="text-accent">*</span>
          </span>
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

      {isCompact ? (
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="block">
            <span className={label}>
              Email <span className="text-accent">*</span>
            </span>
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              className={field}
              placeholder="you@email.com"
            />
          </label>
          <label className="block">
            <span className={label}>Interested in</span>
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
        </div>
      ) : (
        <>
          <label className="block">
            <span className={label}>
              Email <span className="text-accent">*</span>
            </span>
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              className={field}
              placeholder="you@email.com"
            />
          </label>
          <label className="block">
            <span className={label}>Interested in</span>
            <select name="service" required className={field} defaultValue="">
              <option value="" disabled>
                Select a service…
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
        </>
      )}

      <label className="block">
        <span className={label}>Message</span>
        <textarea
          name="message"
          required
          rows={isCompact ? 2 : isQuote ? 5 : 4}
          className={`${field} resize-y`}
          placeholder="What can we help with?"
        />
      </label>

      <button
        type="submit"
        className={
          isCompact
            ? "btn-primary w-full py-2.5 text-sm sm:w-auto sm:justify-self-start"
            : isQuote
              ? "btn-primary w-full py-3.5"
              : "w-full rounded-lg bg-accent py-3.5 text-sm font-medium text-white transition hover:bg-accent-hover"
        }
      >
        Send request
        <i className="fa-solid fa-paper-plane text-[11px] opacity-90" aria-hidden />
      </button>

      {isQuote ? (
        <p className="text-xs leading-relaxed text-muted">
          I provide my express consent to {COMPANY} to contact me via phone, email, and/or SMS. I
          understand that my consent is not a requirement for purchase, and I may withdraw my
          consent at any time.
        </p>
      ) : isCompact ? null : (
        <p className="text-center text-xs text-muted">
          Prefer the phone?{" "}
          <a
            href="tel:+18136554501"
            className="font-medium text-navy underline decoration-navy/15 underline-offset-4 hover:decoration-navy/35"
          >
            (813) 655-4501
          </a>
        </p>
      )}
    </form>
  );
}
