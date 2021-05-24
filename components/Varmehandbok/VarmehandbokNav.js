/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Link from 'next/link'
import { useState, useRef } from 'react'
import { motion, useViewportScroll } from 'framer-motion'
import useOnClickOutside from '../../hooks/useOnClickOutside'
import styles from './Varmehandbok.styles'
import scrollPageToElement from '../../utils/scrollPageToElement'

const ListItem = ({ children, setIsOpen, target = '#varfor-uppdatering' }) => {
  const handleClick = e => {
    e.preventDefault()
    scrollPageToElement(target)
    setIsOpen(false)
  }
  return (
    <li>
      <Link href={target} shallow scroll={false}>
        <a onClick={handleClick}>{children}</a>
      </Link>
    </li>
  )
}

const VarmehandbokNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useViewportScroll()
  const ref = useRef()
  useOnClickOutside(ref, () => {
    if (isOpen) {
      setIsOpen(false)
    }
  })

  return (
    <styles.nav
      ref={ref}
      as={motion.nav}
      animate={{
        x: isOpen ? '0%' : 'calc(100% - 35px)',
        opacity: isOpen ? 0.95 : 0.6,
      }}
      transition={{
        duration: 0.7,
        ease: 'easeInOut',
      }}
      style={{
        y: scrollY,
      }}
    >
      <div className="inner">
        <button className="title" type="button" onClick={() => setIsOpen(p => !p)}>
          Handbokens innehåll
        </button>
        <div className="content">
          <ul>
            <ListItem setIsOpen={setIsOpen} target="#varfor-uppdatering">
              Varför uppdatering och injustering
            </ListItem>
            <ListItem setIsOpen={setIsOpen}>Teknisk guide</ListItem>
            <ListItem setIsOpen={setIsOpen}>
              Så fungerar ett värmesystem
              <ul>
                <ListItem setIsOpen={setIsOpen}>Radiatorer, konvektorer och golvvärme</ListItem>
                <ListItem setIsOpen={setIsOpen}>Möblering</ListItem>
                <ListItem setIsOpen={setIsOpen}>Termostater och handratter</ListItem>
                <ListItem setIsOpen={setIsOpen}>Inomhusklimat</ListItem>
                <ListItem setIsOpen={setIsOpen}>Radiatorventiler</ListItem>
                <ListItem setIsOpen={setIsOpen}>Stamventiler</ListItem>
                <ListItem setIsOpen={setIsOpen}>Olika kopplingsprinciper</ListItem>
                <ListItem setIsOpen={setIsOpen}>Vattenkvalitet</ListItem>
                <ListItem setIsOpen={setIsOpen}>Värmecentralen</ListItem>
                <ListItem setIsOpen={setIsOpen}>Reglering och övervakning</ListItem>
              </ul>
            </ListItem>
            <ListItem setIsOpen={setIsOpen}>Projektets gång</ListItem>
          </ul>
        </div>
      </div>
    </styles.nav>
  )
}

export default VarmehandbokNav
