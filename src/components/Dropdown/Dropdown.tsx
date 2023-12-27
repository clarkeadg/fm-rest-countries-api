import { ReactNode, memo } from 'react'
import './Dropdown.css'

type DropdownProps = {
  children?: ReactNode
}

const Dropdown = ({ children }:DropdownProps) => {
  return (
    <div className={"dropdown"}>
      { children && children }
    </div>
  )
}

export default memo(Dropdown)
