import { ArrowRight, Download, MapPin } from 'lucide-react'
import { profile } from '../data/profile'
import Reveal from './Reveal'
import CodeWindow from './CodeWindow'

export default function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-[1200px] gap-16 overflow-x-hidden px-6 pb-section-sm pt-16 md:grid-cols-2 md:items-center md:pt-24">
      <div className="min-w-0">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-pill bg-surface-card px-3 py-1 font-sans text-[13px] font-medium text-body-strong">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            Open to new opportunities
          </span>
        </Reveal>

        <Reveal delay={1}>
          <h1 className="mt-6 font-serif text-[42px] font-medium leading-[1.08] tracking-display text-ink sm:text-[56px] md:text-[64px]">
            Building backend systems that are scalable, secure, and production-ready.
          </h1>
        </Reveal>

        <Reveal delay={2}>
          <p className="mt-6 max-w-[520px] font-sans text-[17px] leading-relaxed text-body">
            Hi, I'm <span className="font-medium text-ink">{profile.name}</span> — {profile.role}. {profile.yearsExperience} years designing and scaling backend systems across government, financial services, and HRIS with Node.js, TypeScript, and PostgreSQL.
          </p>
        </Reveal>

        <Reveal delay={3}>
          <div className="mt-4 flex items-center gap-2 font-sans text-[14px] text-muted">
            <MapPin size={15} />
            {profile.location}
          </div>
        </Reveal>

        <Reveal delay={4}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#experience"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-6 font-sans text-[14px] font-medium text-on-primary transition-colors hover:bg-primary-active"
            >
              View Experience
              <ArrowRight size={16} />
            </a>
            <a
              href="/CV_Jimy_2026.pdf"
              download
              className="inline-flex h-11 items-center gap-2 rounded-md border border-hairline bg-canvas px-6 font-sans text-[14px] font-medium text-ink transition-colors hover:bg-surface-card"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={2} className="relative min-w-0">
        <div className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
        <CodeWindow />
      </Reveal>
    </section>
  )
}
