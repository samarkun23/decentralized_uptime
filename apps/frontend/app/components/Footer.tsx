import { Logo } from './Logo';
import { SquareTerminal, MessageCircle } from 'lucide-react';

const columns = [
  {
    title: 'Product',
    links: ['Features', 'Pricing', 'Status Page', 'Integrations', 'Changelog'],
  },
  {
    title: 'Developers',
    links: ['Documentation', 'API Reference', 'Node SDK', 'Proof Verification', 'GitHub'],
  },
  {
    title: 'Network',
    links: ['Run a Node', 'Operator Rewards', 'Node Explorer', 'Whitepaper', 'Governance'],
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Contact', 'Press Kit'],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-ink-800 bg-ink-950">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-400">
              Decentralized uptime monitoring powered by a global network of independent
              nodes. No single point of failure. Transparent, verifiable, trustless.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: SquareTerminal, href: '#' },
                { icon: MessageCircle, href: '#' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-700 bg-ink-850 text-ink-300 transition-all hover:border-accent-500/30 hover:text-accent-400"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-ink-100">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-ink-400 transition-colors hover:text-accent-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-800 pt-8 sm:flex-row">
          <p className="text-xs text-ink-500">
            © 2026 SentryNode. Open-source protocol. All checks verifiable on-chain.
          </p>
          <div className="flex items-center gap-2 text-xs font-mono text-ink-500">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400 animate-blink" />
            All systems operational — 1,842 nodes online
          </div>
        </div>
      </div>
    </footer>
  );
}
