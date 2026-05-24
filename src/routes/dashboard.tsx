import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Line, LineChart, CartesianGrid } from "recharts";

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
  head: () => ({
    meta: [
      { title: "Dashboard — Rei do Malte" },
      { name: "description", content: "Painel administrativo da produção cervejeira." },
    ],
  }),
});

const prod = [
  { d: "Seg", v: 820 }, { d: "Ter", v: 940 }, { d: "Qua", v: 1080 },
  { d: "Qui", v: 1220 }, { d: "Sex", v: 1380 }, { d: "Sáb", v: 1640 }, { d: "Dom", v: 1190 },
];
const sales = [
  { d: "01", v: 24 }, { d: "05", v: 38 }, { d: "10", v: 31 }, { d: "15", v: 52 },
  { d: "20", v: 61 }, { d: "25", v: 48 }, { d: "30", v: 72 },
];

function Dashboard() {
  return (
    <PageShell title="Centro de Comando" kicker="Dashboard Real">
      <div className="mx-auto max-w-7xl px-6 pb-20 space-y-6">
        {/* KPIs */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { l: "Litros hoje", v: "1.380L", c: "+12%" },
            { l: "Vendas (mês)", v: "R$ 248K", c: "+8%" },
            { l: "Estoque", v: "9.2K un", c: "estável" },
            { l: "Eficiência", v: "94.2%", c: "+1.4%" },
          ].map((k) => (
            <div key={k.l} className="glass rounded-2xl p-6 hover:glow-gold transition">
              <div className="text-xs uppercase tracking-widest text-[color:var(--muted-foreground)]">{k.l}</div>
              <div className="font-display text-3xl text-gradient-gold mt-2">{k.v}</div>
              <div className="text-xs text-gold mt-2">{k.c}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 glass-strong rounded-2xl p-6">
            <h3 className="font-display text-xl text-gradient-gold mb-4">Produção semanal (L)</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={prod}>
                  <CartesianGrid stroke="oklch(0.78 0.14 85 / 0.1)" vertical={false} />
                  <XAxis dataKey="d" stroke="oklch(0.72 0.04 85 / 0.5)" />
                  <YAxis stroke="oklch(0.72 0.04 85 / 0.5)" />
                  <Tooltip contentStyle={{ background: "oklch(0.18 0.07 265)", border: "1px solid oklch(0.78 0.14 85 / 0.4)", borderRadius: 8 }} />
                  <Bar dataKey="v" fill="oklch(0.78 0.14 85)" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="glass-strong rounded-2xl p-6">
            <h3 className="font-display text-xl text-gradient-gold mb-4">Sensores ativos</h3>
            <div className="space-y-3">
              {[
                { n: "Tanque 01", s: "Pilsen", st: "OK" },
                { n: "Tanque 02", s: "Weiss", st: "OK" },
                { n: "Tanque 03", s: "Royal IPA", st: "OK" },
                { n: "Tanque 04", s: "Stout", st: "Manutenção" },
              ].map((t) => (
                <div key={t.n} className="glass rounded-lg p-3 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">{t.n}</div>
                    <div className="text-xs text-[color:var(--muted-foreground)]">{t.s}</div>
                  </div>
                  <span className={`text-[10px] uppercase tracking-widest px-2 py-1 rounded-full ${
                    t.st === "OK" ? "gradient-gold text-[color:var(--navy-deep)]" : "border border-gold-soft text-gold"
                  }`}>{t.st}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="glass-strong rounded-2xl p-6">
          <h3 className="font-display text-xl text-gradient-gold mb-4">Vendas — últimos 30 dias</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sales}>
                <CartesianGrid stroke="oklch(0.78 0.14 85 / 0.1)" vertical={false} />
                <XAxis dataKey="d" stroke="oklch(0.72 0.04 85 / 0.5)" />
                <YAxis stroke="oklch(0.72 0.04 85 / 0.5)" />
                <Tooltip contentStyle={{ background: "oklch(0.18 0.07 265)", border: "1px solid oklch(0.78 0.14 85 / 0.4)", borderRadius: 8 }} />
                <Line type="monotone" dataKey="v" stroke="oklch(0.88 0.16 90)" strokeWidth={3} dot={{ fill: "oklch(0.88 0.16 90)", r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
