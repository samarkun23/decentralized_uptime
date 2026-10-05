'use client';

import { useState } from 'react';
import {
  Plus,
  ChevronDown,
  Search,
  ArrowUpRight,
  Globe2,
  Activity,
  CheckCircle2,
  XCircle,
  Clock,
  Zap,
  Server,
} from 'lucide-react';

import { useWebsite } from '@/hooks/useWebsite';
import AddWebsite from '../components/AddWebsite';

interface Monitor {
  id: string;
  name: string;
  url: string;
  region: string;
  uptime: number;
  responseTime: number;
  port: number;
  protocol: 'HTTPS' | 'TCP' | 'DNS';
  ticks: boolean[];
}

const tickLabels = [
  '30m ago',
  '27m',
  '24m',
  '21m',
  '18m',
  '15m',
  '12m',
  '9m',
  '6m',
  '3m',
];

function overallStatus(ticks: boolean[]): 'up' | 'down' {
  return ticks.length > 0 && ticks.every(Boolean) ? 'up' : 'down';
}

function getHostname(url: string) {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
}

function getProtocol(url: string): 'HTTPS' | 'TCP' | 'DNS' {
  if (url.startsWith('https://') || url.startsWith('http://')) {
    return 'HTTPS';
  }

  return 'HTTPS';
}

function getPort(url: string) {
  try {
    const parsed = new URL(url);

    if (parsed.port) {
      return Number(parsed.port);
    }

    return parsed.protocol === 'https:' ? 443 : 80;
  } catch {
    return 443;
  }
}

function transformWebsite(website: any): Monitor {
  const ticks = website.tick ?? [];

  const tickValues = ticks
    .slice(-10)
    .map((tick: any) => tick.status === 'UP' || tick.status === 'up' || tick.status === 'true');

  const responseTimes = ticks
    .slice(-10)
    .map((tick: any) => Number(tick.latency))
    .filter((latency: number) => !Number.isNaN(latency));

  const responseTime =
    responseTimes.length > 0
      ? Math.round(
          responseTimes.reduce((sum: number, value: number) => sum + value, 0) /
            responseTimes.length
        )
      : 0;

  const successfulTicks = tickValues.filter(Boolean).length;

  const uptime =
    tickValues.length > 0
      ? Number(((successfulTicks / tickValues.length) * 100).toFixed(2))
      : 0;

  return {
    id: website.id,
    name: getHostname(website.url),
    url: website.url,
    region: '—',
    uptime,
    responseTime,
    port: getPort(website.url),
    protocol: getProtocol(website.url),
    ticks: tickValues,
  };
}

export default function Dashboard() {
  const websites = useWebsite();

  const [expanded, setExpanded] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [addWebsiteOpen, setAddWebsiteOpen] = useState(false);

  const monitors: Monitor[] = websites.map(transformWebsite);

  const filtered = monitors.filter(
    (m) =>
      m.name.toLowerCase().includes(query.toLowerCase()) ||
      m.region.toLowerCase().includes(query.toLowerCase()) ||
      m.url.toLowerCase().includes(query.toLowerCase())
  );

  const upCount = monitors.filter(
    (m) => overallStatus(m.ticks) === 'up'
  ).length;

  const downCount = monitors.length - upCount;

  const avgResponse =
    monitors.length > 0
      ? Math.round(
          monitors.reduce((acc, m) => acc + m.responseTime, 0) /
            monitors.length
        )
      : 0;

  return (
    <div className="min-h-screen bg-ink-950 pt-20 pb-12">
      {/* Background glow */}
      <div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-accent-500/8 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-ink-100">
              Monitors
            </h1>

            <p className="mt-1 text-sm text-ink-400">
              {monitors.length} endpoints · checked every 3 minutes
            </p>
          </div>

          <button onClick={() => setAddWebsiteOpen(true)} className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent-500 px-4 py-2.5 text-sm font-semibold text-ink-950 transition-all hover:bg-accent-400 hover:shadow-lg hover:shadow-accent-500/25">
            <Plus className="h-4 w-4" />
            Add Monitor
          </button>
        </div>

        {/* Summary stats */}
        <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <div className="rounded-xl border border-ink-700/50 bg-ink-850/60 p-4">
            <div className="flex items-center gap-2 text-ink-400">
              <Activity className="h-4 w-4" />
              <span className="text-xs font-medium uppercase tracking-wider">
                Total
              </span>
            </div>

            <p className="mt-2 text-2xl font-bold text-ink-100">
              {monitors.length}
            </p>
          </div>

          <div className="rounded-xl border border-accent-500/20 bg-accent-500/5 p-4">
            <div className="flex items-center gap-2 text-accent-400">
              <CheckCircle2 className="h-4 w-4" />
              <span className="text-xs font-medium uppercase tracking-wider">
                Up
              </span>
            </div>

            <p className="mt-2 text-2xl font-bold text-accent-400">
              {upCount}
            </p>
          </div>

          <div className="rounded-xl border border-err-500/20 bg-err-500/5 p-4">
            <div className="flex items-center gap-2 text-err-400">
              <XCircle className="h-4 w-4" />
              <span className="text-xs font-medium uppercase tracking-wider">
                Down
              </span>
            </div>

            <p className="mt-2 text-2xl font-bold text-err-400">
              {downCount}
            </p>
          </div>

          <div className="rounded-xl border border-ink-700/50 bg-ink-850/60 p-4">
            <div className="flex items-center gap-2 text-ink-400">
              <Zap className="h-4 w-4" />
              <span className="text-xs font-medium uppercase tracking-wider">
                Avg response
              </span>
            </div>

            <p className="mt-2 text-2xl font-bold text-cyan-400">
              {avgResponse}
              <span className="text-sm text-ink-400">ms</span>
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="mt-6 flex items-center gap-2 rounded-xl border border-ink-700/50 bg-ink-850/60 px-4 py-2.5">
          <Search className="h-4 w-4 text-ink-400" />

          <input
            type="text"
            placeholder="Search monitors by name or URL…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm text-ink-100 placeholder:text-ink-500 focus:outline-none"
          />
        </div>

        {/* Monitor list */}
        <div className="mt-4 space-y-3">
          {filtered.map((m) => {
            const isOpen = expanded === m.id;
            const status = overallStatus(m.ticks);
            const downTicks = m.ticks.filter((t) => !t).length;

            return (
              <div
                key={m.id}
                className="overflow-hidden rounded-xl border border-ink-700/50 bg-ink-850/60 transition-colors hover:border-ink-600"
              >
                {/* Header */}
                <button
                  onClick={() =>
                    setExpanded(isOpen ? null : m.id)
                  }
                  className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-ink-800/40"
                >
                  {/* Status */}
                  <div className="relative flex-shrink-0">
                    <span
                      className={`absolute -inset-1 rounded-full animate-pulse-ring ${
                        status === 'up'
                          ? 'bg-accent-400/30'
                          : 'bg-err-500/30'
                      }`}
                    />

                    <span
                      className={`relative block h-3.5 w-3.5 rounded-full border-2 border-ink-850 ${
                        status === 'up'
                          ? 'bg-accent-400 shadow-[0_0_12px_rgba(16,185,129,0.6)]'
                          : 'bg-err-500 shadow-[0_0_12px_rgba(239,68,68,0.6)]'
                      }`}
                    />
                  </div>

                  {/* Name */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="truncate text-sm font-semibold text-ink-100">
                        {m.name}
                      </span>

                      <span
                        className={`flex-shrink-0 rounded px-1.5 py-0.5 text-[10px] font-medium ${
                          m.protocol === 'HTTPS'
                            ? 'bg-cyan-500/10 text-cyan-400'
                            : m.protocol === 'TCP'
                            ? 'bg-warn-500/10 text-warn-400'
                            : 'bg-accent-500/10 text-accent-400'
                        }`}
                      >
                        {m.protocol}
                      </span>
                    </div>

                    <div className="mt-0.5 flex items-center gap-3 text-xs text-ink-400">
                      <span className="flex items-center gap-1">
                        <Globe2 className="h-3 w-3" />
                        {m.region}
                      </span>

                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {m.responseTime}ms
                      </span>
                    </div>
                  </div>

                  {/* Uptime */}
                  <div className="hidden flex-shrink-0 text-right sm:block">
                    <p className="text-sm font-semibold text-ink-200">
                      {m.uptime}%
                    </p>

                    <p className="text-[10px] uppercase tracking-wider text-ink-500">
                      uptime
                    </p>
                  </div>

                  {/* Ticks */}
                  <div className="hidden flex-shrink-0 items-center gap-0.5 md:flex">
                    {m.ticks.map((tick, i) => (
                      <span
                        key={i}
                        className={`h-4 w-1 rounded-sm ${
                          tick
                            ? 'bg-accent-500/70'
                            : 'bg-err-500/70'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Chevron */}
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-ink-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Accordion */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-ink-700/40 px-5 py-5">
                      {/* URL */}
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-2 text-sm text-ink-300">
                          <ArrowUpRight className="h-4 w-4 text-ink-400" />

                          <span className="break-all font-mono text-ink-200">
                            {m.url}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-xs text-ink-400">
                          <Server className="h-3.5 w-3.5" />
                          Port {m.port}
                        </div>
                      </div>

                      {/* Last ticks */}
                      <div className="mt-5">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                            Last 30 minutes
                          </p>

                          <p className="text-xs text-ink-500">
                            {m.ticks.length - downTicks} up ·{' '}
                            {downTicks} down
                          </p>
                        </div>

                        <div className="mt-3 flex items-end gap-2">
                          {m.ticks.map((tick, i) => (
                            <div
                              key={i}
                              className="flex flex-1 flex-col items-center gap-1.5"
                            >
                              <div
                                className={`h-12 w-full rounded-md transition-all duration-300 ${
                                  tick
                                    ? 'bg-gradient-to-t from-accent-600 to-accent-400 shadow-[0_0_8px_rgba(16,185,129,0.3)]'
                                    : 'bg-gradient-to-t from-err-600 to-err-500 shadow-[0_0_8px_rgba(239,68,68,0.3)]'
                                }`}
                              />

                              <span className="text-[9px] font-mono text-ink-500">
                                {tickLabels[i] ?? ''}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="mt-5 grid grid-cols-3 gap-3">
                        <div className="rounded-lg bg-ink-900/50 px-3 py-2.5">
                          <p className="text-[10px] uppercase tracking-wider text-ink-500">
                            Status
                          </p>

                          <p
                            className={`mt-0.5 text-sm font-semibold ${
                              status === 'up'
                                ? 'text-accent-400'
                                : 'text-err-400'
                            }`}
                          >
                            {status === 'up'
                              ? 'Operational'
                              : 'Outage detected'}
                          </p>
                        </div>

                        <div className="rounded-lg bg-ink-900/50 px-3 py-2.5">
                          <p className="text-[10px] uppercase tracking-wider text-ink-500">
                            Last check
                          </p>

                          <p className="mt-0.5 text-sm font-semibold text-ink-200">
                            {m.ticks.length > 0
                              ? '3m ago'
                              : 'No checks'}
                          </p>
                        </div>

                        <div className="rounded-lg bg-ink-900/50 px-3 py-2.5">
                          <p className="text-[10px] uppercase tracking-wider text-ink-500">
                            Avg response
                          </p>

                          <p className="mt-0.5 text-sm font-semibold text-cyan-400">
                            {m.responseTime}ms
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="mt-12 text-center">
            <p className="text-sm text-ink-400">
              {monitors.length === 0
                ? 'No monitors found'
                : `No monitors match "${query}"`}
            </p>
          </div>
        )}
      </div>

      <AddWebsite
        open={addWebsiteOpen}
        onClose={() => setAddWebsiteOpen(false)}
        onAdded={() => "consol.log"}
      />
    </div>
  );
}
