import { Route, Routes } from 'react-router-dom'
import './App.css'
import { BlogPostPage } from './pages/BlogPostPage'
import { HomePage } from './pages/HomePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
    </Routes>
  )
}

export default App
