import { Briefcase } from 'lucide-react'
import { experience } from '../data/profile'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <section id="experience" className="bg-surface-dark py-section-sm md:py-section">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <span className="font-sans text-[13px] font-medium uppercase tracking-[1.5px] text-accent-amber">Career History</span>
          <h2 className="mt-4 font-serif text-[32px] font-medium leading-[1.15] tracking-display text-on-dark md:text-[40px]">
            Professional Experience
          </h2>
        </Reveal>

        <div className="mt-14 space-y-6">
          {experience.map((job, idx) => (
            <Reveal key={job.company} delay={((idx % 4) + 1) as 1 | 2 | 3 | 4}>
              <div className="group rounded-lg bg-surface-dark-elevated p-6 transition-colors hover:bg-surface-dark-soft md:p-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-8">
                  <div className="flex gap-4">
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-surface-dark text-primary">
                      <Briefcase size={18} />
                    </div>
                    <div>
                      <h3 className="font-sans text-[18px] font-medium text-on-dark">{job.role}</h3>
                      <p className="mt-1 font-sans text-[15px] text-on-dark-soft">{job.company}</p>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center gap-3 md:flex-col md:items-end md:gap-1">
                    <span className="inline-flex items-center gap-2 rounded-pill bg-surface-dark px-3 py-1 font-sans text-[12px] font-medium text-on-dark-soft">
                      {job.current && <span className="h-1.5 w-1.5 rounded-full bg-success" />}
                      {job.period}
                    </span>
                    <span className="font-sans text-[13px] text-on-dark-soft">{job.location}</span>
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5 pl-14">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="relative font-sans text-[14.5px] leading-relaxed text-on-dark-soft">
                      <span className="absolute -left-4 top-[10px] h-1 w-1 rounded-full bg-primary" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
