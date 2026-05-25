import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

const driveLink = "https://drive.google.com/drive/folders/17v0uJ-LGNe2HY3ZksE1S7SsksfDhOLqo?usp=drive_link";

export const Route = createFileRoute("/documentos")({
  component: Documentos,
  head: () => ({
    meta: [
      { title: "Documentos — Rei do Malte" },
      { name: "description", content: "Acesse aqui todos os documentos da marca em um só lugar." },
    ],
  }),
});

function Documentos() {
  return (
    <PageShell title="Documentos" kicker="Central de Material">
      <div className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="glass-strong rounded-[28px] p-8 md:p-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-soft px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-gold">
              🗂️ Drive oficial
            </div>

            <h2 className="mt-6 font-display text-3xl md:text-4xl text-gradient-gold">
              Todos os documentos estão aqui
            </h2>

            <p className="mt-4 text-sm md:text-base leading-7 text-[color:var(--muted-foreground)]">
              Para manter tudo organizado e acessível, centralizamos os documentos em uma pasta do Google Drive.
              Acesse o link abaixo para conferir receitas, laudos, certificados e demais materiais da marca.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={driveLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl gradient-gold px-5 py-3 text-sm font-semibold text-[color:var(--navy-deep)] glow-gold-strong"
              >
                Abrir pasta do Drive
                <span aria-hidden="true">↗</span>
              </a>

              <a
                href="/"
                className="inline-flex items-center gap-2 rounded-xl glass-strong px-5 py-3 text-sm font-semibold text-gold border border-gold-soft"
              >
                Voltar ao início
              </a>
            </div>
          </section>

          <aside className="space-y-4">
            <div className="glass-strong rounded-[24px] p-6">
              <p className="text-[11px] uppercase tracking-[0.35em] text-gold">Atualização</p>
              <h3 className="mt-4 font-display text-2xl text-gradient-gold">Conteúdo em constante evolução</h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--muted-foreground)]">
                A pasta oficial do Drive é o ponto único de consulta para o material da empresa.
                Sempre que houver um novo documento, ele será adicionado por lá.
              </p>
            </div>

            <div className="glass-strong rounded-[24px] p-6">
              <p className="text-[11px] uppercase tracking-[0.35em] text-gold">Dica</p>
              <p className="mt-4 text-sm leading-7 text-[color:var(--muted-foreground)]">
                Para melhor visualização, abra o link em uma aba nova. Os arquivos ficam organizados pela pasta do Google Drive.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </PageShell>
  );
}
