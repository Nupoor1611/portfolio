import { useEffect, useState } from 'react'
import { profile } from '../data.js'

const links = ['about', 'projects', 'skills', 'resume', 'contact']

export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  // Highlight the link of the section that is currently in view.
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    links.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  // Close the mobile menu with Escape, and stop the page scrolling behind it.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  // If the window grows past the mobile breakpoint, close the menu.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 821px)')
    const onChange = () => mq.matches && setOpen(false)
    mq.addEventListener?.('change', onChange)
    return () => mq.removeEventListener?.('change', onChange)
  }, [])

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="logo" onClick={() => setOpen(false)}>
          {profile.name.split(' ')[0]}
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
        <nav id="nav" className={open ? 'nav is-open' : 'nav'} aria-label="Main">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l}`}
              className={active === l ? 'is-active' : undefined}
              aria-current={active === l ? 'true' : undefined}
              onClick={() => setOpen(false)}
            >
              {l[0].toUpperCase() + l.slice(1)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
