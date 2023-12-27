import { ReactNode, memo } from 'react'
import Link from '../../lib/Link'
import './Button.css'

type ButtonProps = {
  href?: string,
  handleClick?: React.MouseEventHandler<HTMLButtonElement>,
  accessoryLeft?: ReactNode,
  accessoryRight?: ReactNode,
  children?: ReactNode
}

const Button = ({ href, handleClick, accessoryLeft, accessoryRight, children }:ButtonProps) => {
  if (href) {
    return (
      <Link href={href} className={"button flex items-center justify-between px-7 md:px-10 py-2 gap-3 text-[14px] md:text-[16px] rounded shadow hover:opacity-90"}>
        { accessoryLeft }
        { children }
        { accessoryRight }
      </Link>
    )
  }

  return (
    <button onClick={handleClick} className={"button flex items-center justify-between px-7 md:px-10 py-2 gap-3 text-[14px] md:text-[16px] rounded shadow hover:opacity-90"}>
      { accessoryLeft }
      { children }
      { accessoryRight }
    </button>
  )
}

export default memo(Button)
