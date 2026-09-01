import { createContext, useContext, useState } from 'react'

const MiniProfileContext = createContext(null)

export function MiniProfileProvider({ children }) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <MiniProfileContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </MiniProfileContext.Provider>
  )
}

export function useMiniProfile() {
  return useContext(MiniProfileContext)
}
