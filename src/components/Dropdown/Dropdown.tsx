import { useState, useEffect, ReactNode, memo } from 'react'
import { FaChevronDown } from "react-icons/fa6";
import './Dropdown.css'

type DropdownProps = {
  title?: string,
  children?: ReactNode
}

const Dropdown = ({ title, children }:DropdownProps) => {
  const [active, setActive] = useState(false);

  const toggleDropdown = () => {
    setActive((active) => !active)
  }

  useEffect(()=>{
    setActive(false)
  }, [title])

  return (
    <div className={`dropdown ${active ? "active" : ""} w-[200px]`}>
      <button data-testid="dropdown-trigger" onClick={toggleDropdown} className="dropdown-trigger flex w-full items-center justify-between pl-7 pr-5 py-4 md:py-5 gap-10 rounded-md shadow">
        <span className="dropdown-title text-[12px] md:text-[14px]">
          { title }
        </span>
        <span className="dropdown-icon text-[10px]">
          <FaChevronDown/>
        </span>
      </button>
      { active && <div className="relative">
        <div className="dropdown-menu absolute top-[6px] left-0 w-full text-[12px] md:text-[14px] px-7 py-3 rounded-md shadow">
          { children }
        </div>
      </div> }          
    </div>
  )
}

export default memo(Dropdown)
