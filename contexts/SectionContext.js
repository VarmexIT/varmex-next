import { useState, useEffect, useRef, createContext, useContext } from 'react'
import scrollPageTo from '../utils/scrollPageTo'

const sectionContext = createContext()

export const useSection = () => {
  return useContext(sectionContext)
}

const SectionContext = ({ children }) => {
  const ref = useRef(new Map()).current
  const [currentSection, setCurrentSection] = useState('/')

  useEffect(() => {
    const scrollTo = currentSection === '/' ? 0 : ref.get(currentSection)
    scrollPageTo(scrollTo)
  }, [currentSection, ref])

  const registerSection = (slug, nodeRef) => {
    if (slug && nodeRef) {
      ref.set(slug, nodeRef.offsetTop)
    }
  }

  const setSection = slug => setCurrentSection(slug)

  return (
    <sectionContext.Provider value={{ registerSection, sections: ref, setSection }}>
      {children}
    </sectionContext.Provider>
  )
}

export default SectionContext
