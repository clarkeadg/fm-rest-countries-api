import { memo } from 'react'

type CountryCardProps = {
  title: string,
  handleClick: Function
}

const RegionButton = ({ title, handleClick }:CountryCardProps) => {
  return (
    <button className="flex w-full flex-start" onClick={()=>{ handleClick(title == "All" ? "" : title) }}>
      { title }
    </button>
  )
}

export default memo(RegionButton)
