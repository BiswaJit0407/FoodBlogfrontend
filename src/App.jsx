import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import RecipeDetails from './pages/RecipeDetails'
import Pantry from './pages/Pantry'
import ProTips from './pages/ProTips'
import Tutorials from './pages/Tutorials'
import About from './pages/About'
import Contact from './pages/Contact'
import Favorites from './pages/Favorites'
import { LanguageProvider } from './context/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="recipe/:id" element={<RecipeDetails />} />
            <Route path="pantry" element={<Pantry />} />
            <Route path="tips" element={<ProTips />} />
            <Route path="tutorials" element={<Tutorials />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="favorites" element={<Favorites />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
