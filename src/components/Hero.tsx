import headshot from "@/assets/headshot.jpg";
import { profile } from "@/lib/content";

export function Hero() {
  return (
    <section id="about" className="border-b border-line/70">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-12 md:gap-0 md:py-20">
        <div className="md:col-span-5 md:pr-10">
          <h1 className="text-balance font-display text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl md:text-6xl">
            {profile.name}, {profile.credentials}
          </h1>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
            {profile.role}
          </p>
          <p className="mt-8 max-w-[46ch] text-pretty text-base leading-relaxed text-muted-foreground">
            {profile.about}
          </p>
        </div>
        <div className="md:col-span-7">
          <img
            src={headshot}
            alt={`Portrait of ${profile.name}`}
            width={1088}
            height={1440}
            className="h-full min-h-[320px] w-full bg-brand-soft object-cover outline-1 -outline-offset-1 outline-black/5 md:min-h-[520px]"
          />
        </div>
      </div>
    </section>
  );
}
