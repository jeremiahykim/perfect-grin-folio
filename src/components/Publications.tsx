import { publications } from "@/lib/content";

export function Publications() {
  return (
    <section id="research" className="border-b border-line/70">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mb-12 flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-balance font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            Research &amp; Publications
          </h2>
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            Selected
          </span>
        </div>

        <ul className="divide-y divide-line/70">
          {publications.map((pub) => (
            <li key={pub.url}>
              <a
                href={pub.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-4 py-5 transition-transform duration-150 hover:translate-x-1"
              >
                <span className="w-12 shrink-0 pt-0.5 font-mono text-xs text-muted-foreground">
                  {pub.year}
                </span>
                <span className="flex-1">
                  <span className="block text-base font-medium leading-snug text-ink transition-colors duration-150 group-hover:text-brand">
                    {pub.title}
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {pub.citation} &middot;{" "}
                    <span className="italic">{pub.journal}</span>
                  </span>
                </span>
                <span
                  className="pt-0.5 font-mono text-sm text-brand transition-transform duration-150 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  &rarr;
                </span>
                <span className="sr-only">Opens in a new tab</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
