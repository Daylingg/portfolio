import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { About } from './components/About'
import { NavBar } from './components/NavBar'
import { Portfolio } from './components/Portfolio'
import { Skills } from './components/Skills'

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
