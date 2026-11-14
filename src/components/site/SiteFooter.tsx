import { Link } from "@tanstack/react-router";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-3xl">{site.name}</p>
          <p className="mt-2 text-sm text-muted-foreground">{site.role}</p>
        </div>
        <nav className="flex flex-col gap-2 text-sm">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-muted-foreground hover:text-primary">
              {n.label}
            </Link>
          ))}
        </nav>
        <ul className="flex flex-col gap-2 text-sm">
          {site.links.map((l) => (
            <li key={l.label}>
              <a href={l.href} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-6 py-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          © {new Date().getFullYear()} {site.name} — Turning ideas into visual experiences
        </p>
      </div>
    </footer>
  );
}
