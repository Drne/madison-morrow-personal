import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { blogCatalog, type BlogPost } from '../data/site'

export function BlogPostPage() {
  const navigate = useNavigate()
  const { slug } = useParams()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const matchingEntry = blogCatalog.find((entry) => entry.slug === slug)

    if (!matchingEntry) {
      setPost(null)
      setLoading(false)
      return
    }

    const loadPost = async () => {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}blog/${matchingEntry.fileName}`)
        if (!response.ok) {
          throw new Error(`Missing markdown file: ${matchingEntry.fileName}`)
        }

        const content = await response.text()
        setPost({
          ...matchingEntry,
          content,
        })
      } catch (error) {
        console.error('Error loading blog post', error)
        setPost(null)
      } finally {
        setLoading(false)
      }
    }

    void loadPost()
  }, [slug])

  if (loading) {
    return (
      <div className="page-shell">
        <main className="section-frame">
          <p className="loading-state">Loading journal entry…</p>
        </main>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="page-shell">
        <main className="section-frame">
          <p className="loading-state">Journal entry not found.</p>
          <div className="hero-actions">
            <button type="button" className="primary-button" onClick={() => navigate('/')}>
              Back to home
            </button>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-block">
          <Link to="/" className="brand-mark" aria-label="Back to home">
            MM
          </Link>
          <div>
            <p className="brand-name">Madison Morrow</p>
            <p className="brand-role">Theatre Producer</p>
          </div>
        </div>

        <button type="button" className="secondary-button" onClick={() => navigate('/')}>
          ← Back to journal
        </button>
      </header>

      <main>
        <article className="section-frame blog-post-page">
          <p className="eyebrow">Journal</p>
          <h1>{post.title}</h1>
          <p className="blog-date blog-post-date">{post.date}</p>
          <div className="blog-content blog-post-content">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </article>
      </main>

      <footer className="site-footer">© {new Date().getFullYear()} Madison Morrow</footer>
    </div>
  )
}
