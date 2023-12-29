import { memo } from 'react'
import './Country.css'

type CountryCardProps = {
  flag: string,
  title: string,
  population: string,
  region: string,
  capital: string,
}

const CountryCard = ({ flag, title, population, region, capital }:CountryCardProps) => {
  return (
    <div className="country-card rounded-md overflow-hidden shadow w-[265px] max-w-full hover:opacity-90">
      <div className="w-full aspect-[4/3] overflow-hidden">
        <img src={flag} alt={`${title} Flag`} className="w-full h-auto" />
      </div>
      <div className="p-7">
        <div className="text-[18px] font-bold mb-4">{ title }</div>
        <div className="text-[13px] leading-[24px] mb-4">
          <div className="">
            <span className="font-bold">Population: </span>
            { population }
          </div>
          <div className="">
            <span className="font-bold">Region: </span>
            { region }
          </div>
          <div className="">
            <span className="font-bold">Capital: </span>
            { capital }
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(CountryCard)
