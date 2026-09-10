export function Header() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="topbar">
      <div className="brand-block">
        <span className="brand-mark">MM</span>
        <div>
          <p className="brand-name">Madison Morrow</p>
          <p className="brand-role">Theatre Producer</p>
        </div>
      </div>

      <nav className="main-nav" aria-label="Main navigation">
        <button type="button" onClick={() => scrollTo('about')}>About</button>
        <button type="button" onClick={() => scrollTo('work')}>Work</button>
        <button type="button" onClick={() => scrollTo('contact')}>Contact</button>
        <button type="button" onClick={() => scrollTo('journal')}>Journal</button>
      </nav>
    </header>
  )
}
