import { ArrowRight, ShieldCheck, Zap, Globe2 } from 'lucide-react';
import { HeroDashboard } from './HeroDashboard';

const badges = [
  { icon: ShieldCheck, label: 'No single point of failure' },
  { icon: Zap, label: 'Sub-second alerts' },
  { icon: Globe2, label: '1,800+ independent nodes' },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Background */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-accent-500/10 blur-[120px]" />
      <div className="absolute top-1/3 right-0 h-[300px] w-[300px] rounded-full bg-cyan-500/8 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-3 py-1.5 text-xs font-medium text-accent-300 animate-fade-in">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400 animate-blink" />
              Mainnet live — 1,842 nodes monitoring 12M+ endpoints
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-ink-100 sm:text-5xl lg:text-6xl">
              Uptime monitoring
              <br />
              <span className="text-gradient-accent">without a master.</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-300">
              A decentralized network of independent nodes checks your services from around
              the globe. No single point of failure, no black-box silences — every result is
              cryptographically signed and publicly verifiable.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#pricing"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-accent-500 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-all hover:bg-accent-400 hover:shadow-xl hover:shadow-accent-500/25"
              >
                Start monitoring free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-ink-600 bg-ink-850/50 px-6 py-3.5 text-sm font-semibold text-ink-100 transition-all hover:border-ink-500 hover:bg-ink-800"
              >
                See how it works
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {badges.map((b) => (
                <div key={b.label} className="flex items-center gap-2 text-sm text-ink-300">
                  <b.icon className="h-4 w-4 text-accent-400" />
                  {b.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Dashboard */}
          <div className="relative animate-float-slow">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent-500/10 to-cyan-500/5 blur-2xl" />
            <div className="relative">
              <HeroDashboard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
