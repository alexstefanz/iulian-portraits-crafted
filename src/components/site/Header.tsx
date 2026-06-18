import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const links = [
  { href: "#despre", label: "Despre mine" },
  { href: "#portofoliu", label: "Portofoliu" },
  { href: "#testimoniale", label: "Testimoniale" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#top" className="font-display text-2xl tracking-tight text-foreground">
          Iulian<span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
          >
            Programează
          </a>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-foreground"
              aria-label="Deschide meniul"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full bg-background border-white/10 p-0">
            <div className="flex h-full flex-col p-8">
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl">Iulian<span className="text-accent">.</span></span>
                <button onClick={() => setOpen(false)} aria-label="Închide" className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-white/10">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="mt-16 flex flex-col gap-6">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-4xl tracking-tight text-foreground transition-colors hover:text-accent"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-auto inline-flex items-center justify-center rounded-full bg-accent px-6 py-4 text-base font-semibold text-accent-foreground"
              >
                Programează
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}