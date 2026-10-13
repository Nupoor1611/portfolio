import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'

// Below-the-fold sections are split into separate chunks.
const About = lazy(() => import('./components/About.jsx'))
const Projects = lazy(() => import('./components/Projects.jsx'))
const Skills = lazy(() => import('./components/Skills.jsx'))
const Resume = lazy(() => import('./components/Resume.jsx'))
const Contact = lazy(() => import('./components/Contact.jsx'))

const SECTION_IDS = ['about', 'projects', 'skills', 'resume', 'contact']
const MOUNT_ALL = 'portfolio:mount-all'

// Renders its children only once the placeholder scrolls near the viewport.
// It also mounts early when a jump link asks for every section (see useAnchorJumps).
function LazySection({ id, children, minHeight = 320 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const show = () => setVisible(true)
    window.addEventListener(MOUNT_ALL, show)
    if (!('IntersectionObserver' in window)) {
      show()
      return () => window.removeEventListener(MOUNT_ALL, show)
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show()
          io.disconnect()
        }
      },
      { rootMargin: '300px' }
    )
    io.observe(ref.current)
    return () => {
      io.disconnect()
      window.removeEventListener(MOUNT_ALL, show)
    }
  }, [])

  return (
    <div id={id} ref={ref} style={visible ? undefined : { minHeight }}>
      {visible && (
        <Suspense fallback={<div className="loading" role="status">Loading…</div>}>
          {children}
        </Suspense>
      )}
    </div>
  )
}

// Jump links (#contact and so on) would otherwise land in the wrong place: the sections above
// the target are still short placeholders, and they grow as they load. So a jump first loads
// every section, waits for the layout to settle, and then scrolls to the target.
function useAnchorJumps() {
  useEffect(() => {
    const allMounted = () =>
      SECTION_IDS.every((id) => document.getElementById(id)?.querySelector('section'))

    const jumpTo = (id, smooth) => {
      window.dispatchEvent(new Event(MOUNT_ALL))
      const started = performance.now()
      const tick = () => {
        if (!allMounted() && performance.now() - started < 3000) {
          requestAnimationFrame(tick)
          return
        }
        // Two frames let the browser finish laying out what just mounted.
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' })
          })
        )
      }
      requestAnimationFrame(tick)
    }

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const link = e.target.closest?.('a[href^="#"]')
      const id = link?.getAttribute('href').slice(1)
      if (!id || !SECTION_IDS.includes(id)) return
      e.preventDefault()
      history.pushState(null, '', `#${id}`)
      jumpTo(id, !reduced)
    }

    document.addEventListener('click', onClick)

    // Opening the page at an address like /#contact
    const initial = window.location.hash.slice(1)
    if (SECTION_IDS.includes(initial)) jumpTo(initial, false)

    return () => document.removeEventListener('click', onClick)
  }, [])
}

export default function App() {
  useAnchorJumps()
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <LazySection id="about"><About /></LazySection>
        <LazySection id="projects" minHeight={500}><Projects /></LazySection>
        <LazySection id="skills"><Skills /></LazySection>
        <LazySection id="resume"><Resume /></LazySection>
        <LazySection id="contact"><Contact /></LazySection>
      </main>
      <Footer />
    </>
  )
}
