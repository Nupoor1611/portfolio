import { profile } from '../data.js'

export default function About() {
  return (
    <section className="section">
      <div className="container split">
        <h2 className="section__title">About me</h2>
        <div className="split__body">
          <div className="prose">
            {profile.about.map((p, i) => <p key={i} className={i === 0 ? 'lead' : undefined}>{p}</p>)}
          </div>
          <dl className="facts">
            {profile.facts.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
