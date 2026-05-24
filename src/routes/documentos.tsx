import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/documentos")({
  component: Documentos,
  head: () => ({
    meta: [
      { title: "Documentos — Rei do Malte" },
      { name: "description", content: "Central de documentos, laudos e certificados." },
    ],
  }),
});

const docs = [
  { n: "Receita Técnica — Royal IPA", t: "PDF", s: "1.2 MB", d: "12/05/2026", tag: "Receita" },
  { n: "Laudo Microbiológico — Lote 2026-04", t: "PDF", s: "320 KB", d: "08/05/2026", tag: "Laudo" },
  { n: "Certificado Orgânico ABIC", t: "PDF", s: "780 KB", d: "01/05/2026", tag: "Certificado" },
  { n: "Relatório de Produção — Abril", t: "XLSX", s: "2.1 MB", d: "30/04/2026", tag: "Relatório" },
  { n: "Receita Técnica — Crown Pilsen", t: "PDF", s: "1.4 MB", d: "20/04/2026", tag: "Receita" },
  { n: "Auditoria Sanitária 2026", t: "PDF", s: "3.6 MB", d: "15/04/2026", tag: "Certificado" },
];

function iconFor(t: string) {
  return t === "XLSX" ? "▦" : "▤";
}

function Documentos() {
  return (
    <PageShell title="Arquivo Real" kicker="Central de Documentos">
      <div className="mx-auto max-w-6xl px-6 pb-20">
        <div className="glass-strong rounded-2xl overflow-hidden">
          <div className="hidden md:grid grid-cols-12 px-6 py-4 text-[10px] uppercase tracking-widest text-[color:var(--muted-foreground)] border-b border-gold-soft">
            <div className="col-span-6">Documento</div>
            <div className="col-span-2">Categoria</div>
            <div className="col-span-1">Tipo</div>
            <div className="col-span-1">Tam.</div>
            <div className="col-span-1">Data</div>
            <div className="col-span-1 text-right">Ação</div>
          </div>

          {docs.map((d) => (
            <div key={d.n} className="grid grid-cols-1 md:grid-cols-12 gap-2 items-center px-6 py-5 border-b border-gold-soft last:border-0 hover:bg-[color:var(--gold)]/5 transition">
              <div className="col-span-6 flex items-center gap-4">
                <div className="h-11 w-11 rounded-lg gradient-gold grid place-items-center text-[color:var(--navy-deep)] text-xl font-bold">
                  {iconFor(d.t)}
                </div>
                <div className="font-medium">{d.n}</div>
              </div>
              <div className="col-span-2">
                <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-gold-soft text-gold">
                  {d.tag}
                </span>
              </div>
              <div className="col-span-1 text-sm text-[color:var(--muted-foreground)]">{d.t}</div>
              <div className="col-span-1 text-sm text-[color:var(--muted-foreground)]">{d.s}</div>
              <div className="col-span-1 text-sm text-[color:var(--muted-foreground)]">{d.d}</div>
              <div className="col-span-1 md:text-right">
                <button className="rounded-lg gradient-gold px-3 py-1.5 text-xs font-bold text-[color:var(--navy-deep)] hover:brightness-110 transition">
                  Baixar ↓
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
