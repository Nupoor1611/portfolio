import { experience, education, certifications } from '../data.js'

export default function Resume() {
  return (
    <section className="section section--wash">
      <div className="container split">
        <h2 className="section__title">Resume</h2>
        <div className="split__body">
          <h3 className="subhead subhead--first">Experience</h3>
          <ol className="timeline">
            {experience.map((e) => (
              <li key={e.role + e.period}>
                <p className="timeline__when">{e.period}</p>
                <h4>{e.role}</h4>
                <p className="timeline__org">{e.org}</p>
                <ul className="points">
                  {e.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </li>
            ))}
          </ol>

          <div className="resume__pair">
            <div>
              <h3 className="subhead">Education</h3>
              {education.map((e) => (
                <div key={e.role}>
                  <h4>{e.role}</h4>
                  <p className="timeline__org">{e.org}</p>
                  <p className="timeline__when">{e.period}</p>
                </div>
              ))}
            </div>
            <div>
              <h3 className="subhead">Certifications and workshops</h3>
              <ul className="points">
                {certifications.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
