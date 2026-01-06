import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Tracks } from './components/Tracks'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  return (
    <main className="min-h-screen" style={{backgroundColor: '#050505'}}>
      <Navbar />
      <Hero />
      <Tracks />
      <Footer />
    </main>
  )
}

export default App
