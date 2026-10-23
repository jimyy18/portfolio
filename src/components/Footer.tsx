import { profile } from '../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface-dark py-10">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <a href="#top" className="flex items-center gap-2 font-sans text-[14px] font-medium text-on-dark">
          <img src="/spike.svg" alt="" className="h-3.5 w-3.5" />
          {profile.name}
        </a>
        <p className="font-sans text-[13px] text-on-dark-soft">
          © {year} {profile.name}.
        </p>
      </div>
    </footer>
  )
}
