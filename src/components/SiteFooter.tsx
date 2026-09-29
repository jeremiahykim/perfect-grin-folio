import { profile } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold">{profile.name}</p>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-paper/60">
            Orthodontics &middot; {profile.institution}
          </p>
        </div>
        <div className="font-mono text-xs text-paper/70">
          <p>
            <a
              href={`mailto:${profile.email}`}
              className="transition-colors duration-150 hover:text-paper"
            >
              {profile.email}
            </a>
          </p>
          <p class="mt-1">{profile.phone}</p>
        </div>
      </div>
    </footer>
  );
}
