'use client'
import { useEffect, useState } from 'react';

const monitors = [
  { name: 'api.acme.io', region: 'Frankfurt', latency: 42, up: true },
  { name: 'shop.bolt.dev', region: 'Singapore', latency: 68, up: true },
  { name: 'auth.globo.com', region: 'São Paulo', latency: 91, up: true },
  { name: 'cdn.pixel.net', region: 'Virginia', latency: 24, up: true },
  { name: 'ws.trading.app', region: 'Tokyo', latency: 53, up: true },
  { name: 'api.acme.io', region: 'Mumbai', latency: 112, up: true },
  { name: 'status.finn.io', region: 'Stockholm', latency: 19, up: true },
  { name: 'grpc.data.io', region: 'Sydney', latency: 77, up: true },
  { name: 'api.acme.io', region: 'Cape Town', latency: 143, up: false },
];

export function HeroDashboard() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTick((t) => t + 1), 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass rounded-2xl card-glow p-0 overflow-hidden">
      {/* Window bar */}
      <div className="flex items-center gap-2 border-b border-ink-700/50 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-err-500/70" />
          <div className="h-3 w-3 rounded-full bg-warn-500/70" />
          <div className="h-3 w-3 rounded-full bg-accent-500/70" />
        </div>
        <div className="ml-2 flex items-center gap-1.5 text-xs font-mono text-ink-400">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-400 animate-blink" />
          sentrynode.io/dashboard
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Summary cards */}
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-xl bg-ink-800/60 border border-ink-700/40 p-3">
            <p className="text-[10px] uppercase tracking-wider text-ink-400">Monitors</p>
            <p className="mt-1 text-xl font-semibold text-ink-100">247</p>
            <div className="mt-1.5 h-1 w-full rounded-full bg-ink-700">
              <div className="h-1 w-[94%] rounded-full bg-accent-400" />
            </div>
          </div>
          <div className="rounded-xl bg-ink-800/60 border border-ink-700/40 p-3">
            <p className="text-[10px] uppercase tracking-wider text-ink-400">Uptime</p>
            <p className="mt-1 text-xl font-semibold text-accent-400">99.98%</p>
            <div className="mt-1.5 flex items-end gap-0.5 h-4">
              {[40, 55, 35, 70, 50, 80, 45, 65, 60, 75, 50, 90, 55, 70, 48, 85].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-accent-500/40"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
          <div className="rounded-xl bg-ink-800/60 border border-ink-700/40 p-3">
            <p className="text-[10px] uppercase tracking-wider text-ink-400">Nodes</p>
            <p className="mt-1 text-xl font-semibold text-cyan-400">1,842</p>
            <div className="mt-1.5 flex items-center gap-1">
              <span className="text-[10px] font-mono text-ink-400">global</span>
              <div className="flex-1 h-1 rounded-full bg-gradient-to-r from-accent-400 to-cyan-500" />
            </div>
          </div>
        </div>

        {/* Monitor list */}
        <div className="mt-4 space-y-1.5">
          {monitors.slice(0, 6).map((m, i) => (
            <div
              key={`${m.name}-${i}-${tick}`}
              className="flex items-center gap-3 rounded-lg border border-ink-700/30 bg-ink-850/40 px-3 py-2.5 transition-all hover:border-ink-600"
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  m.up ? 'bg-accent-400 animate-blink' : 'bg-err-500'
                }`}
              />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-mono text-ink-200 truncate">{m.name}</p>
                <p className="text-[10px] text-ink-400">{m.region}</p>
              </div>
              {/* Bars */}
              <div className="hidden sm:flex items-center gap-0.5">
                {Array.from({ length: 14 }).map((_, b) => (
                  <div
                    key={b}
                    className={`h-3.5 w-1 rounded-sm ${
                      m.up && b > (tick % 3) ? 'bg-accent-500/70' : m.up ? 'bg-accent-500/30' : 'bg-err-500/60'
                    }`}
                  />
                ))}
              </div>
              <div className="text-right">
                <p
                  className={`text-xs font-mono font-medium ${
                    m.up ? 'text-accent-400' : 'text-err-400'
                  }`}
                >
                  {m.up ? `${m.latency + (tick % 5)}ms` : 'DOWN'}
                </p>
                <p className="text-[9px] text-ink-500">p95</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
