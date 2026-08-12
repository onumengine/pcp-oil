import { MapPin, ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';

interface Project {
  image: string;
  name: string;
  location: string;
  scope: string;
  outcome: string;
  tag: string;
}

const projects: Project[] = [
  {
    image: 'https://images.pexels.com/photos/11139595/pexels-photo-11139595.jpeg?auto=compress&cs=tinysrgb&w=940',
    name: 'Offshore Platform Maintenance',
    location: 'North Sea',
    scope: 'Full platform inspection, maintenance, and NDT testing over a 6-week campaign.',
    outcome: 'Completed 2 days ahead of schedule with zero safety incidents.',
    tag: 'Offshore',
  },
  {
    image: 'https://images.pexels.com/photos/15970032/pexels-photo-15970032.jpeg?auto=compress&cs=tinysrgb&w=940',
    name: 'Refinery Pipeline Upgrade',
    location: 'Trzebinia, Poland',
    scope: 'Replacement of 12km of aging flowline with new corrosion-resistant piping.',
    outcome: 'Improved throughput by 18% and eliminated all leak points.',
    tag: 'Pipeline',
  },
  {
    image: 'https://images.pexels.com/photos/17668423/pexels-photo-17668423.jpeg?auto=compress&cs=tinysrgb&w=940',
    name: 'Emergency Well Intervention',
    location: 'Gulf of Mexico',
    scope: 'Rapid-response coiled tubing operation to restore production on a shut-in well.',
    outcome: 'Well brought back online within 48 hours of mobilization.',
    tag: 'Intervention',
  },
  {
    image: 'https://images.pexels.com/photos/12641124/pexels-photo-12641124.jpeg?auto=compress&cs=tinysrgb&w=940',
    name: 'Refinery Integrity Audit',
    location: 'El Dorado, Kansas',
    scope: 'Comprehensive API 510 inspection and HSE compliance audit of refinery assets.',
    outcome: '100% compliance achieved; identified $2M in preventive maintenance savings.',
    tag: 'Inspection',
  },
  {
    image: 'https://images.pexels.com/photos/31587338/pexels-photo-31587338.jpeg?auto=compress&cs=tinysrgb&w=940',
    name: 'Storage Tank Farm Construction',
    location: 'Rotterdam',
    scope: 'Installation and commissioning of 6 new crude oil storage tanks with NDT certification.',
    outcome: 'All tanks passed hydrostatic testing on first attempt.',
    tag: 'Construction',
  },
  {
    image: 'https://images.pexels.com/photos/19768241/pexels-photo-19768241.jpeg?auto=compress&cs=tinysrgb&w=940',
    name: 'Onshore Drilling Campaign',
    location: 'Port Harcourt, Nigeria',
    scope: 'Directional drilling supervision and mud logging for a 12-well development campaign.',
    outcome: 'All 12 wells reached TD ahead of schedule with zero NPT.',
    tag: 'Drilling',
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-ink-950" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <span className="section-label">
              <span className="h-px w-8 bg-cyan-500" />
              Track Record
              <span className="h-px w-8 bg-cyan-500" />
            </span>
            <h2 className="mt-4 section-title">
              Featured <span className="text-cyan-500">Projects</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-300">
              A selection of recent projects that showcase the breadth and depth of our oilfield
              capabilities.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={(i % 3) * 100}>
              <div className="card-surface group overflow-hidden rounded-sm">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent" />
                  <span className="absolute top-4 left-4 rounded-sm border border-cyan-500/40 bg-ink-950/80 px-3 py-1 font-display text-xs font-semibold uppercase tracking-wide text-cyan-500 backdrop-blur-sm">
                    {project.tag}
                  </span>
                  <ArrowUpRight className="absolute top-4 right-4 h-5 w-5 text-cyan-500 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-ink-400">
                    <MapPin className="h-4 w-4 text-cyan-500" />
                    <span className="font-body text-xs uppercase tracking-wide">{project.location}</span>
                  </div>
                  <h3 className="mt-2 font-display text-lg font-semibold uppercase tracking-wide text-white">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300">{project.scope}</p>
                  <div className="mt-4 border-t border-ink-700 pt-3">
                    <p className="text-xs leading-relaxed text-cyan-100">
                      <span className="font-semibold uppercase tracking-wide text-cyan-500">Outcome: </span>
                      {project.outcome}
                    </p>
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
