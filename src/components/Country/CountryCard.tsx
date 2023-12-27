import { memo } from 'react'
import './Country.css'

type CountryCardProps = {

}

const CountryCard = ({  }:CountryCardProps) => {
  return (
    <div className={"country-card"}>
      Country Card
    </div>
  )
}

export default memo(CountryCard)
