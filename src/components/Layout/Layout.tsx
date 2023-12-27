import { ReactNode, memo } from 'react'
import { useThemeContext } from '../ThemeSwitcher/ThemeContext'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'
import './Layout.css'

type Layout = {
  children: ReactNode
}

const Layout = ({ children }:Layout) => {
  const { theme } = useThemeContext();

  return (
    <main className={`${theme} relative min-h-screen pb-10`}>
      <header className="flex items-center justify-between px-4 md:px-[78px] py-8 md:py-6 shadow">
        <h1 className="header-text text-[15px] md:text-[24px] font-extrabold">
          Where in the world?
        </h1>
        <ThemeSwitcher/>
      </header>
      { children }
    </main>
  )
}

export default memo(Layout)
