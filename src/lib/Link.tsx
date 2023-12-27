import { ReactNode, memo } from 'react'
import { Link as RouterLink } from "react-router-dom";

type LinkProps = {
  href: string,
  className?: string,
  children?: ReactNode
}

const Link = ({ href, className, children }:LinkProps) => {
  return (
    <RouterLink to={href} className={className}>
      { children }
    </RouterLink>
  )
}

export default memo(Link)
