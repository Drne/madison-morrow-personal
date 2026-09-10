import { Link } from 'react-router-dom'
import type { BlogPost } from '../data/site'

type BlogSectionProps = {
  posts: BlogPost[]
  loadingPosts: boolean
}

export function BlogSection({ posts, loadingPosts }: BlogSectionProps) {
  return (
    <section id="journal" className="section-frame blog-section">
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow">Blog</p>
          <h2>Field notes from the work.</h2>
        </div>
        <p className="section-copy">A living archive of process, reflection, and development.</p>
      </div>

      {loadingPosts ? (
        <p className="loading-state">Loading journal entries…</p>
      ) : (
        <div className="blog-grid">
          {posts.map((post) => (
            <article key={post.slug} className="blog-card">
              <span className="blog-date">{post.date}</span>
              <h3>
                <Link to={`/blog/${post.slug}`} className="blog-link-title">
                  {post.title}
                </Link>
              </h3>
              <p>{post.summary}</p>
              <Link to={`/blog/${post.slug}`} className="blog-link-button">
                Read entry →
              </Link>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
