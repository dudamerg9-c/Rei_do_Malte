import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import ipa from "@/assets/beer-ipa.jpg";
import pilsen from "@/assets/beer-pilsen.jpg";
import weiss from "@/assets/beer-weiss.jpg";
import stout from "@/assets/beer-stout.jpg";

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
  { name: "Royal IPA", img: ipa, abv: "6.5%", price: "R$ 29,90", desc: "Lupulada e cítrica, com final amargo nobre.", tag: "Mais vendida" },
  { name: "Crown Pilsen", img: pilsen, abv: "4.8%", price: "R$ 24,90", desc: "Lager dourada, leve e refrescante como uma coroa de gelo.", tag: "Clássica" },
  { name: "Knight Weiss", img: weiss, abv: "5.2%", price: "R$ 27,90", desc: "Trigo turvo com notas de banana e cravo.", tag: "Artesanal" },
  { name: "Black Stout", img: stout, abv: "7.0%", price: "R$ 34,90", desc: "Negra encorpada, café torrado e chocolate amargo.", tag: "Limitada" },
];

function Loja() {
  return (
    <PageShell title="Nossa Adega Real" kicker="Loja Premium">
      <div className="mx-auto max-w-7xl px-6 pb-16">
        <p className="text-center max-w-2xl mx-auto text-[color:var(--muted-foreground)] mb-14">
          Quatro estilos, uma coroa. Cada rótulo é uma jornada sensorial assinada pelos mestres cervejeiros.
        </p>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {beers.map((b) => (
            <article
              key={b.name}
              className="group glass rounded-2xl overflow-hidden hover:glow-gold-strong transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[color:var(--navy-deep)]">
                <img
                  src={b.img}
                  alt={b.name}
                  loading="lazy"
                  width={600}
                  height={800}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full gradient-gold text-[color:var(--navy-deep)] font-bold">
                  {b.tag}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-xl text-gold">{b.name}</h3>
                  <span className="text-xs text-[color:var(--muted-foreground)]">{b.abv}</span>
                </div>
                <p className="text-sm text-[color:var(--muted-foreground)] mt-2 leading-relaxed min-h-[3rem]">{b.desc}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-display text-2xl text-gradient-gold">{b.price}</span>
                  <button className="rounded-lg gradient-gold px-4 py-2 text-xs font-bold text-[color:var(--navy-deep)] hover:brightness-110 transition glow-gold">
                    Comprar
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
