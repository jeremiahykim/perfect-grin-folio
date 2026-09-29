import { navLinks, profile } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="border-b border-line/70 bg-panel/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-4">
        <div className="flex items-baseline gap-3">
          <span className="font-display text-lg font-semibold tracking-tight text-ink">
            {profile.name}
          </span>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:inline">
            Orthodontics
          </span>
        </div>
        <nav className="flex w-full flex-wrap items-center justify-between gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:w-auto sm:justify-end sm:gap-x-6 sm:text-[11px]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors duration-150 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
