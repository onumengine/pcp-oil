import { ArrowRight, ShieldCheck, Award, Users, HardHat } from 'lucide-react';
import { Reveal } from './Reveal';

const stats = [
  { icon: Award, value: '25+', label: 'Years in Operation' },
  { icon: HardHat, value: '1,200+', label: 'Projects Completed' },
  { icon: ShieldCheck, value: '0', label: 'Lost-Time Incidents' },
  { icon: Users, value: '350+', label: 'Certified Crew' },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center animate-slow-zoom"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3192662/pexels-photo-3192662.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/60" />

      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-8 lg:pt-40">
        <div className="max-w-3xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-sm border border-cyan-500/30 bg-cyan-500/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
              <span className="font-display text-sm font-medium uppercase tracking-[0.2em] text-cyan-100">
                24/7 Oilfield Operations
              </span>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <h1 className="mt-6 font-display text-5xl font-bold uppercase leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              Safe, Reliable
              <br />
              <span className="text-cyan-500">Oilfield Services</span>
              <br />
              Delivered Right
            </h1>
          </Reveal>

          <Reveal delay={300}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-200">
              PCP Oil Services provides end-to-end drilling support, well intervention, and
              pipeline maintenance backed by certified crews, a modern fleet, and an uncompromising
              safety culture.
            </p>
          </Reveal>

          <Reveal delay={450}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="btn-primary">
                Request a Quote
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#services" className="btn-outline">
                Our Services
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t border-ink-700 bg-ink-950/90 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-ink-700 px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <div className="flex flex-col items-center gap-2 py-6 text-center lg:flex-row lg:gap-4 lg:text-left">
                <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-cyan-500/30 bg-cyan-500/5">
                  <stat.icon className="h-5 w-5 text-cyan-500" strokeWidth={2} />
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-white lg:text-3xl">
                    {stat.value}
                  </div>
                  <div className="font-body text-xs uppercase tracking-wide text-ink-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
