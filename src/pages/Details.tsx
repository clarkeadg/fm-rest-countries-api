import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import CountriesAPI from '../services/CountriesAPI'
import Utils from '../components/Country/utils'
import Button from '../components/Button/Button'
import { FaArrowLeftLong } from "react-icons/fa6"
import CountryDetails from '../components/Country/CountryDetails'

const Details = () => {
  const { name } = useParams();
  if(!name) return 'Missing name param'

  const { data, error: getCountryError } = useQuery({
    queryKey: [name],
    queryFn: () => CountriesAPI.getByName(name)
  })  
  
  const codes = data?.borders.toString();

  const { isPending, error, data: borderCountries } = useQuery({
    queryKey: [name, codes],
    queryFn: () => CountriesAPI.getByCodes(codes),
    enabled: !!data
  })

  if (getCountryError) return 'An error has occurred: ' + getCountryError.message

  if (error) return 'An error has occurred: ' + error.message

  if (isPending) return 'Loading...' 
  
  return (
    <section className="px-8 md:px-[80px] pt-[40px] md:pt-[82px]">
      <div className="flex w-full items-center justify-between mb-14"> 
        <Button href="/" accessoryLeft={<FaArrowLeftLong />}>
          Back
        </Button>
      </div>
      <div className="py-9"> 
        <CountryDetails
          flag={Utils.getFlag(data)}
          title={data.name.common}
          nativeName={Utils.getNativeName(data)}
          population={Utils.getPopulation(data)}
          region={data.region}
          subregion={data.subregion}
          capital={data.capital}
          topLevelDomain={data.tld}
          currencies={Utils.getCurrencies(data)}
          languages={Utils.getLanguages(data)}
          borderCountries={Utils.getBorderCountries(borderCountries)}
        />
      </div>
    </section>  
  )
}

export default Details
