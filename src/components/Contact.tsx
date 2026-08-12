import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { Reveal } from './Reveal';

const serviceOptions = [
  'Drilling Support',
  'Well Intervention',
  'Pipeline & Flowline Maintenance',
  'Inspection & NDT',
  'Equipment Rental',
  'HSE & Compliance',
  'Other',
];

const CONTACT_EMAIL = 'contact@pcp-oil.com';

export function Contact() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Quote Request — ${form.service || 'General Inquiry'} from ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Service Needed: ${form.service}`,
      '',
      'Message:',
      form.message,
    ].join('\n');
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => setSent(false), 6000);
  };

  const inputClass =
    'w-full rounded-sm border border-ink-600 bg-ink-850 px-4 py-3 text-sm text-ink-100 placeholder-ink-400 transition-all duration-300 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/50';

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-ink-950" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Reveal>
              <span className="section-label">
                <span className="h-px w-8 bg-cyan-500" />
                Get in Touch
              </span>
              <h2 className="mt-4 section-title">
                Request a <span className="text-cyan-500">Quote</span>
              </h2>
              <p className="mt-5 text-lg text-ink-300">
                Tell us about your project and our team will get back to you within 24 hours with a
                tailored proposal.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-10 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-cyan-500/30 bg-cyan-500/5">
                    <MapPin className="h-5 w-5 text-cyan-500" />
                  </div>
                  <div>
                    <div className="font-display text-sm font-semibold uppercase tracking-wide text-white">Address</div>
                    <div className="mt-1 text-sm text-ink-300">14 Industrial Park Road, Energy City</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-cyan-500/30 bg-cyan-500/5">
                    <Phone className="h-5 w-5 text-cyan-500" />
                  </div>
                  <div>
                    <div className="font-display text-sm font-semibold uppercase tracking-wide text-white">Phone</div>
                    <div className="mt-1 text-sm text-ink-300">
                      <a href="tel:+10000000000" className="transition-colors hover:text-cyan-500">+1 (000) 000-0000</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-cyan-500/30 bg-cyan-500/5">
                    <Mail className="h-5 w-5 text-cyan-500" />
                  </div>
                  <div>
                    <div className="font-display text-sm font-semibold uppercase tracking-wide text-white">Email</div>
                    <div className="mt-1 text-sm text-ink-300">
                      <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-cyan-500">{CONTACT_EMAIL}</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-cyan-500/30 bg-cyan-500/5">
                    <Clock className="h-5 w-5 text-cyan-500" />
                  </div>
                  <div>
                    <div className="font-display text-sm font-semibold uppercase tracking-wide text-white">Hours</div>
                    <div className="mt-1 text-sm text-ink-300">24/7 Operations &amp; Emergency Response</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-3">
            <Reveal delay={150}>
              <div className="rounded-sm border border-ink-700 bg-ink-900/50 p-8 lg:p-10">
                {sent && (
                  <div className="mb-6 flex items-center gap-3 rounded-sm border border-cyan-500/40 bg-cyan-500/10 px-4 py-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-500" />
                    <span className="text-sm text-cyan-100">
                      Your email client is opening with your message ready to send. Just hit send and
                      we'll get back to you within 24 hours.
                    </span>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block font-display text-xs font-semibold uppercase tracking-wide text-ink-200">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="John Doe"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="mb-2 block font-display text-xs font-semibold uppercase tracking-wide text-ink-200">
                        Company
                      </label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        placeholder="Your company"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block font-display text-xs font-semibold uppercase tracking-wide text-ink-200">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="you@company.com"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="mb-2 block font-display text-xs font-semibold uppercase tracking-wide text-ink-200">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="+1 (000) 000-0000"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block font-display text-xs font-semibold uppercase tracking-wide text-ink-200">
                      Service Needed
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => handleChange('service', e.target.value)}
                      className={inputClass}
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block font-display text-xs font-semibold uppercase tracking-wide text-ink-200">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Tell us about your project, timeline, and requirements..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Send Request
                    <Send className="h-5 w-5" />
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
