import { useState, useEffect } from 'react'
import Items from './Items'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import { useTheme } from 'next-themes'

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return (
        <SunIcon
          className="w-7 h-7 hover:text-blue-600 duration-300"
          role="button"
          onClick={() => setTheme('light')}
        />
      )
    } else {
      return (
        <MoonIcon
          className="w-7 h-7 hover:text-blue-600 duration-300"
          role="button"
          onClick={() => setTheme('dark')}
        />
      )
    }
  }
  return (
    <header className="absolute text-white bg-blue-300 dark:bg-gray-700 inset-x-0 w-full bg-white-600 dark:bg-gray-700 flex justify-between items-center px-20">
      <figure>
        <img src="favicon.ico" alt="" width={'50px'} />
      </figure>
      <nav>
        <ul className="flex">
          <Items link={''}>Lorem</Items>
          <Items link={''}>Lorem</Items>
          <Items link={''}>Lorem</Items>
          <Items link={''}>Lorem</Items>
        </ul>
      </nav>
      {renderThemeChanger()}
    </header>
  )
}
export default Header
