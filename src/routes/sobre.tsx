import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import brewery from "@/assets/about-brewery.jpg";

export const Route = createFileRoute("/sobre")({
  component: Sobre,
  head: () => ({
    meta: [
      { title: "Sobre — Rei do Malte" },
      { name: "description", content: "A história medieval e tecnológica por trás da Rei do Malte." },
    ],
  }),
});

function Sobre() {
  return (
    <PageShell title="A Saga do Rei" kicker="Nossa história">
      <div className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="relative rounded-3xl overflow-hidden glow-gold">
            <img src={brewery} alt="Cervejaria Rei do Malte" loading="lazy" width={1024} height={1024} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy-deep)]/80 to-transparent" />
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-[color:var(--foreground)]/90">
              Nascida do desejo de honrar os mestres cervejeiros medievais, a <span className="text-gold font-semibold">Rei do Malte</span> ergue há mais de uma década uma fortaleza líquida feita de grãos nobres, água pura e fogo sagrado.
            </p>
            <p className="text-[color:var(--muted-foreground)] leading-relaxed">
              Em nossos tanques de cobre repousa uma tradição centenária, agora coroada por sensores inteligentes que vigiam cada microbolha. O resultado é uma cerveja onde a ciência se ajoelha diante da alquimia.
            </p>

            <div className="grid grid-cols-3 gap-3 pt-4">
              {[
                { v: "10+", l: "Anos de coroa" },
                { v: "120K", l: "Brindes reais" },
                { v: "Top 3", l: "Brasil 2024" },
              ].map((s) => (
                <div key={s.l} className="glass rounded-xl p-4 text-center">
                  <div className="font-display text-2xl text-gradient-gold">{s.v}</div>
                  <div className="text-[10px] uppercase tracking-widest text-[color:var(--muted-foreground)] mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="mt-24 grid gap-6 md:grid-cols-4">
          {[
            { t: "Tradição", d: "Receitas inspiradas em abadias do século XIV." },
            { t: "Ingrediente", d: "Maltes pilsen, munich, caramelo e cevada torrada." },
            { t: "Inovação", d: "IoT, IA preditiva e biotecnologia de leveduras." },
            { t: "Realeza", d: "Cada lote carrega o selo do nosso urso coroado." },
          ].map((p, i) => (
            <div key={p.t} className="glass rounded-2xl p-6 hover:glow-gold transition">
              <div className="font-display text-gold text-sm tracking-widest mb-2">0{i + 1}</div>
              <h3 className="font-display text-xl text-gradient-gold mb-2">{p.t}</h3>
              <p className="text-sm text-[color:var(--muted-foreground)]">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
