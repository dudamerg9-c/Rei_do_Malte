import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";

export const Route = createFileRoute("/receita")({
  component: Receita,
  head: () => ({
    meta: [
      { title: "Receita — Rei do Malte" },
      { name: "description", content: "Receitas técnicas das cervejas Rei do Malte." },
    ],
  }),
});

const recipe = {
  name: "Royal IPA",
  malt: 78,
  hops: 92,
  ferment: 14,
  matur: 21,
  ibu: 65,
  ebc: 18,
};

const radarData = [
  { k: "Maltado", v: 78 },
  { k: "Amargor", v: 92 },
  { k: "Aroma", v: 88 },
  { k: "Corpo", v: 72 },
  { k: "Cítrico", v: 85 },
  { k: "Cor", v: 60 },
];

function Receita() {
  return (
    <PageShell title="Receitas Reais" kicker="Laboratório de sabor">
      <div className="mx-auto max-w-7xl px-6 pb-20">
        <div className="glass-strong rounded-3xl p-6 md:p-10">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-[11px] uppercase tracking-[0.4em] text-gold">Receita ativa</div>
              <h2 className="font-display text-3xl md:text-4xl text-gradient-gold mt-1">{recipe.name}</h2>
            </div>
            <div className="flex gap-2">
              {["IPA", "Pilsen", "Weiss", "Stout"].map((s, i) => (
                <button
                  key={s}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${
                    i === 0 ? "gradient-gold text-[color:var(--navy-deep)] border-transparent" : "border-gold-soft text-gold hover:bg-[color:var(--gold)]/10"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Metrics */}
            <div className="space-y-4">
              {[
                { l: "Percentual de Malte", v: recipe.malt, suffix: "%" },
                { l: "Lúpulo (intensidade)", v: recipe.hops, suffix: "%" },
                { l: "Fermentação", v: recipe.ferment, suffix: " dias", max: 30 },
                { l: "Maturação", v: recipe.matur, suffix: " dias", max: 60 },
              ].map((m) => (
                <div key={m.l} className="glass rounded-xl p-5">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-[color:var(--muted-foreground)]">{m.l}</span>
                    <span className="text-gold font-display text-lg">{m.v}{m.suffix}</span>
                  </div>
                  <div className="h-2 rounded-full bg-[color:var(--navy-deep)] overflow-hidden">
                    <div
                      className="h-full gradient-gold rounded-full transition-all duration-1000"
                      style={{ width: `${(m.v / (m.max ?? 100)) * 100}%` }}
                    />
                  </div>
                </div>
              ))}

              <div className="grid grid-cols-2 gap-4">
                <div className="glass rounded-xl p-5 text-center">
                  <div className="text-xs text-[color:var(--muted-foreground)] uppercase tracking-widest">IBU</div>
                  <div className="font-display text-4xl text-gradient-gold">{recipe.ibu}</div>
                </div>
                <div className="glass rounded-xl p-5 text-center">
                  <div className="text-xs text-[color:var(--muted-foreground)] uppercase tracking-widest">EBC</div>
                  <div className="font-display text-4xl text-gradient-gold">{recipe.ebc}</div>
                </div>
              </div>
            </div>

            {/* Radar */}
            <div className="glass rounded-xl p-5">
              <div className="text-xs text-[color:var(--muted-foreground)] uppercase tracking-widest mb-2">Perfil sensorial</div>
              <div className="h-[360px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="oklch(0.78 0.14 85 / 0.25)" />
                    <PolarAngleAxis dataKey="k" tick={{ fill: "oklch(0.78 0.14 85)", fontSize: 12 }} />
                    <PolarRadiusAxis tick={{ fill: "oklch(0.72 0.04 85)", fontSize: 10 }} stroke="oklch(0.78 0.14 85 / 0.3)" />
                    <Radar name="Perfil" dataKey="v" stroke="oklch(0.88 0.16 90)" fill="oklch(0.78 0.14 85)" fillOpacity={0.5} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Ingredients */}
          <div className="mt-8">
            <div className="text-xs text-[color:var(--muted-foreground)] uppercase tracking-widest mb-3">Ingredientes selecionados</div>
            <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-5">
              {[
                { n: "Malte Pilsen", q: "65%" },
                { n: "Malte Munich", q: "20%" },
                { n: "Malte Caramelo", q: "10%" },
                { n: "Lúpulo Citra", q: "Aroma" },
                { n: "Levedura US-05", q: "Limpa" },
              ].map((i) => (
                <div key={i.n} className="glass rounded-lg p-4">
                  <div className="text-gold font-display">{i.n}</div>
                  <div className="text-xs text-[color:var(--muted-foreground)] mt-1">{i.q}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
