import madison1 from '../assets/madison1.png'
import madison2 from '../assets/madison2.png'

type HeroProps = {
  onViewWork: () => void
  onContact: () => void
}

export function Hero({ onViewWork, onContact }: HeroProps) {
  return (
    <section className="hero section-frame">
      <div className="hero-copy">
        <p className="eyebrow">Producing bold work that lingers</p>
        <h1>Stories with scale, atmosphere, and a pulse for the room.</h1>
        <p className="lede">
          Madison Morrow is a producer building original theatre experiences that bridge artists,
          communities, and unforgettable audiences.
        </p>
        <div className="hero-actions">
          <button type="button" className="primary-button" onClick={onViewWork}>
            View corpus
          </button>
          <button type="button" className="secondary-button" onClick={onContact}>
            Get in touch
          </button>
        </div>
      </div>

      <div className="hero-panel" aria-label="Producer highlights">
        <div className="portrait-grid" aria-label="Madison Morrow portrait collection">
          <img src={madison1} alt="Madison Morrow portrait 1" className="portrait-image portrait-image-large" />
          <img src={madison2} alt="Madison Morrow portrait 2" className="portrait-image portrait-image-small" />
        </div>

        <div className="stat-card large-card">
          <span>Selected projects</span>
          <strong>14</strong>
        </div>
        <div className="stat-card">
          <span>Partnerships</span>
          <strong>28</strong>
        </div>
        <div className="stat-card">
          <span>Audience reach</span>
          <strong>32k</strong>
        </div>
      </div>
    </section>
  )
}
