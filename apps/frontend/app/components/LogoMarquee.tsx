const logos = [
  'Acme Corp', 'BoltFi', 'GlobePay', 'NebulaDB', 'PixelCDN',
  'Quantum Labs', 'RadixMail', 'StellarAI', 'Tessera', 'VaultFi',
];

export function LogoMarquee() {
  const doubled = [...logos, ...logos];
  return (
    <section className="relative border-y border-ink-800/50 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-wider text-ink-400">
          Trusted by teams monitoring critical infrastructure
        </p>

        <div className="relative mt-8 overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-ink-950 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-ink-950 to-transparent" />

          <div className="flex w-max animate-marquee gap-12">
            {doubled.map((name, i) => (
              <div
                key={i}
                className="flex items-center gap-2 whitespace-nowrap text-lg font-semibold tracking-tight text-ink-500"
              >
                <span className="h-2 w-2 rounded-sm bg-ink-600" />
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
