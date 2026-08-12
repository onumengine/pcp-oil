import { useState } from 'react';
import {
  Drill,
  Wrench,
  GitBranch,
  ScanEye,
  Package,
  ShieldCheck,
  ChevronDown,
  Check,
} from 'lucide-react';
import { Reveal } from './Reveal';

interface Service {
  icon: typeof Drill;
  title: string;
  short: string;
  details: string[];
  image: string;
}

const services: Service[] = [
  {
    icon: Drill,
    title: 'Drilling Support',
    short: 'Full-spectrum drilling assistance from spud to completion with experienced crews and modern rig equipment.',
    details: [
      'Directional and horizontal drilling supervision',
      'Mud logging and real-time data monitoring',
      'Casing and cementing operations',
      'BHA design and optimization',
      'Rig move coordination and logistics',
    ],
    image: 'https://images.pexels.com/photos/15961091/pexels-photo-15961091.jpeg?auto=compress&cs=tinysrgb&w=940',
  },
  {
    icon: Wrench,
    title: 'Well Intervention',
    short: 'Restore and enhance well productivity with safe, targeted intervention services for any well condition.',
    details: [
      'Coiled tubing and wireline operations',
      'Slickline services and pressure control',
      'Acidizing and stimulation treatments',
      'Zonal isolation and water shut-off',
      'Wellbore cleanout and fishing',
    ],
    image: 'https://images.pexels.com/photos/5884386/pexels-photo-5884386.jpeg?auto=compress&cs=tinysrgb&w=940',
  },
  {
    icon: GitBranch,
    title: 'Pipeline & Flowline Maintenance',
    short: 'Keep your pipelines flowing safely with preventive maintenance, cleaning, and integrity management.',
    details: [
      'Pipeline pigging and cleaning operations',
      'Flowline installation and tie-ins',
      'Corrosion monitoring and mitigation',
      'Leak detection and repair',
      'Hydrostatic testing and commissioning',
    ],
    image: 'https://images.pexels.com/photos/36825977/pexels-photo-36825977.jpeg?auto=compress&cs=tinysrgb&w=940',
  },
  {
    icon: ScanEye,
    title: 'Inspection & NDT',
    short: 'Certified non-destructive testing and inspection to ensure asset integrity and regulatory compliance.',
    details: [
      'Ultrasonic, radiographic, and magnetic particle testing',
      'Pipeline and storage tank inspection',
      'Weld inspection and certification',
      'Thickness measurement and mapping',
      'API 510/570/653 inspections',
    ],
    image: 'https://images.pexels.com/photos/15970028/pexels-photo-15970028.jpeg?auto=compress&cs=tinysrgb&w=940',
  },
  {
    icon: Package,
    title: 'Equipment Rental',
    short: 'Reliable, well-maintained oilfield equipment available for short-term and long-term rental.',
    details: [
      'BOP stacks and wellhead equipment',
      'Pumps, generators, and compressors',
      'Tanks and separators',
      'Pipe handling and rig floor tools',
      'Custom equipment packages on request',
    ],
    image: 'https://images.pexels.com/photos/6060192/pexels-photo-6060192.jpeg?auto=compress&cs=tinysrgb&w=940',
  },
  {
    icon: ShieldCheck,
    title: 'HSE & Compliance',
    short: 'Comprehensive health, safety, and environmental services to keep your operations audit-ready.',
    details: [
      'HSE program development and auditing',
      'Permit-to-work systems and management',
      'Environmental impact assessments',
      'Safety training and competency verification',
      'Regulatory compliance consulting',
    ],
    image: 'https://images.pexels.com/photos/37589838/pexels-photo-37589838.jpeg?auto=compress&cs=tinysrgb&w=940',
  },
];

export function Services() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <span className="section-label">
              <span className="h-px w-8 bg-cyan-500" />
              What We Do
              <span className="h-px w-8 bg-cyan-500" />
            </span>
            <h2 className="mt-4 section-title">
              Our <span className="text-cyan-500">Services</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-300">
              From the wellhead to the pipeline, PCP Oil Services covers every stage of your
              operation with certified expertise and an unwavering commitment to safety.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 100}>
              <div
                className="card-surface group relative flex h-full flex-col overflow-hidden rounded-sm"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/50 to-transparent" />
                  <div className="absolute bottom-3 left-4 flex h-11 w-11 items-center justify-center rounded-sm border border-cyan-500/40 bg-ink-950/80 backdrop-blur-sm">
                    <service.icon className="h-5 w-5 text-cyan-500" strokeWidth={2} />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300">{service.short}</p>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      expanded === i ? 'mt-4 max-h-80' : 'max-h-0'
                    }`}
                  >
                    <ul className="space-y-2 border-t border-ink-700 pt-4">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2 text-sm text-ink-200">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => setExpanded(expanded === i ? null : i)}
                    className="mt-4 flex items-center gap-1.5 font-display text-sm font-semibold uppercase tracking-wide text-cyan-500 transition-colors hover:text-cyan-400"
                  >
                    {expanded === i ? 'Show Less' : 'Learn More'}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        expanded === i ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
