import logo from "@/assets/logo.jpeg";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-gold-soft">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-10 md:grid-cols-3">
        <div className="flex items-center gap-4">
          <img src={logo} alt="" className="h-14 w-14 rounded-full ring-1 ring-[color:var(--gold)]/40" />
          <div>
            <div className="font-display text-lg text-gradient-gold">REI DO MALTE</div>
            <p className="text-xs text-[color:var(--muted-foreground)] mt-1">Cerveja artesanal de coroa.</p>
          </div>
        </div>
        <div className="text-sm text-[color:var(--muted-foreground)]">
          <div className="text-gold font-semibold mb-2 font-display">Contato</div>
          contato@reidomalte.com<br/>+55 (11) 4002-8922
        </div>
        <div className="text-sm text-[color:var(--muted-foreground)]">
          <div className="text-gold font-semibold mb-2 font-display">Endereço</div>
          Rua dos Maltes, 1066<br/>São Paulo · Brasil
        </div>
      </div>
      <div className="border-t border-gold-soft py-5 text-center text-xs text-[color:var(--muted-foreground)]">
        © {new Date().getFullYear()} Rei do Malte. Bebida alcoólica. Aprecie com moderação.
      </div>
    </footer>
  );
}
