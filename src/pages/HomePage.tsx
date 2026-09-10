import { useEffect, useState } from 'react'
import { AboutSection } from '../components/AboutSection'
import { BlogSection } from '../components/BlogSection'
import { ContactSection } from '../components/ContactSection'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { ProjectModal } from '../components/ProjectModal'
import { ProjectSection } from '../components/ProjectSection'
import { blogCatalog, projects, type BlogPost, type Project } from '../data/site'

export function HomePage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loadingPosts, setLoadingPosts] = useState(true)

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const loaded = await Promise.all(
          blogCatalog.map(async ({ slug, fileName, title, date, summary }) => {
            const response = await fetch(`/blog/${fileName}`)
            if (!response.ok) {
              throw new Error(`Missing markdown file: ${fileName}`)
            }

            const content = await response.text()
            return {
              slug,
              fileName,
              title,
              date,
              summary,
              content,
            }
          }),
        )

        setPosts(loaded)
      } catch (error) {
        console.error('Error loading blog posts', error)
      } finally {
        setLoadingPosts(false)
      }
    }

    void loadPosts()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="page-shell">
      <Header />

      <main>
        <Hero
          onViewWork={() => scrollTo('work')}
          onContact={() => scrollTo('contact')}
        />

        <AboutSection />
        <ProjectSection projects={projects} onSelectProject={setSelectedProject} />
        <ContactSection />
        <BlogSection posts={posts} loadingPosts={loadingPosts} />
      </main>

      <footer className="site-footer">© {new Date().getFullYear()} Madison Morrow</footer>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  )
}
