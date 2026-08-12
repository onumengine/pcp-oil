import { Droplet, MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-ink-700 bg-ink-950">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-cyan-500/10 border border-cyan-500/40">
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
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-300">
              Delivering safe, reliable oilfield services across the region. Certified crews,
              modern equipment, zero-incident culture.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-cyan-500">
              Services
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-ink-300">
              <li><a href="#services" className="transition-colors hover:text-cyan-500">Drilling Support</a></li>
              <li><a href="#services" className="transition-colors hover:text-cyan-500">Well Intervention</a></li>
              <li><a href="#services" className="transition-colors hover:text-cyan-500">Pipeline Maintenance</a></li>
              <li><a href="#services" className="transition-colors hover:text-cyan-500">Inspection & NDT</a></li>
              <li><a href="#services" className="transition-colors hover:text-cyan-500">Equipment Rental</a></li>
              <li><a href="#services" className="transition-colors hover:text-cyan-500">HSE & Compliance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-cyan-500">
              Company
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-ink-300">
              <li><a href="#about" className="transition-colors hover:text-cyan-500">About Us</a></li>
              <li><a href="#safety" className="transition-colors hover:text-cyan-500">Safety & HSE</a></li>
              <li><a href="#projects" className="transition-colors hover:text-cyan-500">Projects</a></li>
              <li><a href="#contact" className="transition-colors hover:text-cyan-500">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-cyan-500">
              Get in Touch
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-ink-300">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
                <span>14 Industrial Park Road, Energy City</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-cyan-500" />
                <a href="tel:+10000000000" className="transition-colors hover:text-cyan-500">+1 (000) 000-0000</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-cyan-500" />
                <a href="mailto:contact@pcp-oil.com" className="transition-colors hover:text-cyan-500">contact@pcp-oil.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
                <span>24/7 Operations &amp; Response</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink-700 pt-8 md:flex-row">
          <p className="text-xs text-ink-400">
            &copy; {new Date().getFullYear()} PCP Oil Services. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-ink-400">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-500" />
              ISO 9001 Certified
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-500" />
              API Q2 Licensed
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-500" />
              ISO 45001
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
