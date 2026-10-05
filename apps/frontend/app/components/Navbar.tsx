'use client'
import { useEffect, useState } from 'react';
import { Menu, X, SquareTerminal } from 'lucide-react';
import { Logo } from './Logo';

const links = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Network', href: '#network' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: '#docs' },
];


export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Logo />

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-300 transition-colors hover:text-accent-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#"
            className="flex items-center gap-2 text-sm font-medium text-ink-300 transition-colors hover:text-ink-100"
          >
            <SquareTerminal className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="#pricing"
            className="rounded-lg bg-accent-500 px-4 py-2 text-sm font-semibold text-ink-950 transition-all hover:bg-accent-400 hover:shadow-lg hover:shadow-accent-500/30"
          >
            Launch Dashboard
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-ink-200 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="glass border-t border-ink-700/50 px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-ink-300 hover:text-accent-400"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              className="rounded-lg bg-accent-500 px-4 py-2 text-center text-sm font-semibold text-ink-950"
            >
              Launch Dashboard
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
