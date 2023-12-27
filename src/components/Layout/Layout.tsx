import { ReactNode, memo } from 'react'
import { useThemeContext } from '../ThemeSwitcher/ThemeContext'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'

type Layout = {
  children: ReactNode
}

const Layout = ({ children }:Layout) => {
  const { theme } = useThemeContext();

  return (
    <main className={`${theme} relative min-h-screen pb-10`}>
      <header className="flex items-center justify-between px-10 py-4 bg-gray-200">
        <div className="font-bold">
          Where in the world?
        </div>
        <ThemeSwitcher/>
      </header>
      { children }
    </main>
  )
}

export default memo(Layout)
