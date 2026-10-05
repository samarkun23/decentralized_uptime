'use client'
import { useEffect, useRef, useState } from 'react';
import { Reveal } from './Reveal';

interface StatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel?: string;
}

function AnimatedStat({ value, suffix = '', prefix = '', label, sublabel }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true);
          const duration = 1800;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(tick);
            else setDisplay(value);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, started]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-bold tracking-tight text-ink-100 sm:text-5xl">
        {prefix}
        {display.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-ink-200">{label}</p>
      {sublabel && <p className="text-xs text-ink-400">{sublabel}</p>}
    </div>
  );
}

export function Stats() {
  return (
    <section id="network" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-400">
            The network
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-100 sm:text-4xl">
            A monitoring mesh built by the community
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid grid-cols-2 gap-8 rounded-2xl border border-ink-700/50 bg-ink-850/60 p-10 card-glow lg:grid-cols-4">
            <AnimatedStat value={1842} suffix="+" label="Active nodes" sublabel="Operator-run" />
            <AnimatedStat value={60} suffix="+" label="Regions" sublabel="6 continents" />
            <AnimatedStat value={12} suffix="M+" label="Endpoints" sublabel="Checked daily" />
            <AnimatedStat value={99} suffix=".98%" label="Network uptime" sublabel="Last 90 days" />
          </div>
        </Reveal>

        {/* Node map */}
        <Reveal delay={200}>
          <div className="mt-8 rounded-2xl border border-ink-700/50 bg-ink-850/40 p-6 card-glow">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-ink-200">Live node distribution</p>
              <span className="flex items-center gap-1.5 text-xs font-mono text-accent-400">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400 animate-blink" />
                real-time
              </span>
            </div>

            {/* Simplified world dots */}
            <div className="relative mt-4 h-48 overflow-hidden rounded-xl bg-ink-900/60">
              <div className="absolute inset-0 bg-grid opacity-40" />
              {[
                { top: '30%', left: '15%', label: 'Virginia' },
                { top: '25%', left: '45%', label: 'Frankfurt' },
                { top: '35%', left: '50%', label: 'Stockholm' },
                { top: '55%', left: '20%', label: 'São Paulo' },
                { top: '40%', left: '70%', label: 'Singapore' },
                { top: '30%', left: '80%', label: 'Tokyo' },
                { top: '60%', left: '75%', label: 'Sydney' },
                { top: '45%', left: '60%', label: 'Mumbai' },
                { top: '65%', left: '50%', label: 'Cape Town' },
                { top: '35%', left: '25%', label: 'Texas' },
                { top: '40%', left: '10%', label: 'Oregon' },
                { top: '50%', left: '85%', label: 'Seoul' },
              ].map((node, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{ top: node.top, left: node.left }}
                >
                  <div className="relative">
                    <span className="absolute -inset-1 rounded-full bg-accent-400/40 animate-pulse-ring" style={{ animationDelay: `${i * 0.3}s` }} />
                    <span className="block h-2 w-2 rounded-full bg-accent-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
