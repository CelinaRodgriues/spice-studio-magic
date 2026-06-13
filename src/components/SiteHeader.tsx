import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import dehyugLogo from "@/assets/dehyug-logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Our Story" },
  { to: "/products", label: "Collections" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[#0d3d2d]/88 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-luxury flex h-20 items-center justify-between">
        <Link to="/" className="inline-flex items-center">
          <img src={dehyugLogo} alt="Dehyug Masala" className="h-11 w-auto object-contain md:h-12" />
        </Link>

        <nav className="hidden gap-10 text-[11px] font-medium uppercase tracking-[0.2em] text-cream/80 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-[#f3c56b]" }}
              className="transition-colors hover:text-[#f3c56b]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden border border-cream/35 px-5 py-2 text-[10px] uppercase tracking-[0.2em] text-cream transition-all hover:bg-cream hover:text-[#0d3d2d] md:inline-flex"
          >
            Inquiry
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen(true)}
            className="-mr-2 p-2 text-cream md:hidden"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-[#0d3d2d] md:hidden">
          <div className="container-luxury flex h-20 items-center justify-between">
            <img src={dehyugLogo} alt="Dehyug Masala" className="h-11 w-auto object-contain" />
            <button aria-label="Close menu" onClick={() => setOpen(false)} className="-mr-2 p-2 text-cream">
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="mt-12 flex flex-col gap-2 px-6">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-3 font-display text-4xl text-cream"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
