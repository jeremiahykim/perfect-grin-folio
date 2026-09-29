import { useCallback, useEffect, useMemo, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { volunteer } from "@/lib/content";

type Slide = {
  image: string;
  alt: string;
  caption: string;
  title: string;
};

export function VolunteerWork() {
  // Every photo in the section, in order, so the viewer can flip across cards.
  const slides = useMemo<Slide[]>(
    () =>
      volunteer.flatMap((item) =>
        item.photos.map((photo) => ({
          image: photo.image,
          alt: photo.alt,
          caption: photo.caption ?? item.blurb,
          title: item.title,
        })),
      ),
    [],
  );

  // Where each card's first photo sits in the list above.
  const firstSlideOfCard = useMemo(() => {
    let index = 0;
    return volunteer.map((item) => {
      const start = index;
      index += item.photos.length;
      return start;
    });
  }, []);

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;

  const show = useCallback(
    (step: number) =>
      setOpenIndex((current) =>
        current === null ? current : (current + step + slides.length) % slides.length,
      ),
    [slides.length],
  );

  // Left / right arrow keys flip photos while the viewer is open.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") show(-1);
      if (event.key === "ArrowRight") show(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, show]);

  const current = openIndex === null ? null : slides[openIndex];
  const canFlip = slides.length > 1;

  return (
    <section id="volunteer" className="bg-panel/60">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mb-12 flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-balance font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            Outside the Clinic
          </h2>
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            Community
          </span>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {volunteer.map((item, cardIndex) => {
            const cover = item.photos[0];
            if (!cover) return null;
            return (
              <button
                key={item.title}
                type="button"
                onClick={() => setOpenIndex(firstSlideOfCard[cardIndex])}
                aria-label={`Open photos: ${item.title}`}
                className="group relative block cursor-zoom-in overflow-hidden rounded-[min(1.2vw,14px)] bg-brand-soft text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                <img
                  src={cover.image}
                  alt={cover.alt}
                  width={1200}
                  height={1200}
                  loading="lazy"
                  style={{ objectPosition: cover.position ?? "center" }}
                  className="aspect-square w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center p-4 sm:p-5">
                  <h3 className="rounded-md bg-ink/45 px-5 py-3 text-center font-display text-xl font-semibold text-paper shadow-sm backdrop-blur-[2px] sm:text-2xl">
                    {item.title}
                  </h3>
                </div>
                {item.photos.length > 1 && (
                  <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-ink/60 px-2.5 py-1 font-mono text-[11px] text-paper">
                    {item.photos.length} photos
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <DialogPrimitive.Root
        open={isOpen}
        onOpenChange={(open) => {
          if (!open) setOpenIndex(null);
        }}
      >
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/85 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
          <DialogPrimitive.Content
            aria-describedby={undefined}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 outline-none sm:p-10"
            onClick={(event) => {
              // Clicking the dark area around the photo closes the viewer.
              if (event.target === event.currentTarget) setOpenIndex(null);
            }}
          >
            {current && (
              <>
                <DialogPrimitive.Title className="sr-only">{current.title}</DialogPrimitive.Title>

                <figure className="group relative max-h-full max-w-full">
                  <img
                    key={current.image}
                    src={current.image}
                    alt={current.alt}
                    className="block max-h-[85vh] max-w-[90vw] rounded-md object-contain shadow-2xl"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 rounded-b-md bg-ink/75 px-5 py-4 text-paper opacity-0 transition-opacity duration-200 group-hover:opacity-100 no-hover:opacity-100">
                    <p className="font-display text-lg font-semibold">{current.title}</p>
                    <p className="mt-1 text-sm text-paper/85">{current.caption}</p>
                  </figcaption>
                </figure>

                {canFlip && (
                  <>
                    <button
                      type="button"
                      onClick={() => show(-1)}
                      aria-label="Previous photo"
                      className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/30 sm:left-6"
                    >
                      <ChevronLeft className="h-7 w-7" />
                    </button>
                    <button
                      type="button"
                      onClick={() => show(1)}
                      aria-label="Next photo"
                      className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/30 sm:right-6"
                    >
                      <ChevronRight className="h-7 w-7" />
                    </button>
                    <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-xs text-white/70">
                      {(openIndex ?? 0) + 1} / {slides.length}
                    </p>
                  </>
                )}

                <DialogPrimitive.Close
                  aria-label="Close"
                  className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/30 sm:right-6 sm:top-6"
                >
                  <X className="h-6 w-6" />
                </DialogPrimitive.Close>
              </>
            )}
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </section>
  );
}
