import { memo } from 'react'
import Utils from './utils'
import Button from '../Button/Button'
import './Country.css'

type CountryDetailsProps = {
  flag: string,
  title: string,
  nativeName: string,
  population: string,
  region: string,
  subregion: string,
  capital: string,
  topLevelDomain: string,
  currencies: string,
  languages: string,
  borderCountries: any[]
}

const CountryDetails = ({ flag, title, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, borderCountries }:CountryDetailsProps) => {
  return (
    <div className="country-details lg:flex gap-10 mx-auto max-w-[1440px] justify-between">
      {/* Flag  */}
      <div className="mx-auto lg:mx-0 w-[320px] md:w-[560px]">
        <img src={flag} alt={`${title} Flag`} className="w-full h-auto" />
      </div>
      {/* Details */}
      <div className="w-[320px] md:w-[578px] mx-auto pt-[38px]">
        <div className="text-[32px] font-bold mb-6">{ title }</div>
        <div className="md:flex justify-between text-[15px] mb-20 gap-8">
          {/* Left Column */}
          <div className="mb-16 md:mb-0">
            <div className="flex gap-2 mb-2">
              <span className="font-bold">Native Name: </span>
              <span>{ nativeName }</span>
            </div>
            <div className="flex gap-2 mb-2">
              <span className="font-bold">Population: </span>
              <span>{ population }</span>
            </div>
            <div className="flex gap-2 mb-2">
              <span className="font-bold">Region: </span>
              <span>{ region }</span>
            </div>
            <div className="flex gap-2 mb-2">
              <span className="font-bold">Sub Region: </span>
              <span>{ subregion }</span>
            </div>
            <div className="flex gap-2 mb-2">
              <span className="font-bold">Capital: </span>
              <span>{ capital }</span>
            </div>
          </div>
          {/* Right Column */}
          <div className="w-[254px]">
            <div className="flex gap-2 mb-2">
              <span className="font-bold">Top Level Domain: </span>
              <span>{ topLevelDomain }</span>
            </div>
            <div className="flex gap-2 mb-2">
              <span className="font-bold">Currencies: </span>
              <span>{ currencies }</span>
            </div>
            <div className="flex gap-2 mb-2">
              <span className="font-bold">Languages: </span>
              <span>{ languages }</span>
            </div>
          </div>
        </div>
        {/* Border Countries */}
        { (borderCountries && borderCountries.length > 0) && <div className="md:flex w-full gap-4">
          <div className="text-[15px] font-bold mb-4 md:mb-0 pt-[2px]">Border Countries: </div>
          <div className="flex flex-wrap gap-x-4 gap-y-3">
            {borderCountries.map((item, index)=>{
              return (
                <Button key={index} href={`/country/${Utils.getName(item).toLowerCase()}`} size="small">{Utils.getName(item)}</Button>
              )
            })}
          </div>                   
        </div> }
      </div>
    </div>
  )
}

export default memo(CountryDetails)
