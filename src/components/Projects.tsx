import { FolderGit2 } from 'lucide-react'
import { projects } from '../data/profile'
import Reveal from './Reveal'

const MIN_SLOTS = 4
const placeholderCount = Math.max(MIN_SLOTS - projects.length, 0)
const placeholders = Array.from({ length: placeholderCount }, (_, i) => i + 1)

export default function Projects() {
  return (
    <section id="projects" className="bg-surface-soft py-section-sm md:py-section">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <span className="font-sans text-[13px] font-medium uppercase tracking-[1.5px] text-primary">Projects</span>
          <h2 className="mt-4 font-serif text-[32px] font-medium leading-[1.15] tracking-display text-ink md:text-[40px]">
            Project Case Studies
          </h2>
          <p className="mt-4 max-w-[560px] font-sans text-[16px] leading-relaxed text-body">
            A selection of products and systems I&apos;ve built or led.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {projects.map((project, idx) => (
            <Reveal key={project.name} delay={((idx % 4) + 1) as 1 | 2 | 3 | 4}>
              <div className="group flex h-full flex-col overflow-hidden rounded-lg border border-hairline bg-canvas transition-transform duration-300 hover:-translate-y-1">
                <div className="aspect-[16/10] w-full overflow-hidden bg-surface-card p-3">
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    className="h-full w-full rounded-md object-contain object-center transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-sans text-[17px] font-medium text-ink">{project.name}</h3>
                  <p className="mt-1 font-sans text-[13px] font-medium text-primary">{project.tagline}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-pill bg-surface-card px-3 py-1 font-sans text-[12px] font-medium text-body-strong"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 font-sans text-[14px] leading-relaxed text-body">{project.summary}</p>
                  <div className="mt-4 space-y-1.5 border-t border-hairline pt-4">
                    <p className="font-sans text-[13px] leading-relaxed text-body">
                      <span className="font-medium text-ink">Role:</span> {project.role}
                    </p>
                    <p className="font-sans text-[13px] leading-relaxed text-body">
                      <span className="font-medium text-ink">Contribution:</span> {project.contribution}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}

          {placeholders.map((n, idx) => (
            <Reveal key={`placeholder-${n}`} delay={(((projects.length + idx) % 4) + 1) as 1 | 2 | 3 | 4}>
              <div className="flex h-full min-h-[220px] flex-col items-start justify-between rounded-lg border border-dashed border-hairline bg-canvas/60 p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-surface-card text-muted">
                  <FolderGit2 size={20} />
                </div>
                <div>
                  <p className="font-sans text-[15px] font-medium text-muted">Project {projects.length + n}</p>
                  <p className="mt-1 font-sans text-[13px] text-muted-soft">Details coming soon</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
