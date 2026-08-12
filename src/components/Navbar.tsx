import { useEffect, useState } from 'react';
import { Menu, X, Droplet } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Safety', href: '#safety' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-950/95 backdrop-blur-md border-b border-ink-700 shadow-lg shadow-ink-950/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-cyan-500/10 border border-cyan-500/40 transition-all duration-300 group-hover:bg-cyan-500/20 group-hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]">
            <Droplet className="h-5 w-5 text-cyan-500" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-xl font-bold uppercase tracking-wide text-white">
              PCP
            </span>
            <span className="font-display text-[10px] font-medium uppercase tracking-[0.25em] text-cyan-500">
              Oil Services
            </span>
          </div>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative font-body text-sm font-medium text-ink-100 transition-colors duration-300 hover:text-cyan-500 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-cyan-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden lg:inline-flex btn-primary !px-5 !py-2.5 !text-sm">
          Request a Quote
        </a>

        <button
          className="flex h-10 w-10 items-center justify-center text-ink-100 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-ink-700 bg-ink-950/98 backdrop-blur-md transition-all duration-500 lg:hidden ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-body text-base font-medium text-ink-100 transition-colors hover:text-cyan-500"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              Request a Quote
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
