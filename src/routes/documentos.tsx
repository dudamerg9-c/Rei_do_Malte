import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

const driveLink = "https://drive.google.com/drive/folders/17v0uJ-LGNe2HY3ZksE1S7SsksfDhOLqo?usp=drive_link";
const gameLink = "https://github.com/dudamerg9-c/Rei_do_Malte";
const productionLink = "https://docs.google.com/spreadsheets/d/1cDFK6n1H72q6wRglz2V7nI3-1_TdOUq2rRyu6TXk6yM/edit?usp=sharing";

const links = [
  {
    title: "Todos os documentos estão aqui",
    description: "Acesse a pasta oficial do Google Drive com receitas, laudos, certificados e materiais da marca.",
    href: driveLink,
    cta: "Abrir pasta do Drive",
    badge: "📁 Drive oficial",
  },
  {
    title: "Jogo de Tabuleiro - Rei do Malte",
    description: "Consulte o repositório do jogo e acompanhe a evolução do projeto completo.",
    href: gameLink,
    cta: "Abrir repositório",
    badge: "🎲 Projeto do jogo",
  },
  {
    title: "Dados da produção de cerveja - Rei do Malte",
    description: "Acesse a planilha com os dados de produção para acompanhar o desempenho da cervejaria.",
    href: productionLink,
    cta: "Abrir planilha",
    badge: "📊 Produção",
  },
];

export const Route = createFileRoute("/documentos")({
  component: Documentos,
  head: () => ({
    meta: [
      { title: "Documentos — Rei do Malte" },
      { name: "description", content: "Acesse aqui todos os documentos e links principais da marca." },
    ],
  }),
});

function Documentos() {
  return (
    <PageShell title="Documentos" kicker="Central de Material">
      <div className="mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-gold">Materiais e referências</p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl text-gradient-gold">
            Tudo que você precisa para consultar e acompanhar o projeto
          </h2>
          <p className="mt-4 text-sm md:text-base leading-7 text-[color:var(--muted-foreground)]">
            Centralizamos aqui os links principais para documentos, o repositório do jogo e os dados de produção.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {links.map((link) => (
            <article
              key={link.title}
              className="glass-strong rounded-[28px] p-6 flex h-full flex-col justify-between"
            >
              <div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-gold">{link.badge}</p>
                <h3 className="mt-4 font-display text-2xl text-gradient-gold">{link.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted-foreground)]">
                  {link.description}
                </p>
              </div>

              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl gradient-gold px-5 py-3 text-sm font-semibold text-[color:var(--navy-deep)] glow-gold-strong"
              >
                {link.cta}
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
