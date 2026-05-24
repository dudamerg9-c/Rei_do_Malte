import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function PageShell({ children, title, kicker }: { children: ReactNode; title?: string; kicker?: string }) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-28">
        {title && (
          <section className="mx-auto max-w-7xl px-6 pb-8 pt-6 text-center">
            {kicker && (
              <div className="inline-block text-[11px] uppercase tracking-[0.4em] text-gold mb-3 px-3 py-1 rounded-full border border-gold-soft">
                {kicker}
              </div>
            )}
            <h1 className="font-display text-4xl md:text-6xl text-gradient-gold">{title}</h1>
          </section>
        )}
        {children}
      </main>
      <Footer />
    </div>
  );
}
