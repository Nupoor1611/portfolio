import { profile } from '../data.js'

export default function Hero() {
  const [first, ...rest] = profile.name.split(' ')
  return (
    <section id="top" className="hero dark">
      <div className="hero__weave" aria-hidden="true" />
      <div className="container hero__inner">
        <p className="hero__role">{profile.title} in {profile.city}</p>
        <h1 className="hero__name">
          <span>{first}</span>
          <span>{rest.join(' ')}</span>
        </h1>
        <p className="hero__intro">{profile.tagline}</p>
        <div className="hero__cta">
          <a className="btn" href="#projects">See my projects</a>
          <a className="btn btn--outline" href="#contact">Send a message</a>
        </div>
      </div>
    </section>
  )
}
