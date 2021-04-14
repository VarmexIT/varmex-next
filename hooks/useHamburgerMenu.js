import { useContext } from 'react'
import { hamburgerMenuContext } from '../providers/HamburgerMenuProvider'

const useHamburgerMenu = () => {
  return useContext(hamburgerMenuContext)
}

export default useHamburgerMenu
