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
  borderCountries: []
}

const CountryDetails = ({ flag, title, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, borderCountries }:CountryDetailsProps) => {
  return (
    <div className="country-details md:flex gap-10 mx-auto max-w-[1440px] justify-between">
      {/* Flag  */}
      <div className="mx-auto md:mx-0 w-[320px] md:w-[560px]">
        <img src={flag} alt={`${title} Flag`} className="w-full h-auto" />
      </div>
      {/* Details */}
      <div className="md:w-[578px] pt-[38px]">
        <div className="text-[32px] font-bold mb-6">{ title }</div>
        <div className="md:flex justify-between text-[15px] leading-[32px] mb-20">
          {/* Left Column */}
          <div className="mb-16 md:mb-0">
            <div className="">
              <span className="font-bold">Native Name: </span>
              { nativeName }
            </div>
            <div className="">
              <span className="font-bold">Population: </span>
              { population }
            </div>
            <div className="">
              <span className="font-bold">Region: </span>
              { region }
            </div>
            <div className="">
              <span className="font-bold">Sub Region: </span>
              { subregion }
            </div>
            <div className="">
              <span className="font-bold">Capital: </span>
              { capital }
            </div>
          </div>
          {/* Right Column */}
          <div className="w-[254px]">
            <div className="">
              <span className="font-bold">Top Level Domain: </span>
              { topLevelDomain }
            </div>
            <div className="">
              <span className="font-bold">Currencies: </span>
              { currencies }
            </div>
            <div className="">
              <span className="font-bold">Languages: </span>
              { languages }
            </div>
          </div>
        </div>
        {/* Border Countries */}
        { (borderCountries && borderCountries.length > 0) && <div className="md:flex w-full gap-4">
          <div className="text-[15px] font-bold mb-4 md:mb-0">Border Countries: </div>
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
