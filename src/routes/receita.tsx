import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";

export const Route = createFileRoute("/receita")({
  component: Receita,
  head: () => ({
    meta: [
      { title: "Receita — Rei do Malte" },
      { name: "description", content: "Receita Session Pilsen SQN — 5 litros. Processo técnico completo da Rei do Malte." },
    ],
  }),
});

const recipe = {
  name: "Session Malt",
  volume: "5 Litros",
  abv: "3,0 – 4,7%",
  ibu: 18,
  ebc: 7,
  og: "1.028 – 1.044",
  fg: "1.008 – 1.014",
};

const radarData = [
  { k: "Maltado", v: 55 },
  { k: "Amargor", v: 30 },
  { k: "Aroma", v: 45 },
  { k: "Corpo", v: 35 },
  { k: "Cítrico", v: 40 },
  { k: "Cor", v: 25 },
];

const insumos = [
  { n: "Malte Pilsen", q: "675 g" },
  { n: "Malte Chateau Munich", q: "75 g" },
  { n: "Lúpulo Nugget", q: "2,5 g — Amargor" },
  { n: "Lúpulo Brewer's Gold", q: "2,5 g — Aroma" },
  { n: "Fermento Ale", q: "1 sachê" },
  { n: "Água total", q: "7 L (3 + 4)" },
];

const brassagem = [
  { temp: "21°C", desc: "Temperatura inicial" },
  { temp: "65°C", desc: "Mostura — 60 min" },
  { temp: "76°C", desc: "Mash Out — 15 min" },
  { temp: "100°C", desc: "Fervura — 60 min" },
];

const fervura = [
  { t: "60 min", a: "Adicionar 2,5 g de Lúpulo Nugget (amargor)" },
  { t: "10 min finais", a: "Adicionar 2,5 g de Lúpulo Brewer's Gold (aroma)" },
  { t: "Final", a: "Resfriar o mosto abaixo de 35°C rapidamente" },
];

function Receita() {
  return (
    <PageShell title="Receita" kicker="">
      <div className="mx-auto max-w-7xl px-6 pb-20 space-y-8">
        {/* HERO RECIPE CARD */}
        <div className="glass-strong rounded-3xl p-6 md:p-10">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-[11px] uppercase tracking-[0.4em] text-gold">Receita ativa · 5 L</div>
              <h2 className="font-display text-3xl md:text-5xl text-gradient-gold mt-2">{recipe.name}</h2>
              <p className="text-sm text-[color:var(--muted-foreground)] mt-2 max-w-xl">
                Cerveja dourada, leve e refrescante. Processo rápido, ideal para iniciantes — perfil pilsen com fermentação Ale para simplificar o domínio doméstico.
              </p>
            </div>
            
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Parâmetros técnicos */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { l: "ABV", v: recipe.abv },
                  { l: "IBU", v: recipe.ibu },
                  { l: "EBC", v: recipe.ebc },
                  { l: "Volume", v: recipe.volume },
                  { l: "OG", v: recipe.og },
                  { l: "FG", v: recipe.fg },
                ].map((m) => (
                  <div key={m.l} className="glass rounded-xl p-4 text-center">
                    <div className="text-[10px] text-[color:var(--muted-foreground)] uppercase tracking-[0.3em]">{m.l}</div>
                    <div className="font-display text-2xl text-gradient-gold mt-1">{m.v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Radar */}
            <div className="glass rounded-xl p-5">
              <div className="text-xs text-[color:var(--muted-foreground)] uppercase tracking-widest mb-2">Perfil sensorial</div>
              <div className="h-[320px]">
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

          {/* Insumos */}
          <div className="mt-8">
            <div className="text-xs text-[color:var(--muted-foreground)] uppercase tracking-widest mb-3">Insumos selecionados</div>
            <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-6">
              {insumos.map((i) => (
                <div key={i.n} className="glass rounded-lg p-4">
                  <div className="text-gold font-display text-sm">{i.n}</div>
                  <div className="text-xs text-[color:var(--muted-foreground)] mt-1">{i.q}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PROCESSO */}
        <div className="glass-strong rounded-3xl p-6 md:p-10">
          <div className="text-[11px] uppercase tracking-[0.4em] text-gold">Processo</div>
          <h3 className="font-display text-2xl md:text-3xl text-gradient-gold mt-1 mb-8">Fabricação passo a passo</h3>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Etapa I */}
            <div className="glass rounded-2xl p-6">
              <div className="text-gold font-display text-xl mb-3">I · Mostura</div>
              <ul className="space-y-3 text-sm text-[color:var(--muted-foreground)]">
                <li><span className="text-gold-soft">Aquecimento:</span> 3 L de água a 70°C antes dos grãos.</li>
                <li><span className="text-gold-soft">Repouso:</span> 65°C por 60 min — conversão do amido.</li>
                <li><span className="text-gold-soft">Mash Out:</span> 76°C por 15 min para parar as enzimas.</li>
              </ul>
            </div>

            {/* Etapa II */}
            <div className="glass rounded-2xl p-6">
              <div className="text-gold font-display text-xl mb-3">II · Clarificação & Sparge</div>
              <ul className="space-y-3 text-sm text-[color:var(--muted-foreground)]">
                <li>Recircular o mosto até ficar límpido.</li>
                <li>Lavar os grãos com 4 L de água a 76°C.</li>
                <li>Volume inicial de fervura: aprox. 8 L.</li>
              </ul>
            </div>

            {/* Etapa III */}
            <div className="glass rounded-2xl p-6">
              <div className="text-gold font-display text-xl mb-3">III · Fervura · 60 min</div>
              <ul className="space-y-3 text-sm text-[color:var(--muted-foreground)]">
                {fervura.map((f) => (
                  <li key={f.t}>
                    <span className="text-gold-soft">{f.t}:</span> {f.a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* BRASSAGEM TIMELINE */}
        <div className="glass-strong rounded-3xl p-6 md:p-10">
          <div className="text-[11px] uppercase tracking-[0.4em] text-gold">Brassagem</div>
          <h3 className="font-display text-2xl md:text-3xl text-gradient-gold mt-1 mb-8">Curva térmica · Session Pilsen SQN</h3>

          <div className="relative">
            <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[color:var(--gold)]/50 to-transparent" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
              {brassagem.map((b, i) => (
                <div key={b.temp} className="glass rounded-xl p-5 text-center">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-[color:var(--muted-foreground)]">Passo {i + 1}</div>
                  <div className="font-display text-3xl text-gradient-gold mt-2">{b.temp}</div>
                  <div className="text-xs text-gold-soft mt-2">{b.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FERMENTAÇÃO & FINALIZAÇÃO */}
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass-strong rounded-3xl p-6 md:p-8">
            <div className="text-[11px] uppercase tracking-[0.4em] text-gold">Etapa IV</div>
            <h3 className="font-display text-2xl text-gradient-gold mt-1 mb-5">Fermentação & Maturação</h3>
            <ul className="space-y-4 text-sm text-[color:var(--muted-foreground)]">
              <li className="glass rounded-xl p-4">
                <div className="text-gold font-display">Fermentação · ~10 dias</div>
                <div className="mt-1">Manter a 18°C. Próximo ao fim, subir para 20°C por 4 dias para o descanso de diacetil.</div>
              </li>
              <li className="glass rounded-xl p-4">
                <div className="text-gold font-display">Maturação · mín. 7 dias</div>
                <div className="mt-1">Baixar para 10°C por alguns dias, depois aproximar-se de 0°C por pelo menos 7 dias para clarificação.</div>
              </li>
            </ul>
          </div>

          <div className="glass-strong rounded-3xl p-6 md:p-8">
            <div className="text-[11px] uppercase tracking-[0.4em] text-gold">Etapa V</div>
            <h3 className="font-display text-2xl text-gradient-gold mt-1 mb-5">Envase & Priming</h3>
            <ul className="space-y-4 text-sm text-[color:var(--muted-foreground)]">
              <li className="glass rounded-xl p-4">
                <div className="text-gold font-display">Priming</div>
                <div className="mt-1">6,5 g de açúcar por litro, diluído em água estéril.</div>
              </li>
              <li className="glass rounded-xl p-4">
                <div className="text-gold font-display">Carbonatação</div>
                <div className="mt-1">Garrafas em temperatura ambiente (18–25°C) por 10 dias para gerar gás natural.</div>
              </li>
              <li className="glass rounded-xl p-4">
                <div className="text-gold font-display">Consumo</div>
                <div className="mt-1">Melhor apreciada jovem — frescor é coroação.</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-[10px] uppercase tracking-[0.4em] text-[color:var(--muted-foreground)]">
          Receita adaptada · Faz Tua Ceva ⚜ Rei do Malte
        </div>
      </div>
    </PageShell>
  );
}
