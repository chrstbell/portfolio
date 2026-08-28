import { createContext, useContext, useEffect, useState } from 'react'
import contentId from '../data/content.id'
import contentEn from '../data/content.en'

const STORAGE_KEY = 'portfolio-language'

const LanguageContext = createContext(null)

const contentMap = {
  id: contentId,
  en: contentEn,
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') return 'id'
    return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'id'
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language === 'id' ? 'id' : 'en'
  }, [language])

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'id' ? 'en' : 'id'))
  }

  const content = contentMap[language]

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, content }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return ctx
}
