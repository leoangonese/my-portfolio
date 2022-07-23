import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import MobileNav from './MobileNav'
import { mobileMenuOpen, renderThemeChanger } from '../../../functions/core'
import NavBar from './NavBar'

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [color, setColor] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const changeColor = () => {
    if (window.scrollY >= 10) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', changeColor)
  }
  return (
    <>
      <header
        className={`z-50 py-2 fixed max-w-screen-2xl mx-auto ${
          color === true
            ? 'bg-primary text-white'
            : 'bg-trasparent dark:bg-trasparent'
        } inset-x-0 w-full flex flex-row-reverse justify-between items-center duration-300 px-20 rounded-b-lg`}
      >
        <nav className="md:block hidden">
          <NavBar />
        </nav>
        {mobileMenuOpen(showMenu, setShowMenu, color)}
        {renderThemeChanger(mounted, theme, systemTheme, setTheme, color)}
      </header>
      <MobileNav open={showMenu} />
    </>
  )
}
export default Header
