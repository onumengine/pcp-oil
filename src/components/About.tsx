import { ShieldCheck, Clock, Users, Truck, Check } from 'lucide-react';
import { Reveal } from './Reveal';

const features = [
  { icon: ShieldCheck, title: 'Safety-First Culture', desc: 'Zero-incident philosophy embedded in every operation and crew member.' },
  { icon: Users, title: 'Certified Technicians', desc: 'API, ISO, and IRATA-certified crews with decades of combined field experience.' },
  { icon: Clock, title: '24/7 Rapid Response', desc: 'Round-the-clock mobilization for emergency and scheduled operations alike.' },
  { icon: Truck, title: 'Modern Fleet', desc: 'Continuously upgraded equipment fleet maintained to OEM specifications.' },
];

const milestones = [
  'Founded with a mission to make oilfield operations safer and more efficient',
  'Expanded from drilling support to full-service intervention and maintenance',
  'Built a 350+ certified workforce serving onshore and offshore projects',
  'Achieved zero lost-time incidents across 1,200+ completed projects',
];

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-ink-950" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="relative overflow-hidden rounded-sm">
                <img
                  src="https://images.pexels.com/photos/37589838/pexels-photo-37589838.jpeg?auto=compress&cs=tinysrgb&w=940"
                  alt="PCP Oil Services engineers at work"
                  className="w-full h-[520px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden md:block">
                <div className="rounded-sm border border-cyan-500/30 bg-ink-900/95 px-8 py-6 shadow-xl shadow-ink-950/50 backdrop-blur-md">
                  <div className="font-display text-4xl font-bold text-cyan-500">25+</div>
                  <div className="mt-1 font-body text-sm uppercase tracking-wide text-ink-200">
                    Years of Excellence
                  </div>
                </div>
              </div>
              <div className="absolute -left-4 -top-4 -z-10 h-full w-full rounded-sm border border-cyan-500/20" />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="section-label">
                <span className="h-px w-8 bg-cyan-500" />
                Who We Are
              </span>
              <h2 className="mt-4 section-title">
                About <span className="text-cyan-500">PCP Oil</span> Services
              </h2>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-6 text-lg leading-relaxed text-ink-200">
                For over two decades, PCP Oil Services has been a trusted partner to operators
                across the region. We combine deep technical expertise with an uncompromising
                safety culture to deliver oilfield services that operators can rely on — every
                well, every pipeline, every time.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <ul className="mt-8 space-y-4">
                {milestones.map((m) => (
                  <li key={m} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/15 border border-cyan-500/40">
                      <Check className="h-3 w-3 text-cyan-500" strokeWidth={3} />
                    </div>
                    <span className="text-sm leading-relaxed text-ink-200">{m}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={450}>
              <div className="mt-10 grid grid-cols-2 gap-4">
                {features.map((f) => (
                  <div
                    key={f.title}
                    className="card-surface rounded-sm p-5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-cyan-500/10 border border-cyan-500/30">
                      <f.icon className="h-5 w-5 text-cyan-500" strokeWidth={2} />
                    </div>
                    <h4 className="mt-3 font-display text-sm font-semibold uppercase tracking-wide text-white">
                      {f.title}
                    </h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink-300">{f.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
