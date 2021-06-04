/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Link from 'next/link'
import { useState, useRef } from 'react'
import { motion, useViewportScroll } from 'framer-motion'
import useMediaQueryWidth from '../../hooks/useMediaQueryWidth'
import useOnClickOutside from '../../hooks/useOnClickOutside'
import styles from './Varmehandbok.styles'
import scrollPageToElement from '../../utils/scrollPageToElement'

const VarmehandbokNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useViewportScroll()
  const is2000 = useMediaQueryWidth(2000)

  const navRef = useRef()
  useOnClickOutside(navRef, () => {
    if (isOpen) {
      setIsOpen(false)
    }
  })

  const handleClick = e => {
    e.preventDefault()
    scrollPageToElement(e.target.hash, null, {
      offset: -100,
    })
    setIsOpen(false)
  }

  return (
    <styles.nav
      ref={navRef}
      as={motion.nav}
      animate={{
        ...(is2000 ? {} : { x: isOpen ? '0%' : 'calc(100% - 40px)' }),
        ...(is2000 ? {} : { opacity: isOpen ? 0.95 : 0.6 }),
        // x: isOpen ? '0%' : 'calc(100% - 40px)',
        // opacity: isOpen ? 0.95 : 0.6,
      }}
      transition={{
        duration: 0.7,
        ease: 'easeInOut',
      }}
      // style={{
      //   y: scrollY,
      // }}
    >
      <div className="inner">
        <button className="title" type="button" onClick={() => setIsOpen(p => !p)}>
          Handbokens innehåll
        </button>
        <div className="content">
          <ul>
            <li>
              <Link href="#varfor-uppdatering-och-injustering" shallow scroll={false}>
                <a onClick={handleClick}>Varför uppdatering och injustering</a>
              </Link>
            </li>
            <li>
              <Link href="#sa-fungerar-ett-varmesystem" shallow scroll={false}>
                <a onClick={handleClick}>Så fungerar ett värmesystem</a>
              </Link>
            </li>
            <li>
              <Link href="#radiatorer-konvektorer-och-golvvarme" shallow scroll={false}>
                <a onClick={handleClick}>Radiatorer, konvektorer och golvvärme</a>
              </Link>
            </li>
            <li>
              <Link href="#moblering" shallow scroll={false}>
                <a onClick={handleClick}>Möblering</a>
              </Link>
            </li>
            <li>
              <Link href="#termostater-och-handrattar" shallow scroll={false}>
                <a onClick={handleClick}>Termostater och handrattar</a>
              </Link>
            </li>
            <li>
              <Link href="#inomhusklimat" shallow scroll={false}>
                <a onClick={handleClick}>Inomhusklimat</a>
              </Link>
            </li>
            <li>
              <Link href="#radiatorventiler" shallow scroll={false}>
                <a onClick={handleClick}>Radiatorventiler</a>
              </Link>
            </li>
            <li>
              <Link href="#stamventiler" shallow scroll={false}>
                <a onClick={handleClick}>Stamventiler</a>
              </Link>
            </li>
            <li>
              <Link href="#olika-kopplingsprinciper" shallow scroll={false}>
                <a onClick={handleClick}>Olika kopplingsprinciper</a>
              </Link>
            </li>
            <li>
              <Link href="#vattenkvalitet" shallow scroll={false}>
                <a onClick={handleClick}>Vattenkvalitet</a>
              </Link>
            </li>
            <li>
              <Link href="#varmecentralen" shallow scroll={false}>
                <a onClick={handleClick}>Värmecentralen</a>
              </Link>
            </li>
            <li>
              <Link href="#reglering-och-overvakning" shallow scroll={false}>
                <a onClick={handleClick}>Reglering och övervakning</a>
              </Link>
            </li>
            <li>
              <Link href="#projektets-gang" shallow scroll={false}>
                <a onClick={handleClick}>Projektets gång</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </styles.nav>
  )
}

export default VarmehandbokNav
