import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { profile } from '../data/profile'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
    <header
      className={`sticky top-0 z-50 bg-canvas/90 backdrop-blur transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_1px_0_0_rgba(20,20,19,0.08)]' : ''
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 font-sans text-[15px] font-semibold tracking-tight text-ink">
          <img src="/spike.svg" alt="" className="h-4 w-4" />
          {profile.name}<span className="text-primary">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-[14px] font-medium text-body transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex h-10 items-center rounded-md bg-primary px-5 font-sans text-[14px] font-medium text-on-primary transition-colors hover:bg-primary-active"
          >
            Get in Touch
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-md text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>

    {open && (
      <div className="fixed inset-0 top-16 z-40 bg-canvas px-6 pb-6 pt-4 md:hidden">
        <nav className="flex flex-col gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-3 font-sans text-[17px] font-medium text-body-strong hover:bg-surface-card"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex h-11 items-center justify-center rounded-md bg-primary px-5 font-sans text-[14px] font-medium text-on-primary"
          >
            Get in Touch
          </a>
        </nav>
      </div>
    )}
    </>
  )
}
