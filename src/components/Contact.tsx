import { Mail, Phone } from 'lucide-react'
import { profile } from '../data/profile'
import Reveal from './Reveal'
import LinkedinIcon from './icons/LinkedinIcon'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1200px] px-6 pb-section-sm md:pb-section">
      <Reveal>
        <div className="rounded-lg bg-primary px-8 py-14 text-center md:px-16 md:py-16">
          <h2 className="font-serif text-[32px] font-medium leading-[1.15] tracking-display text-on-primary md:text-[44px]">
            Let's build the next system together.
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] font-sans text-[16px] leading-relaxed text-on-primary/85">
            Open to full-time roles, technical collaborations, and freelance backend & system architecture projects.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex h-11 items-center gap-2 rounded-md bg-canvas px-6 font-sans text-[14px] font-medium text-ink transition-colors hover:bg-surface-card"
            >
              <Mail size={16} />
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/[\s-]/g, '')}`}
              className="inline-flex h-11 items-center gap-2 rounded-md bg-primary-active px-6 font-sans text-[14px] font-medium text-on-primary transition-colors hover:bg-primary-active/80"
            >
              <Phone size={16} />
              {profile.phone}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-primary-active px-6 font-sans text-[14px] font-medium text-on-primary transition-colors hover:bg-primary-active/80"
            >
              <LinkedinIcon size={16} />
              {profile.linkedinLabel}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
