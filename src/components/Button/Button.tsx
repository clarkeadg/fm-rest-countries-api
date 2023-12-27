import { ReactNode, memo } from 'react'
import Link from '../../lib/Link'
import './Button.css'

type ButtonProps = {
  href?: string,
  handleClick?: React.MouseEventHandler<HTMLButtonElement>,
  accessoryLeft?: ReactNode,
  accessoryRight?: ReactNode,
  children?: ReactNode,
  size?: string
}

const Button = ({ href, handleClick, accessoryLeft, accessoryRight, children, size }:ButtonProps) => {
  
  let classes = "button flex items-center justify-between rounded shadow hover:opacity-90 ";
  switch(size) {
    case 'small':
      classes+= "text-[12px] md:text-[14px] px-7 md:px-5 py-1 gap-2";
    break;
    default:
      classes+= "text-[14px] md:text-[16px] px-7 md:px-10 py-2 gap-3";
    break;
  }  
  
  if (href) {
    return (
      <Link href={href} className={classes}>
        { accessoryLeft }
        { children }
        { accessoryRight }
      </Link>
    )
  }

  return (
    <button onClick={handleClick} className={classes}>
      { accessoryLeft }
      { children }
      { accessoryRight }
    </button>
  )
}

export default memo(Button)
