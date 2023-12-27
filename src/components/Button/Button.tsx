import { ReactNode, memo } from 'react'
import './Button.css'

type ButtonProps = {
  handleClick?: React.MouseEventHandler<HTMLButtonElement>,
  accessoryLeft?: ReactNode,
  accessoryRight?: ReactNode,
  children?: ReactNode}

const Button = ({ handleClick=()=>{}, accessoryLeft, accessoryRight, children }:ButtonProps) => {
  return (
    <button onClick={handleClick} className={"button flex items-center justify-between px-7 md:px-10 py-2 gap-3 text-[14px] md:text-[16px] rounded shadow hover:opacity-90"}>
      { accessoryLeft && accessoryLeft }
      { children && children }
      { accessoryRight && accessoryRight }
    </button>
  )
}

export default memo(Button)
