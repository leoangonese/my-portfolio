import { MenuAlt3Icon, MoonIcon, SunIcon, XIcon } from '@heroicons/react/solid'

export const renderThemeChanger = (
  mounted: boolean,
  theme: any,
  systemTheme: any,
  setTheme: any,
  color: boolean
) => {
  if (!mounted) return null

  const currentTheme = theme === 'system' ? systemTheme : theme

  if (currentTheme === 'dark') {
    return (
      <SunIcon
        className={`w-7 h-7 ${
          color === true ? 'hover:text-black' : 'hover:text-primary'
        } duration-300`}
        role="button"
        onClick={() => setTheme('light')}
      />
    )
  } else {
    return (
      <MoonIcon
        className={`w-7 h-7 ${
          color === true ? 'hover:text-black' : 'hover:text-primary'
        } duration-300`}
        role="button"
        onClick={() => setTheme('dark')}
      />
    )
  }
}

export const mobileMenuOpen = (
  showMenu: boolean,
  setShowMenu: any,
  color: boolean
) => {
  if (showMenu !== true) {
    return (
      <MenuAlt3Icon
        className={`block md:hidden w-7 h-7 ${
          color === true ? 'hover:text-black' : 'hover:text-primary'
        } duration-300`}
        onClick={() => setShowMenu(true)}
      />
    )
  } else {
    return (
      <XIcon
        className={`block md:hidden w-7 h-7 ${
          color === true ? 'hover:text-black' : 'hover:text-primary'
        } duration-300`}
        onClick={() => setShowMenu(false)}
      />
    )
  }
}
