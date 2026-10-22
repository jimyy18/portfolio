import { profile, stats } from '../data/profile'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1200px] px-6 py-section-sm md:py-section">
      <div className="grid gap-12 md:grid-cols-[1fr_1.3fr] md:gap-16">
        <Reveal>
          <span className="font-sans text-[13px] font-medium uppercase tracking-[1.5px] text-primary">About Me</span>
          <h2 className="mt-4 font-serif text-[32px] font-medium leading-[1.15] tracking-display text-ink md:text-[40px]">
            From HRIS platforms to national-scale data integration.
          </h2>
        </Reveal>

        <div>
          <Reveal>
            <div className="space-y-4">
              {profile.summaryParagraphs.map((paragraph) => (
                <p key={paragraph} className="font-sans text-[17px] leading-relaxed text-body">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat, idx) => (
              <Reveal key={stat.label} delay={((idx % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="rounded-lg bg-surface-card p-5">
                  <p className="font-serif text-[28px] leading-none text-ink">{stat.value}</p>
                  <p className="mt-2 font-sans text-[13px] text-muted">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
