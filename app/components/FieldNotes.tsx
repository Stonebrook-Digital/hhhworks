"use client";

import { useState } from "react";
import { Reveal } from "@/app/components/Reveal";
import { FIELD_NOTES, FIELD_NOTES_INITIAL_COUNT } from "@/lib/field-notes";

function AuthorAvatar() {
  return (
    <span
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/90 text-surface"
      aria-hidden
    >
      <i className="fa-solid fa-user text-sm" />
    </span>
  );
}

export function FieldNotes() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? FIELD_NOTES : FIELD_NOTES.slice(0, FIELD_NOTES_INITIAL_COUNT);
  const hasMore = FIELD_NOTES.length > FIELD_NOTES_INITIAL_COUNT;

  return (
    <section className="border-t border-navy/6 py-8 md:py-10" id="field-notes">
      <div className="container-site">
        <Reveal>
          <h2 className="text-lg font-semibold text-navy md:text-xl">Field notes</h2>
          <p className="mt-2 max-w-2xl text-sm text-navy-muted">
            Recent work and insights from Abraham Harvey, co-owner.
          </p>
        </Reveal>

        <ul className="mx-auto mt-6 max-w-2xl space-y-3">
          {visible.map((note, index) => (
            <li key={note.id}>
              <Reveal delay={index * 40}>
                <article
                  className={`card p-5 ${index % 2 === 1 ? "bg-page" : ""}`}
                >
                  <div className="flex gap-3">
                    <AuthorAvatar />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                        <p className="text-sm font-semibold text-navy">{note.author}</p>
                        <p className="text-xs text-muted">{note.date}</p>
                      </div>
                      <p className="mt-0.5 text-xs text-muted">{note.role}</p>
                      <p className="mt-3 text-sm leading-relaxed text-navy-muted">{note.body}</p>
                      {note.tags.length > 0 ? (
                        <ul className="mt-3 flex flex-wrap gap-1.5">
                          {note.tags.map((tag) => (
                            <li key={tag}>
                              <span className="rounded-full border border-navy/8 bg-surface px-2.5 py-0.5 text-[11px] font-medium text-navy-muted">
                                {tag}
                              </span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        {hasMore && !expanded ? (
          <div className="mx-auto mt-5 max-w-2xl">
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-navy/10 bg-navy/[0.04] px-4 py-3 text-sm font-medium text-navy transition hover:border-navy/15 hover:bg-navy/[0.06]"
            >
              Load more field notes
              <i className="fa-solid fa-chevron-down text-[10px] text-muted" aria-hidden />
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
