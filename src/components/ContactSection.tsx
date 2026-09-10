import { contactTiles } from '../data/site'

export function ContactSection() {
  return (
    <section id="contact" className="section-frame">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
        <h2>Let’s build something unforgettable.</h2>
      </div>

      <div className="contact-grid">
        {contactTiles.map((tile) => (
          <a key={tile.label} className="contact-card" href={tile.href}>
            <span className="contact-icon">{tile.icon}</span>
            <span className="contact-label">{tile.label}</span>
            <strong>{tile.value}</strong>
          </a>
        ))}
      </div>
    </section>
  )
}
