import { projects, academicProjects } from '../data.js'

function Tags({ tags }) {
  return (
    <ul className="tags" aria-label="Technologies">
      {tags.map((t) => <li key={t}>{t}</li>)}
    </ul>
  )
}

function Links({ live, code }) {
  if (!live && !code) return null
  return (
    <p className="links">
      {live && <a href={live}>Live demo</a>}
      {code && <a href={code}>Source code</a>}
    </p>
  )
}

export default function Projects() {
  const [featured, ...rest] = projects
  return (
    <section className="section section--wash">
      <div className="container">
        <h2 className="section__title">Projects</h2>

        <article className="feature">
          <div className="art">
            <img src={featured.image} alt={`Illustration for ${featured.title}`} width="800" height="600" loading="lazy" decoding="async" />
          </div>
          <div className="feature__body">
            <p className="kind">{featured.kind}</p>
            <h3>{featured.title}</h3>
            <p>{featured.description}</p>
            <Tags tags={featured.tags} />
            <Links live={featured.live} code={featured.code} />
          </div>
        </article>

        <ul className="rows">
          {rest.map((p) => (
            <li className="row" key={p.title}>
              <div className="art">
                <img src={p.image} alt={`Illustration for ${p.title}`} width="800" height="600" loading="lazy" decoding="async" />
              </div>
              <div className="row__body">
                <p className="kind">{p.kind}</p>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <Tags tags={p.tags} />
                <Links live={p.live} code={p.code} />
              </div>
            </li>
          ))}
        </ul>

        <h3 className="subhead">Academic projects</h3>
        <dl className="mini">
          {academicProjects.map(([title, when, text]) => (
            <div key={title}>
              <dt>{title}</dt>
              <dd className="kind">{when}</dd>
              <dd>{text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
