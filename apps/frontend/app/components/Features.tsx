import {
  ShieldCheck,
  Globe2,
  Bell,
  FileCheck2,
  Lock,
  Workflow,
} from 'lucide-react';
import { Reveal } from './Reveal';

const features = [
  {
    icon: ShieldCheck,
    title: 'Decentralized by design',
    desc: 'Checks are distributed across 1,800+ independently operated nodes. No central server can go dark and blind you simultaneously.',
    accent: 'text-accent-400',
    bg: 'bg-accent-500/10',
  },
  {
    icon: FileCheck2,
    title: 'Cryptographic proofs',
    desc: 'Every check is signed by the node that performed it. Verify any uptime claim yourself — no need to trust the platform.',
    accent: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
  },
  {
    icon: Bell,
    title: 'Sub-second alerting',
    desc: 'Edge-confirmed consensus triggers alerts in under a second. Get notified via Slack, PagerDuty, webhook, or SMS before your users notice.',
    accent: 'text-warn-400',
    bg: 'bg-warn-500/10',
  },
  {
    icon: Globe2,
    title: 'True global coverage',
    desc: 'Nodes in 60+ regions across 6 continents. Monitor from the locations that matter to your users, not just where a provider has a data center.',
    accent: 'text-accent-400',
    bg: 'bg-accent-500/10',
  },
  {
    icon: Lock,
    title: 'Privacy-first',
    desc: 'No agent to install. Checks run from the network edge. Your credentials and endpoints are encrypted end-to-end and never stored in plaintext.',
    accent: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
  },
  {
    icon: Workflow,
    title: 'Status pages included',
    desc: 'Ship a branded status page with one click. Powered by the same signed data, so what visitors see is exactly what the network measured.',
    accent: 'text-warn-400',
    bg: 'bg-warn-500/10',
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-400">
            Why SentryNode
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-100 sm:text-4xl">
            Monitoring that survives its own provider
          </h2>
          <p className="mt-4 text-lg text-ink-300">
            Traditional monitors sit in one cloud. When that cloud has a bad day, your
            monitoring goes blind at the exact moment you need it most. We fixed that.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <div className="card-glow card-glow-hover group h-full rounded-2xl border border-ink-700/50 bg-ink-850/60 p-6">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${f.bg}`}>
                  <f.icon className={`h-6 w-6 ${f.accent}`} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink-100">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
