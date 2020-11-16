import { useState, createContext, useContext } from 'react'

const mobileNavContext = createContext()

export const useMobileNav = () => {
  return useContext(mobileNavContext)
}

const MobileNavContext = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return (
    <mobileNavContext.Provider
      value={{
        isOpen,
        open,
        close,
      }}
    >
      {children}
    </mobileNavContext.Provider>
  )
}

export default MobileNavContext
