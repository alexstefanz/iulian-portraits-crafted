import { Instagram, Facebook, Youtube, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <a href="#top" className="font-display text-2xl">
            Iulian<span className="text-accent">.</span>
          </a>
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <a href="#despre" className="hover:text-accent transition-colors">Despre</a>
            <a href="#portofoliu" className="hover:text-accent transition-colors">Portofoliu</a>
            <a href="#testimoniale" className="hover:text-accent transition-colors">Testimoniale</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-5 text-foreground/80">
            {[Instagram, Facebook, Youtube, Mail].map((Icon, i) => (
              <a key={i} href="#" className="hover:text-accent transition-colors" aria-label="Social">
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 border-t border-white/5 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Iulian Corbu. Toate drepturile rezervate.
        </div>
      </div>
    </footer>
  );
}