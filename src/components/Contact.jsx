import { useState } from 'react'
import { profile } from '../data.js'

export default function Contact() {
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  function onSubmit(e) {
    e.preventDefault()
    const f = new FormData(e.target)
    const name = f.get('name').trim()
    const email = f.get('email').trim()
    const message = f.get('message').trim()
    const errs = {}
    if (!name) errs.name = 'Enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(email)) errs.email = 'Enter a valid email address, like name@example.com.'
    if (message.length < 10) errs.message = 'Write at least 10 characters.'
    setErrors(errs)
    if (Object.keys(errs).length) return
    // There is no backend, so this opens the visitor's email app with the message filled in.
    // Swap it for Netlify Forms or Formspree if you want messages delivered without an email app.
    const subject = encodeURIComponent(`Portfolio message from ${name}`)
    const body = encodeURIComponent(`${message}\n\n${name} (${email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
    e.target.reset()
  }

  return (
    <section className="section section--contact dark">
      <div className="container split">
        <h2 className="section__title">Contact</h2>
        <div className="split__body contact">
          <div>
            <p className="lead">Have a project or a role in mind? Send me a message and I will reply.</p>
            <a className="contact__mail" href={`mailto:${profile.email}`}>
              {profile.email.split('@')[0]}@<wbr />{profile.email.split('@')[1]}
            </a>
            {(profile.github || profile.linkedin) && (
              <p className="links">
                {profile.github && <a href={profile.github} rel="noopener noreferrer" target="_blank">GitHub</a>}
                {profile.linkedin && <a href={profile.linkedin} rel="noopener noreferrer" target="_blank">LinkedIn</a>}
              </p>
            )}
          </div>
          <form onSubmit={onSubmit} noValidate className="form">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-err' : undefined} />
              {errors.name && <span id="name-err" className="error">{errors.name}</span>}
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" inputMode="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-err' : undefined} />
              {errors.email && <span id="email-err" className="error">{errors.email}</span>}
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-err' : undefined} />
              {errors.message && <span id="message-err" className="error">{errors.message}</span>}
            </div>
            <button className="btn" type="submit">Send message</button>
            {sent && <p role="status" className="ok">Opening your email app with the message ready to send.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
