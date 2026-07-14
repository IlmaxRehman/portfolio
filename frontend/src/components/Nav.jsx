const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'credentials', label: 'Credentials' },
]

export default function Nav() {
  return (
    <nav className="topnav">
      <div className="inner">
        <button className="brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ilma<span>.</span>rehman
        </button>
        <ul className="navlinks">
          {links.map((l) => (
            <li key={l.id}><button onClick={() => scrollTo(l.id)}>{l.label}</button></li>
          ))}
        </ul>
        <button className="nav-cta" onClick={() => scrollTo('contact')}>Get In Touch</button>
      </div>
    </nav>
  )
}
