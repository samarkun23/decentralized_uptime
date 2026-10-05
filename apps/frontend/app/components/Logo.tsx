import { ShieldCheck } from 'lucide-react';

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent-500 to-cyan-600 shadow-lg shadow-accent-500/20">
          <ShieldCheck className="h-5 w-5 text-ink-950" strokeWidth={2.5} />
        </div>
        <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
          <span className="absolute h-full w-full rounded-full bg-accent-400 animate-pulse-ring" />
          <span className="h-full w-full rounded-full bg-accent-400" />
        </span>
      </div>
      <span className="text-lg font-semibold tracking-tight text-ink-100">
        Sentry<span className="text-gradient-accent">Node</span>
      </span>
    </div>
  );
}
