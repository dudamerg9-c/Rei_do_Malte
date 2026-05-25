import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Area,
  AreaChart,
  Line,
  ReferenceLine,
  Legend,
} from "recharts";

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
  head: () => ({
    meta: [
      { title: "Dashboard — Rei do Malte" },
      {
        name: "description",
        content:
          "Monitoramento térmico em tempo real do lote Session Pilsen SQN — da mostura à carbonatação.",
      },
    ],
  }),
});

// ============ DATA ============
// Brassagem (25/04/2026) — minutos relativos ao início (10:30)
const brassagem = [
  { t: "10:30", min: 0, liq: 72, alvo: 65, etapa: "Mostura" },
  { t: "10:35", min: 5, liq: 71, alvo: 65, etapa: "Mostura" },
  { t: "10:40", min: 10, liq: 65, alvo: 65, etapa: "Mostura" },
  { t: "10:45", min: 15, liq: 65, alvo: 65, etapa: "Mostura" },
  { t: "10:50", min: 20, liq: 65, alvo: 65, etapa: "Mostura" },
  { t: "10:55", min: 25, liq: 69, alvo: 65, etapa: "Mostura" },
  { t: "11:00", min: 30, liq: 63, alvo: 65, etapa: "Mostura" },
  { t: "11:05", min: 35, liq: 65, alvo: 65, etapa: "Mostura" },
  { t: "11:10", min: 40, liq: 65, alvo: 65, etapa: "Mostura" },
  { t: "11:15", min: 45, liq: 62, alvo: 65, etapa: "Mostura" },
  { t: "11:20", min: 50, liq: 67, alvo: 65, etapa: "Mostura" },
  { t: "11:25", min: 55, liq: 65, alvo: 65, etapa: "Mostura" },
  { t: "11:30", min: 60, liq: 65, alvo: 65, etapa: "Mash Out" },
  { t: "11:35", min: 65, liq: 76, alvo: 76, etapa: "Mash Out" },
  { t: "11:40", min: 70, liq: 76, alvo: 76, etapa: "Mash Out" },
  { t: "11:45", min: 75, liq: 76, alvo: 76, etapa: "Mash Out" },
  { t: "11:50", min: 80, liq: 82.1, alvo: 100, etapa: "Fervura" },
  { t: "11:55", min: 85, liq: 96.9, alvo: 100, etapa: "Fervura" },
  { t: "12:00", min: 90, liq: 98.2, alvo: 100, etapa: "Fervura" },
  { t: "12:05", min: 95, liq: 97.9, alvo: 100, etapa: "Fervura" },
  { t: "12:10", min: 100, liq: 97.7, alvo: 100, etapa: "Fervura" },
  { t: "12:15", min: 105, liq: 97.7, alvo: 100, etapa: "Fervura" },
  { t: "12:20", min: 110, liq: 97.9, alvo: 100, etapa: "Fervura" },
  { t: "12:25", min: 115, liq: 97.6, alvo: 100, etapa: "Fervura" },
  { t: "12:30", min: 120, liq: 98.1, alvo: 100, etapa: "Fervura" },
  { t: "12:35", min: 125, liq: 98.1, alvo: 100, etapa: "Fervura" },
  { t: "12:40", min: 130, liq: 97.8, alvo: 100, etapa: "Fervura" },
  { t: "12:45", min: 135, liq: 97.8, alvo: 100, etapa: "Fervura" },
  { t: "12:50", min: 140, liq: 97.8, alvo: 100, etapa: "Fervura" },
  { t: "12:55", min: 145, liq: 82.8, alvo: 35, etapa: "Resfriamento" },
  { t: "13:00", min: 150, liq: 56.6, alvo: 35, etapa: "Resfriamento" },
  { t: "13:05", min: 155, liq: 42.8, alvo: 35, etapa: "Resfriamento" },
  { t: "13:10", min: 160, liq: 35.1, alvo: 35, etapa: "Resfriamento" },
  { t: "13:15", min: 165, liq: 27.7, alvo: 35, etapa: "Resfriamento" },
  { t: "13:20", min: 170, liq: 26.8, alvo: 35, etapa: "Resfriamento" },
  { t: "13:25", min: 175, liq: 25.6, alvo: 35, etapa: "Resfriamento" },
  { t: "13:30", min: 180, liq: 25.6, alvo: 35, etapa: "Resfriamento" },
];

// Pós-brassagem (26/04 → 29/05) — diário
const posCiclo = [
  { d: "26/04", liq: 18, alvo: 18, etapa: "Fermentação" },
  { d: "27/04", liq: 18, alvo: 18, etapa: "Fermentação" },
  { d: "28/04", liq: 18, alvo: 18, etapa: "Fermentação" },
  { d: "29/04", liq: 18, alvo: 18, etapa: "Fermentação" },
  { d: "30/04", liq: 18, alvo: 18, etapa: "Fermentação" },
  { d: "01/05", liq: 18, alvo: 18, etapa: "Fermentação" },
  { d: "02/05", liq: 20, alvo: 20, etapa: "Fermentação" },
  { d: "03/05", liq: 20, alvo: 20, etapa: "Fermentação" },
  { d: "04/05", liq: 20, alvo: 20, etapa: "Fermentação" },
  { d: "05/05", liq: 20, alvo: 20, etapa: "Fermentação" },
  { d: "06/05", liq: 10, alvo: 10, etapa: "Maturação" },
  { d: "07/05", liq: 10, alvo: 10, etapa: "Maturação" },
  { d: "08/05", liq: 10, alvo: 10, etapa: "Maturação" },
  { d: "09/05", liq: 10, alvo: 10, etapa: "Maturação" },
  { d: "10/05", liq: 10, alvo: 10, etapa: "Maturação" },
  { d: "11/05", liq: 10, alvo: 10, etapa: "Maturação" },
  { d: "12/05", liq: 10, alvo: 10, etapa: "Maturação" },
  { d: "13/05", liq: 0, alvo: 0, etapa: "Maturação" },
  { d: "14/05", liq: 0, alvo: 0, etapa: "Maturação" },
  { d: "15/05", liq: 0, alvo: 0, etapa: "Maturação" },
  { d: "16/05", liq: 0, alvo: 0, etapa: "Maturação" },
  { d: "17/05", liq: 0, alvo: 0, etapa: "Maturação" },
  { d: "18/05", liq: 0, alvo: 0, etapa: "Maturação" },
  { d: "19/05", liq: 0, alvo: 0, etapa: "Maturação" },
  { d: "20/05", liq: 18, alvo: 18, etapa: "Carbonatação" },
  { d: "21/05", liq: 18, alvo: 18, etapa: "Carbonatação" },
  { d: "22/05", liq: 18, alvo: 18, etapa: "Carbonatação" },
  { d: "23/05", liq: 18, alvo: 18, etapa: "Carbonatação" },
  { d: "24/05", liq: 18, alvo: 18, etapa: "Carbonatação" },
  { d: "25/05", liq: 18, alvo: 18, etapa: "Carbonatação" },
  { d: "26/05", liq: 18, alvo: 18, etapa: "Carbonatação" },
  { d: "27/05", liq: 18, alvo: 18, etapa: "Carbonatação" },
  { d: "28/05", liq: 18, alvo: 18, etapa: "Carbonatação" },
  { d: "29/05", liq: 18, alvo: 18, etapa: "Carbonatação" },
];

// KPIs derivados
const allLiq = [...brassagem.map((b) => b.liq), ...posCiclo.map((p) => p.liq)];
const desvios = brassagem.map((b) => Math.abs(b.liq - b.alvo));
const desvioMedio = (desvios.reduce((a, b) => a + b, 0) / desvios.length).toFixed(2);
const picoFervura = Math.max(...brassagem.filter((b) => b.etapa === "Fervura").map((b) => b.liq));
const minMaturacao = Math.min(...posCiclo.filter((p) => p.etapa === "Maturação").map((p) => p.liq));
const aderencia = (
  (brassagem.filter((b) => Math.abs(b.liq - b.alvo) <= 3).length / brassagem.length) *
  100
).toFixed(1);

const tooltipStyle = {
  background: "oklch(0.18 0.07 265)",
  border: "1px solid oklch(0.78 0.14 85 / 0.4)",
  borderRadius: 8,
  color: "oklch(0.96 0.02 85)",
};

function Dashboard() {
  return (
    <PageShell title="Dashboard" kicker="">
      <div className="mx-auto max-w-7xl px-6 pb-20 space-y-6">
        {/* KPIs */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { l: "Aderência ao setpoint", v: `${aderencia}%`, c: "± 3 °C tolerância" },
            { l: "Desvio médio (brassagem)", v: `${desvioMedio} °C`, c: "39 leituras" },
            { l: "Pico de fervura", v: `${picoFervura.toFixed(1)} °C`, c: "alvo 100 °C" },
            { l: "Maturação mínima", v: `${minMaturacao} °C`, c: "cold crash 0 °C" },
          ].map((k) => (
            <div key={k.l} className="glass rounded-2xl p-6 hover:glow-gold transition">
              <div className="text-xs uppercase tracking-widest text-[color:var(--muted-foreground)]">
                {k.l}
              </div>
              <div className="font-display text-3xl text-gradient-gold mt-2">{k.v}</div>
              <div className="text-xs text-gold mt-2">{k.c}</div>
            </div>
          ))}
        </div>

        {/* Brassagem */}
        <div className="glass-strong rounded-2xl p-6">
          <div className="flex flex-wrap items-end justify-between gap-3 mb-4">
            <div>
              <h3 className="font-display text-xl text-gradient-gold">
                Brassagem — 25/04/2026
              </h3>
              <p className="text-xs text-[color:var(--muted-foreground)] mt-1">
                Mostura → Mash Out → Fervura → Resfriamento · 3h de processo
              </p>
            </div>
            <div className="flex gap-3 text-[10px] uppercase tracking-widest">
              <span className="flex items-center gap-2 text-gold">
                <span className="w-3 h-3 rounded-full bg-gold" /> Líquido
              </span>
              <span className="flex items-center gap-2 text-[color:var(--muted-foreground)]">
                <span className="w-3 h-3 rounded-full border border-gold-soft" /> Alvo
              </span>
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={brassagem}>
                <defs>
                  <linearGradient id="gLiq" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.88 0.16 90)" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="oklch(0.88 0.16 90)" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="oklch(0.78 0.14 85 / 0.08)" vertical={false} />
                <XAxis dataKey="t" stroke="oklch(0.72 0.04 85 / 0.5)" tick={{ fontSize: 11 }} />
                <YAxis
                  stroke="oklch(0.72 0.04 85 / 0.5)"
                  tick={{ fontSize: 11 }}
                  unit="°"
                  domain={[0, 110]}
                />
                <Tooltip
                  contentStyle={tooltipStyle}
                  formatter={(v: number, n: string) => [`${v} °C`, n === "liq" ? "Líquido" : "Alvo"]}
                  labelFormatter={(l, p) =>
                    p && p[0] ? `${l} · ${(p[0].payload as { etapa: string }).etapa}` : l
                  }
                />
                <ReferenceLine y={65} stroke="oklch(0.78 0.14 85 / 0.25)" strokeDasharray="3 3" />
                <ReferenceLine y={100} stroke="oklch(0.78 0.14 85 / 0.25)" strokeDasharray="3 3" />
                <Area
                  type="monotone"
                  dataKey="liq"
                  stroke="oklch(0.88 0.16 90)"
                  strokeWidth={2.5}
                  fill="url(#gLiq)"
                />
                <Line
                  type="stepAfter"
                  dataKey="alvo"
                  stroke="oklch(0.72 0.04 85 / 0.7)"
                  strokeWidth={1.5}
                  strokeDasharray="4 4"
                  dot={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Ciclo pós-brassagem */}
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 glass-strong rounded-2xl p-6">
            <h3 className="font-display text-xl text-gradient-gold mb-1">
              Fermentação · Maturação · Carbonatação
            </h3>
            <p className="text-xs text-[color:var(--muted-foreground)] mb-4">
              26/04 → 29/05 · 34 dias de monitoramento diário
            </p>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={posCiclo}>
                  <defs>
                    <linearGradient id="gPos" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="oklch(0.78 0.14 85)" stopOpacity={0.55} />
                      <stop offset="100%" stopColor="oklch(0.78 0.14 85)" stopOpacity={0.02} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="oklch(0.78 0.14 85 / 0.08)" vertical={false} />
                  <XAxis dataKey="d" stroke="oklch(0.72 0.04 85 / 0.5)" tick={{ fontSize: 10 }} />
                  <YAxis stroke="oklch(0.72 0.04 85 / 0.5)" tick={{ fontSize: 11 }} unit="°" />
                  <Tooltip
                    contentStyle={tooltipStyle}
                    formatter={(v: number) => [`${v} °C`, "Temperatura"]}
                    labelFormatter={(l, p) =>
                      p && p[0] ? `${l} · ${(p[0].payload as { etapa: string }).etapa}` : l
                    }
                  />
                  <Legend wrapperStyle={{ fontSize: 11 }} />
                  <Area
                    type="monotone"
                    dataKey="liq"
                    name="Líquido"
                    stroke="oklch(0.88 0.16 90)"
                    strokeWidth={2.5}
                    fill="url(#gPos)"
                  />
                  <Line
                    type="stepAfter"
                    dataKey="alvo"
                    name="Alvo"
                    stroke="oklch(0.72 0.04 85 / 0.7)"
                    strokeWidth={1.5}
                    strokeDasharray="4 4"
                    dot={false}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="glass-strong rounded-2xl p-6">
            <h3 className="font-display text-xl text-gradient-gold mb-4">Linha do tempo</h3>
            <div className="space-y-3">
              {[
                { n: "Mostura", s: "65 °C · 60 min", st: "OK" },
                { n: "Mash Out", s: "76 °C · 15 min", st: "OK" },
                { n: "Fervura", s: "~98 °C · 60 min", st: "OK" },
                { n: "Resfriamento", s: "100 → 25 °C", st: "OK" },
                { n: "Fermentação", s: "18 → 20 °C · 10 d", st: "OK" },
                { n: "Maturação", s: "10 → 0 °C · 14 d", st: "OK" },
                { n: "Carbonatação", s: "18 °C · 10 d", st: "Ativo" },
              ].map((t) => (
                <div
                  key={t.n}
                  className="glass rounded-lg p-3 flex items-center justify-between"
                >
                  <div>
                    <div className="text-sm font-medium">{t.n}</div>
                    <div className="text-xs text-[color:var(--muted-foreground)]">{t.s}</div>
                  </div>
                  <span
                    className={`text-[10px] uppercase tracking-widest px-2 py-1 rounded-full ${
                      t.st === "Ativo"
                        ? "gradient-gold text-[color:var(--navy-deep)]"
                        : "border border-gold-soft text-gold"
                    }`}
                  >
                    {t.st}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resumo do lote */}
        <div className="glass-strong rounded-2xl p-6">
          <h3 className="font-display text-xl text-gradient-gold mb-4">
            Resumo do lote · Session Pilsen SQN
          </h3>
          <div className="grid gap-4 md:grid-cols-4 text-sm">
            {[
              { l: "Início da brassagem", v: "25/04/2026 · 10:30" },
              { l: "Fim do ciclo", v: "29/05/2026 · 13:30" },
              { l: "Duração total", v: "34 dias" },
              { l: "Leituras registradas", v: `${allLiq.length}` },
              { l: "Setpoint mínimo", v: "0 °C" },
              { l: "Setpoint máximo", v: "100 °C" },
              { l: "Etapa atual", v: "Carbonatação" },
              { l: "Volume", v: "5 L" },
            ].map((r) => (
              <div key={r.l} className="glass rounded-lg p-3">
                <div className="text-[10px] uppercase tracking-widest text-[color:var(--muted-foreground)]">
                  {r.l}
                </div>
                <div className="font-display text-gold mt-1">{r.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
