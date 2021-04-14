import { useState, createContext } from 'react'

export const hamburgerMenuContext = createContext()

const HamburgerMenuProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return (
    <hamburgerMenuContext.Provider
      value={{
        isOpen,
        open,
        close,
      }}
    >
      {children}
    </hamburgerMenuContext.Provider>
  )
}

export default HamburgerMenuProvider
