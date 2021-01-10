import { useRef, createContext, useContext } from 'react'

const sectionContext = createContext()

export const useSection = () => {
  return useContext(sectionContext)
}

const SectionContext = ({ children }) => {
  const ref = useRef(new Map()).current

  const registerSection = (slug, nodeRef) => {
    if (slug && nodeRef) {
      ref.set(slug, nodeRef.offsetTop)
    }
  }

  const getSection = slug => ref.get(slug)

  return (
    <sectionContext.Provider value={{ registerSection, getSection }}>
      {children}
    </sectionContext.Provider>
  )
}

export default SectionContext
