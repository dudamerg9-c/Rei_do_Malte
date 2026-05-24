import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Rei do Malte — A cerveja dos verdadeiros reis" },
      { name: "description", content: "Cervejaria artesanal premium. Maltes selecionados, tecnologia e tradição medieval." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-60"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[color:var(--navy-deep)]/70 via-[color:var(--navy-deep)]/85 to-[color:var(--navy-deep)]" />
        <div className="absolute inset-0 -z-10 noise-texture opacity-30" />

        {/* Golden glow orb */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[600px] w-[600px] rounded-full blur-3xl opacity-40"
          style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center py-32">
          <div className="inline-block text-[11px] uppercase tracking-[0.5em] text-gold mb-6 px-4 py-1.5 rounded-full border border-gold-soft glass">
            ⚜ Cervejaria Real desde 2026 ⚜
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05]">
            <span className="text-gradient-gold">Rei do malte</span>
          </h1>

          <p className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-[color:var(--muted-foreground)] leading-relaxed">
            <span className="text-gradient-gold">Onde o malte</span>{" "}
            <span className="text-[color:var(--foreground)]">é rei, o sabor</span>{" "}
            <span className="text-gradient-gold italic">é lei.</span>
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/loja"
              className="group inline-flex items-center gap-2 rounded-xl gradient-gold px-7 py-3.5 text-sm font-semibold text-[color:var(--navy-deep)] glow-gold-strong hover:scale-[1.03] transition-all"
            >
              Explorar Loja
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 rounded-xl glass-strong px-7 py-3.5 text-sm font-semibold text-gold border-gold-soft hover:glow-gold transition-all"
            >
              Ver Dashboard
            </Link>
          </div>

          {/* stats */}
          <div className="mt-20 grid grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { v: "12K+", l: "Litros / mês" },
              { v: "24", l: "Receitas reais" },
              { v: "98%", l: "Pureza do malte" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-xl p-5">
                <div className="font-display text-3xl md:text-4xl text-gradient-gold">{s.v}</div>
                <div className="text-xs uppercase tracking-widest text-[color:var(--muted-foreground)] mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center mb-16">
          <div className="text-[11px] uppercase tracking-[0.4em] text-gold mb-3">Nossa essência</div>
          <h2 className="font-display text-4xl md:text-5xl text-gradient-gold">Coroado pelo sabor</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { t: "Tradição", d: "Receitas medievais reinterpretadas com rigor artesanal.", i: "⚔" },
            { t: "Tecnologia", d: "Sensores IoT controlam cada grau de fermentação.", i: "⚙" },
            { t: "Realeza", d: "Maltes nobres selecionados grão a grão.", i: "♛" },
          ].map((c) => (
            <div key={c.t} className="group glass rounded-2xl p-8 hover:glow-gold transition-all duration-500 hover:-translate-y-1">
              <div className="text-5xl text-gradient-gold mb-4">{c.i}</div>
              <h3 className="font-display text-2xl text-gold mb-2">{c.t}</h3>
              <p className="text-sm text-[color:var(--muted-foreground)] leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
