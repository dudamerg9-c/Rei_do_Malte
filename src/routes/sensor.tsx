import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { useEffect, useState } from "react";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

export const Route = createFileRoute("/sensor")({
  component: Sensor,
  head: () => ({
    meta: [
      { title: "Sensor — Rei do Malte" },
      { name: "description", content: "Monitoramento IoT em tempo real da produção." },
    ],
  }),
});

function useLive(initial: number, range: number) {
  const [v, setV] = useState(initial);
  useEffect(() => {
    const id = setInterval(() => {
      setV((p) => +(p + (Math.random() - 0.5) * range).toFixed(2));
    }, 1500);
    return () => clearInterval(id);
  }, [range]);
  return v;
}

function genSeries(base: number, n = 20) {
  return Array.from({ length: n }, (_, i) => ({ x: i, y: base + Math.sin(i / 2) * 2 + Math.random() * 1.5 }));
}

function Sensor() {
  const temp = useLive(18.4, 0.4);
  const press = useLive(1.24, 0.05);
  const fer = useLive(67, 1);
  const hum = useLive(58, 1.5);
  const qual = useLive(96, 0.6);

  const [series] = useState(() => genSeries(18.4));

  const sensors = [
    { l: "Temperatura", v: `${temp}°C`, status: "Ótimo" },
    { l: "Pressão", v: `${press} bar`, status: "Estável" },
    { l: "Fermentação", v: `${fer}%`, status: "Em curso" },
    { l: "Umidade", v: `${hum}%`, status: "Ideal" },
    { l: "Qualidade do tanque", v: `${qual}%`, status: "Premium" },
  ];

  return (
    <PageShell title="Sensores IoT" kicker="Controle em tempo real">
      <div className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5 mb-8">
          {sensors.map((s) => (
            <div key={s.l} className="glass rounded-2xl p-5 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-20" style={{ background: "radial-gradient(circle, var(--gold), transparent)" }} />
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-[color:var(--gold)] animate-pulse" />
                <span className="text-[10px] uppercase tracking-widest text-[color:var(--muted-foreground)]">{s.status}</span>
              </div>
              <div className="text-xs text-[color:var(--muted-foreground)]">{s.l}</div>
              <div className="font-display text-3xl text-gradient-gold mt-1 tabular-nums">{s.v}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 glass-strong rounded-2xl p-6">
            <div className="flex justify-between mb-4">
              <div>
                <div className="text-[11px] uppercase tracking-[0.4em] text-gold">Tanque 03 · Royal IPA</div>
                <h3 className="font-display text-2xl text-gradient-gold mt-1">Temperatura — últimas 24h</h3>
              </div>
              <div className="text-xs text-[color:var(--muted-foreground)]">Atualizado agora</div>
            </div>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={series}>
                  <defs>
                    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="oklch(0.88 0.16 90)" stopOpacity={0.7} />
                      <stop offset="100%" stopColor="oklch(0.78 0.14 85)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="x" stroke="oklch(0.72 0.04 85 / 0.4)" tick={{ fontSize: 10 }} />
                  <YAxis stroke="oklch(0.72 0.04 85 / 0.4)" tick={{ fontSize: 10 }} />
                  <Tooltip contentStyle={{ background: "oklch(0.18 0.07 265)", border: "1px solid oklch(0.78 0.14 85 / 0.4)", borderRadius: 8 }} />
                  <Area type="monotone" dataKey="y" stroke="oklch(0.88 0.16 90)" strokeWidth={2} fill="url(#g)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="glass-strong rounded-2xl p-6 space-y-4">
            <h3 className="font-display text-xl text-gradient-gold">Alertas</h3>
            {[
              { t: "Tanque 03 estável", d: "há 2 min", ok: true },
              { t: "Calibração agendada", d: "amanhã 08:00", ok: true },
              { t: "Filtro 02 — atenção", d: "há 12 min", ok: false },
            ].map((a) => (
              <div key={a.t} className="glass rounded-lg p-4 flex items-center gap-3">
                <span className={`h-2.5 w-2.5 rounded-full ${a.ok ? "bg-[color:var(--gold)]" : "bg-orange-400"} animate-pulse`} />
                <div className="flex-1">
                  <div className="text-sm text-[color:var(--foreground)]">{a.t}</div>
                  <div className="text-xs text-[color:var(--muted-foreground)]">{a.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
