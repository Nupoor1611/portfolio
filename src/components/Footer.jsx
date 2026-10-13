import { profile } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer dark">
      <div className="hem" aria-hidden="true" />
      <div className="container">
        <p>&copy; {new Date().getFullYear()} {profile.name}. Built with React and Vite.</p>
      </div>
    </footer>
  )
}
