import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

import reiDoMalte from "@/assets/rei-do-malte.jpg";

export const Route = createFileRoute("/loja")({
  component: Loja,
  head: () => ({
    meta: [
      { title: "Loja — Rei do Malte" },
      { name: "description", content: "Vitrine de cervejas artesanais premium: IPA, Pilsen, Weiss e Stout." },
    ],
  }),
});

const beers = [
  {
    size: "1 litro",
    price: "R$ 29,90",
    image: reiDoMalte,
    title: "Rei do Malte · 1 litro",
    description: "Cerveja artesanal puro malte para quem quer o produto completo em volume maior.",
  },
  {
    size: "600ml",
    price: "R$ 19,90",
    image: reiDoMalte,
    title: "Rei do Malte · 600ml",
    description: "A mesma cerveja artesanal em um formato mais compacto para o dia a dia.",
  },
  {
    size: "269ml",
    price: "R$ 9,90",
    image: reiDoMalte,
    title: "Rei do Malte · 269ml",
    description: "Uma dose prática e elegante da cerveja puro malte da Rei do Malte.",
  },
];

function Loja() {
  return (
    <PageShell title="Nossa Adega" kicker="">
      <div className="mx-auto max-w-7xl px-6 pb-16">
        <p className="text-center max-w-2xl mx-auto text-[color:var(--muted-foreground)] mb-14">
          Três estilos, uma coroa. Cada rótulo é uma jornada sensorial assinada pelos mestres cervejeiros.
        </p>

        <div className="grid gap-7 sm:grid-cols-1 lg:grid-cols-3">
          {beers.map((beer) => (
            <article
              key={beer.size}
              className="group glass rounded-2xl overflow-hidden hover:glow-gold-strong transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[color:var(--navy-deep)]">
                <img
                  src={beer.image}
                  alt={beer.title}
                  loading="lazy"
                  width={600}
                  height={800}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl text-gold">{beer.title}</h3>
                  <span className="text-xs text-[color:var(--muted-foreground)]">4.8%</span>
                </div>
                <p className="text-sm text-[color:var(--muted-foreground)] mt-2 leading-relaxed min-h-[3rem]">
                  {beer.description}
                </p>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <span className="font-display text-lg text-gradient-gold">{beer.size}</span>
                  <span className="font-display text-xl text-gradient-gold">{beer.price}</span>
                </div>
                <button className="mt-4 w-full rounded-lg gradient-gold px-4 py-2 text-sm font-bold text-[color:var(--navy-deep)] hover:brightness-110 transition glow-gold">
                  Comprar
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
