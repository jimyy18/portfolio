import { Award, GraduationCap } from 'lucide-react'
import { certifications, education } from '../data/profile'
import Reveal from './Reveal'

export default function Credentials() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-section-sm md:py-section">
      <div className="grid gap-5 md:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-lg border border-hairline bg-canvas p-7 md:p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-surface-card text-primary">
              <Award size={20} />
            </div>
            <h3 className="mt-5 font-sans text-[16px] font-medium text-ink">Certifications</h3>
            <div className="mt-4 space-y-3">
              {certifications.map((cert) => (
                <div key={cert.title}>
                  <p className="font-sans text-[15px] font-medium text-body-strong">{cert.title}</p>
                  <p className="mt-0.5 font-sans text-[13.5px] text-muted">
                    {cert.issuer} · {cert.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="h-full rounded-lg border border-hairline bg-canvas p-7 md:p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-surface-card text-primary">
              <GraduationCap size={20} />
            </div>
            <h3 className="mt-5 font-sans text-[16px] font-medium text-ink">Education</h3>
            <div className="mt-4 space-y-3">
              {education.map((edu) => (
                <div key={edu.degree}>
                  <p className="font-sans text-[15px] font-medium text-body-strong">{edu.degree}</p>
                  <p className="mt-0.5 font-sans text-[13.5px] text-muted">
                    {edu.school} · {edu.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
