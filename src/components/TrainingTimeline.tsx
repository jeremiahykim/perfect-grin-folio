import { useEffect, useRef, useState } from "react";
import { training } from "@/lib/content";

export function TrainingTimeline() {
  const railRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }

    let frame = 0;
    const measure = () => {
      frame = 0;
      const rect = rail.getBoundingClientRect();
      const anchor = window.innerHeight * 0.62;
      const ratio = rect.height > 0 ? (anchor - rect.top) / rect.height : 0;
      setProgress(Math.min(1, Math.max(0, ratio)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="training" className="border-b border-line/70 bg-panel/60">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mb-12 flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-balance font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            Education and Training
          </h2>
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            {training[0]?.year} &ndash; Present
          </span>
        </div>

        <div ref={railRef} className="relative pl-8 md:pl-12">
          <div className="absolute bottom-0 left-0 top-0 w-px bg-line" />
          <div
            className="absolute left-0 top-0 w-px bg-brand transition-[height] duration-200 ease-out"
            style={{ height: `${progress * 100}%` }}
            aria-hidden="true"
          />
          <ol className="space-y-10">
            {training.map((entry) => (
              <li key={`${entry.year}-${entry.title}`} className="relative">
                <span className="absolute -left-8 top-1.5 size-2 -translate-x-1/2 rounded-full bg-brand md:-left-12" />
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-8">
                  <span className="w-16 shrink-0 font-mono text-xs text-brand">
                    {entry.year}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {entry.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{entry.detail}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
