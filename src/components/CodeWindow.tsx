import { useEffect, useState } from 'react'

const lines = [
  { n: 1, text: 'const engineer = {', color: 'text-on-dark' },
  { n: 2, text: "  name: 'Jimy',", color: 'text-accent-amber' },
  { n: 3, text: "  role: 'Technical Lead, Back-end',", color: 'text-accent-amber' },
  { n: 4, text: "  stack: ['Node.js', 'TypeScript', 'PostgreSQL'],", color: 'text-accent-teal' },
  { n: 5, text: '  experience: 4,', color: 'text-accent-amber' },
  { n: 6, text: '  status: () => Response.ok(200),', color: 'text-on-dark' },
  { n: 7, text: '}', color: 'text-on-dark' },
]

const fullText = lines.map((l) => l.text).join('\n')

export default function CodeWindow() {
  const [typed, setTyped] = useState('')

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i += 1
      setTyped(fullText.slice(0, i))
      if (i >= fullText.length) clearInterval(interval)
    }, 18)
    return () => clearInterval(interval)
  }, [])

  const typedLines = typed.split('\n')

  return (
    <div className="relative">
      <div className="animate-floatSlow rounded-xl bg-surface-dark p-6 shadow-[0_1px_3px_rgba(20,20,19,0.08)]">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-error/70" />
          <span className="h-3 w-3 rounded-full bg-warning/70" />
          <span className="h-3 w-3 rounded-full bg-success/70" />
          <span className="ml-3 font-mono text-[12px] text-on-dark-soft">profile.ts</span>
        </div>

        <div className="code-scroll overflow-x-auto rounded-lg bg-surface-dark-soft p-4">
          <pre className="min-h-[190px] font-mono text-[13px] leading-[1.7]">
            {lines.map((line, idx) => {
              const text = typedLines[idx] ?? ''
              const isCurrentlyTyping = idx === typedLines.length - 1
              return (
                <div key={line.n} className="flex">
                  <span className="mr-4 w-4 shrink-0 select-none text-right text-muted-soft">{line.n}</span>
                  <span className={line.color}>
                    {text}
                    {isCurrentlyTyping && <span className="animate-blink text-primary">▍</span>}
                  </span>
                </div>
              )
            })}
          </pre>
        </div>

        <div className="mt-4 flex items-center justify-between rounded-md bg-surface-dark-elevated px-4 py-2 font-mono text-[12px] text-on-dark-soft">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            build passed
          </span>
          <span>node v20 · production</span>
        </div>
      </div>

      <div className="absolute -bottom-14 -left-5 hidden rounded-lg border border-hairline bg-canvas px-4 py-3 shadow-[0_1px_3px_rgba(20,20,19,0.08)] sm:block">
        <p className="font-serif text-[22px] leading-none text-ink">4+</p>
        <p className="mt-1 font-sans text-[12px] text-muted">Years of Experience</p>
      </div>
    </div>
  )
}
