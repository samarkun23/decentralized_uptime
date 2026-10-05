import { Check, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

const plans = [
  {
    name: 'Stake',
    price: '$0',
    period: 'forever',
    desc: 'For side projects and getting started',
    features: [
      '10 monitors',
      '30-second check interval',
      '5 regions',
      'Email + Discord alerts',
      'Public status page',
      '7-day incident history',
    ],
    cta: 'Start free',
    featured: false,
  },
  {
    name: 'Operator',
    price: '$29',
    period: '/ month',
    desc: 'For teams that need real coverage',
    features: [
      '100 monitors',
      '10-second check interval',
      'All 60+ regions',
      'Slack, PagerDuty, webhook, SMS',
      'Custom status page domain',
      '90-day incident history',
      'Signed proof exports',
      '5 team seats',
    ],
    cta: 'Start 14-day trial',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'For platforms with critical SLAs',
    features: [
      'Unlimited monitors',
      '1-second check interval',
      'Dedicated node allocation',
      'Custom alert pipelines',
      'On-prem status page',
      'Unlimited history',
      'On-chain proof retention',
      'SSO + audit logs',
      '24/7 dedicated support',
    ],
    cta: 'Talk to us',
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-radial-glow opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-400">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-100 sm:text-4xl">
            Pay for coverage, not for a black box
          </h2>
          <p className="mt-4 text-lg text-ink-300">
            Every plan includes signed proofs, decentralized consensus, and no single point
            of failure. Upgrade only when you need more monitors or faster checks.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100}>
              <div
                className={`relative h-full rounded-2xl border p-8 card-glow ${
                  plan.featured
                    ? 'border-accent-500/40 bg-gradient-to-b from-accent-500/5 to-ink-850/60'
                    : 'border-ink-700/50 bg-ink-850/60'
                } card-glow-hover`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-accent-500 px-3 py-1 text-xs font-semibold text-ink-950">
                      Most popular
                    </span>
                  </div>
                )}

                <h3 className="text-lg font-semibold text-ink-100">{plan.name}</h3>
                <p className="mt-1 text-sm text-ink-400">{plan.desc}</p>

                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight text-ink-100">
                    {plan.price}
                  </span>
                  <span className="text-sm text-ink-400">{plan.period}</span>
                </div>

                <a
                  href="#"
                  className={`mt-6 flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all ${
                    plan.featured
                      ? 'bg-accent-500 text-ink-950 hover:bg-accent-400 hover:shadow-lg hover:shadow-accent-500/25'
                      : 'border border-ink-600 bg-ink-800 text-ink-100 hover:border-ink-500 hover:bg-ink-700'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>

                <ul className="mt-7 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-ink-300">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-400" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
