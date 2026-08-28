import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Expertise from './components/Expertise'
import Projects from './components/Projects'
import GraphicDesign from './components/GraphicDesign'
import Education from './components/Education'
import Certificates from './components/Certificates'
import Experience from './components/Experience'
import Contact from './components/Contact'
import CustomCursor from './components/ui/CustomCursor'

export default function App() {
  return (
    <LanguageProvider>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <GraphicDesign />
        <Education />
        <Certificates />
        <Experience />
        <Contact />
      </main>
    </LanguageProvider>
  )
}
