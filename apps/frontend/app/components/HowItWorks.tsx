import { Reveal } from './Reveal';
import { Radio, Share2, Bell, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: Radio,
    num: '01',
    title: 'Add your endpoint',
    desc: 'Drop in a URL, add optional auth headers, and pick check types — HTTP, TCP, DNS, or gRPC. No agent, no install.',
  },
  {
    icon: Share2,
    num: '02',
    title: 'Nodes self-assign',
    desc: 'The protocol randomly assigns 15+ nodes from different operators and regions. Consensus requires majority agreement before any state change.',
  },
  {
    icon: Bell,
    num: '03',
    title: 'Get alerted instantly',
    desc: 'When a majority of nodes confirm an outage, alerts fire in under a second. No flapping, no false positives from a single blip.',
  },
  {
    icon: BarChart3,
    num: '04',
    title: 'Verify everything',
    desc: 'Every check is signed and stored on-chain. Pull the raw proof for any incident and independently verify what happened, when, and from where.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-radial-glow opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-400">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-100 sm:text-4xl">
            From URL to verified uptime in minutes
          </h2>
          <p className="mt-4 text-lg text-ink-300">
            Four steps. Zero infrastructure to manage. The network does the heavy lifting.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 100}>
              <div className="relative h-full rounded-2xl border border-ink-700/50 bg-ink-850/60 p-6 card-glow">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10">
                    <s.icon className="h-5 w-5 text-accent-400" />
                  </div>
                  <span className="font-mono text-2xl font-bold text-ink-700">{s.num}</span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink-100">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{s.desc}</p>

                {i < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-3 hidden h-6 w-6 items-center justify-center lg:flex">
                    <div className="h-px w-6 bg-gradient-to-r from-accent-500/40 to-transparent" />
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
