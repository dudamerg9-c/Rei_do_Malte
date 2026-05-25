import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.jpeg";

const links = [
  { to: "/", label: "Início" },
  { to: "/loja", label: "Loja" },
  { to: "/sobre", label: "Sobre" },
  { to: "/receita", label: "Receita" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/documentos", label: "Documentos" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`glass-strong flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 ${
            scrolled ? "glow-gold" : ""
          }`}
        >
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-[color:var(--gold)]/40 group-hover:glow-gold transition-all">
              <img src={logo} alt="Rei do Malte" className="h-full w-full object-cover" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-base font-bold text-gradient-gold tracking-wider">REI DO MALTE</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="relative px-3.5 py-2 text-sm font-medium text-[color:var(--foreground)]/80 hover:text-[color:var(--gold)] transition-colors rounded-lg"
                activeProps={{ className: "text-[color:var(--gold)]" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/loja"
              className="hidden sm:inline-flex items-center rounded-lg gradient-gold px-4 py-2 text-sm font-semibold text-[color:var(--navy-deep)] hover:brightness-110 transition-all glow-gold"
            >
              Comprar
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden h-10 w-10 grid place-items-center rounded-lg border border-gold-soft text-[color:var(--gold)]"
              aria-label="menu"
            >
              <span className="text-xl">{open ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-2 glass-strong rounded-2xl p-3 flex flex-col">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm font-medium hover:text-[color:var(--gold)]"
                activeProps={{ className: "text-[color:var(--gold)]" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
