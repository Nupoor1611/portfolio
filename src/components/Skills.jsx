import { skills } from '../data.js'

export default function Skills() {
  return (
    <section className="section">
      <div className="container split">
        <h2 className="section__title">Skills</h2>
        <div className="split__body skills">
          {skills.map((g) => (
            <div className="skills__group" key={g.group}>
              <h3>{g.group}</h3>
              <ul className="chips">
                {g.items.map((name) => <li key={name}>{name}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
