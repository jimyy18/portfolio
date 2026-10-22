import { coreCompetencies, skillGroups } from '../data/profile'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-[1200px] px-6 py-section-sm md:py-section">
      <Reveal>
        <span className="font-sans text-[13px] font-medium uppercase tracking-[1.5px] text-primary">Skills</span>
        <h2 className="mt-4 max-w-[560px] font-serif text-[32px] font-medium leading-[1.15] tracking-display text-ink md:text-[40px]">
          Tools and technologies used day to day.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, idx) => (
          <Reveal key={group.label} delay={((idx % 4) + 1) as 1 | 2 | 3 | 4}>
            <div className="h-full rounded-lg bg-surface-card p-7 transition-transform duration-300 hover:-translate-y-1">
              <h3 className="font-sans text-[16px] font-medium text-ink">{group.label}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-pill bg-canvas px-3 py-1 font-sans text-[13px] font-medium text-body-strong"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={2}>
        <div className="mt-6 rounded-lg bg-primary p-7 md:p-8">
          <h3 className="font-sans text-[16px] font-medium text-on-primary">Core Competencies</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {coreCompetencies.map((item) => (
              <span
                key={item}
                className="rounded-pill bg-white/15 px-3 py-1 font-sans text-[13px] font-medium text-on-primary"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
