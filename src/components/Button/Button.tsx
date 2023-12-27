import { ReactNode, memo } from 'react'
import './Button.css'

type ButtonProps = {
  handleClick?: React.MouseEventHandler<HTMLButtonElement>,
  accessoryLeft?: ReactNode,
  accessoryRight?: ReactNode,
  children?: ReactNode}

const Button = ({ handleClick=()=>{}, accessoryLeft, accessoryRight, children }:ButtonProps) => {
  return (
    <button onClick={handleClick} className={"button flex items-center justify-between px-4 py-3"}>
      { accessoryLeft && accessoryLeft }
      { children && children }
      { accessoryRight && accessoryRight }
    </button>
  )
}

export default memo(Button)
