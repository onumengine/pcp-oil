import { useEffect, useRef, useState } from 'react';
import { ShieldCheck, HeartPulse, Leaf, Award, AlertTriangle, FileCheck } from 'lucide-react';
import { Reveal } from './Reveal';

const pillars = [
  { icon: ShieldCheck, title: 'Zero-Harm Goal', desc: 'Every crew member is empowered to stop work if conditions are unsafe — no exceptions.' },
  { icon: HeartPulse, title: 'Health & Wellbeing', desc: 'Comprehensive occupational health monitoring and fitness-for-duty programs for all personnel.' },
  { icon: Leaf, title: 'Environmental Stewardship', desc: 'Spill prevention, waste management, and emissions reduction across every job site.' },
  { icon: AlertTriangle, title: 'Risk Management', desc: 'Pre-job hazard analysis and job safety environments assessed before every operation.' },
  { icon: FileCheck, title: 'Compliance Assurance', desc: 'Full alignment with API, ISO 9001, ISO 45001, and local regulatory requirements.' },
  { icon: Award, title: 'Continuous Improvement', desc: 'Lessons-learned programs and regular HSE audits drive ongoing performance gains.' },
];

interface CounterProps {
  target: number;
  suffix?: string;
  label: string;
}

function Counter({ target, suffix = '', label }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const duration = 2000;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl font-bold text-cyan-500 lg:text-5xl">
        {value}
        {suffix}
      </div>
      <div className="mt-2 font-body text-xs uppercase tracking-wide text-ink-300">{label}</div>
    </div>
  );
}

export function Safety() {
  return (
    <section id="safety" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950" />
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/15973758/pexels-photo-15973758.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <span className="section-label">
              <span className="h-px w-8 bg-cyan-500" />
              Our Commitment
              <span className="h-px w-8 bg-cyan-500" />
            </span>
            <h2 className="mt-4 section-title">
              Safety &amp; <span className="text-cyan-500">HSE</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-300">
              Safety isn't a department — it's the foundation of everything we do. Our HSE culture
              protects our people, our clients' assets, and the environment.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-14 grid grid-cols-2 gap-8 rounded-sm border border-ink-700 bg-ink-900/50 px-8 py-10 lg:grid-cols-4">
            <Counter target={0} label="Lost-Time Incidents" />
            <Counter target={99} suffix="%" label="Safety Audit Score" />
            <Counter target={350} suffix="+" label="Trained Personnel" />
            <Counter target={100} suffix="%" label="Compliance Rate" />
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 100}>
              <div className="card-surface group flex h-full flex-col rounded-sm p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-cyan-500/10 border border-cyan-500/30 transition-all duration-300 group-hover:bg-cyan-500/20 group-hover:shadow-[0_0_20px_rgba(0,255,255,0.2)]">
                  <p.icon className="h-6 w-6 text-cyan-500" strokeWidth={2} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold uppercase tracking-wide text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
