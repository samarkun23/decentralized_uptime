import { Reveal } from './Reveal';
import { ArrowRight, Server, Coins } from 'lucide-react';

export function CTA() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-accent-500/20 bg-gradient-to-br from-ink-850 to-ink-900 p-10 lg:p-16 card-glow">
            {/* Glow orbs */}
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-accent-500/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-cyan-500/8 blur-3xl" />
            <div className="absolute inset-0 bg-grid opacity-20" />

            <div className="relative grid items-center gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-ink-100 sm:text-4xl">
                  Ready to monitor
                  <br />
                  <span className="text-gradient-accent">the decentralized way?</span>
                </h2>
                <p className="mt-4 max-w-md text-lg text-ink-300">
                  Set up your first monitor in under two minutes. Free plan, no credit card,
                  cancel anytime.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-accent-500 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-all hover:bg-accent-400 hover:shadow-xl hover:shadow-accent-500/25"
                  >
                    Start monitoring free
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-ink-600 bg-ink-800/50 px-6 py-3.5 text-sm font-semibold text-ink-100 transition-all hover:border-ink-500"
                  >
                    Read the docs
                  </a>
                </div>
              </div>

              {/* Node operator CTA */}
              <div className="rounded-2xl border border-ink-700/50 bg-ink-900/60 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10">
                    <Server className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink-100">Run a node</h3>
                    <p className="text-xs text-ink-400">Join the monitoring mesh</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-ink-300">
                  Spare compute and bandwidth? Run a SentryNode and earn rewards for every
                  verified check your node performs.
                </p>
                <div className="mt-4 flex items-center gap-2 rounded-lg bg-ink-800/60 px-3 py-2.5">
                  <Coins className="h-4 w-4 text-warn-400" />
                  <span className="text-xs font-mono text-ink-300">
                    Avg. operator yield: 4.2% APY
                  </span>
                </div>
                <a
                  href="#"
                  className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-4 py-2.5 text-sm font-medium text-cyan-300 transition-all hover:bg-cyan-500/20"
                >
                  Become an operator
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
