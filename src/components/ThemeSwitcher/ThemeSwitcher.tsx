import { memo } from 'react';
import { useThemeContext } from './ThemeContext'

import { FaRegMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useThemeContext();

  const toggleTheme = () => {
    if (theme == "light") {
      setTheme('dark');
    } else {
      setTheme('light');
    }    
  }

  return (
    <button data-testid="theme-switcher" onClick={toggleTheme} className="theme-switcher">
      <div className="flex items-center gap-3 font-bold text-[12px] md:text-[16px] leading-none">
        { theme == 'dark' ? (
          <>
            <FaRegMoon className="h-5 w-auto"/>
            <div>Dark Mode</div>
          </>
        ) : (
          <>
            <IoMdSunny className="h-5 w-auto"/>
            <div>Light Mode</div>
          </>
        ) }
      </div>
    </button>
  );
}

export default memo(ThemeSwitcher);
