import { ReactNode, memo } from 'react'
import Attribution from '../Attribution'
import { useThemeContext } from '../ThemeSwitcher/ThemeContext'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'
import Link from '../../lib/Link'
import './Layout.css'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }:LayoutProps) => {
  const { theme } = useThemeContext();

  return (
    <main className={`${theme} relative min-h-screen pb-10`}>
      <header className="flex items-center justify-between px-4 md:px-[78px] py-8 md:py-6 shadow">
        <Link href="/">
          <h1 className="header-text text-[15px] md:text-[24px] font-extrabold">
            Where in the world?
          </h1>
        </Link>
        <ThemeSwitcher/>
      </header>
      { children }
      <footer className="absolute bottom-0 w-full h-10 flex items-center justify-center">
        <Attribution/>
      </footer>
    </main>
  )
}

export default memo(Layout)
