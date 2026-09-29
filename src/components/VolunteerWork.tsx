import { volunteer } from "@/lib/content";

export function VolunteerWork() {
  return (
    <section id="volunteer" className="bg-panel/60">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mb-12 flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-balance font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            Volunteer Work
          </h2>
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            Community
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {volunteer.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-[min(1vw,12px)] bg-brand-soft"
            >
              <img
                src={item.image}
                alt={item.alt}
                width={1024}
                height={1280}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-x-0 bottom-0 translate-y-full bg-ink/85 p-4 transition-transform duration-200 ease-out group-hover:translate-y-0 no-hover:translate-y-0">
                <h3 className="font-display text-base font-semibold text-paper">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-paper/80">{item.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
