import { memo } from 'react'
import './Country.css'

type CountryDetailsProps = {

}

const CountryDetails = ({  }:CountryDetailsProps) => {
  return (
    <div className={"country-details"}>
      Country Details
    </div>
  )
}

export default memo(CountryDetails)
