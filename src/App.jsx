import { Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import { ThemeProvider } from './context/ThemeContext'
import { MiniProfileProvider, useMiniProfile } from './context/MiniProfileContext'
import RailNav from './components/RailNav'
import Beranda from './components/pages/Beranda'
import Tentang from './components/pages/Tentang'
import Proyek from './components/pages/Proyek'
import DetailProject from './components/pages/DetailProject'
import Sertifikat from './components/pages/Sertifikat'
import ExperiencePage from './components/pages/ExperiencePage'
import Kontak from './components/pages/Kontak'

function AppLayout() {
  const { isVisible } = useMiniProfile()

  return (
    <>
      <RailNav miniProfileVisible={isVisible} />
      <main className="min-h-screen" style={{ background: 'var(--bg)' }}>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/proyek" element={<Proyek />} />
          <Route path="/proyek/:slug" element={<DetailProject />} />
          <Route path="/sertifikat" element={<Sertifikat />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/kontak" element={<Kontak />} />
        </Routes>
      </main>
    </>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <MiniProfileProvider>
          <AppLayout />
        </MiniProfileProvider>
      </ThemeProvider>
    </LanguageProvider>
  )
}
