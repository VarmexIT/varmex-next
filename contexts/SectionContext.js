import { useState, useEffect, useRef, createContext, useContext } from 'react'
import { useRouter } from 'next/router'
import scrollPageTo from '../utils/scrollPageTo'

const sectionContext = createContext()

export const useSection = () => {
  return useContext(sectionContext)
}

const SectionContext = ({ children }) => {
  const ref = useRef(new Map()).current
  const [sectionUrl, setSectionUrl] = useState('/')
  const { push } = useRouter()

  useEffect(() => {
    push('/', sectionUrl, {
      shallow: true,
    })
  }, [sectionUrl]) // eslint-disable-line react-hooks/exhaustive-deps

  const registerSection = (slug, nodeRef) => {
    if (slug && nodeRef) {
      ref.set(slug, nodeRef.offsetTop)
    }
  }

  const scrollToSection = slug => {
    const scrollTo = slug === '/' ? 0 : ref.get(slug)
    scrollPageTo(scrollTo)

    if (slug === '/') {
      setSectionUrl('/')
    }
  }

  return (
    <sectionContext.Provider
      value={{ registerSection, sections: ref, scrollToSection, setSectionUrl }}
    >
      {children}
    </sectionContext.Provider>
  )
}

export default SectionContext
