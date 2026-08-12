import { Quote } from 'lucide-react';
import { Reveal } from './Reveal';

const testimonials = [
  {
    quote:
      'PCP Oil Services mobilized faster than any contractor we have worked with. Their crew was professional, safety-conscious, and got the job done ahead of schedule.',
    author: 'James Whitfield',
    role: 'Operations Director',
    company: 'Northstar Energy',
  },
  {
    quote:
      'The level of expertise in well intervention is exceptional. They diagnosed and resolved a complex issue that two previous contractors could not.',
    author: 'Sarah Okonkwo',
    role: 'Well Services Manager',
    company: 'Delta Petroleum',
  },
  {
    quote:
      'Their HSE culture is second to none. On every project they have run for us, there has not been a single recordable incident. That is remarkable.',
    author: 'Michael Larsen',
    role: 'HSE Vice President',
    company: 'Boreal Oil & Gas',
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <span className="section-label">
              <span className="h-px w-8 bg-cyan-500" />
              Client Voices
              <span className="h-px w-8 bg-cyan-500" />
            </span>
            <h2 className="mt-4 section-title">
              What <span className="text-cyan-500">Clients Say</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 100}>
              <div className="card-surface flex h-full flex-col rounded-sm p-8">
                <Quote className="h-8 w-8 text-cyan-500/40" />
                <p className="mt-4 flex-1 text-base leading-relaxed text-ink-100">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-ink-700 pt-5">
                  <div className="font-display text-base font-semibold uppercase tracking-wide text-white">
                    {t.author}
                  </div>
                  <div className="mt-1 text-sm text-cyan-500">{t.role}</div>
                  <div className="text-xs text-ink-400">{t.company}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
