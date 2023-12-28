import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import CountriesAPI from '../services/CountriesAPI'
import Utils from '../components/Country/utils'
import Loading from '../components/Loading/Loading'
import Button from '../components/Button/Button'
import { FaArrowLeftLong } from "react-icons/fa6"
import CountryDetails from '../components/Country/CountryDetails'

const Details = () => {
  const { name } = useParams();
  if(!name) return false;

  const { data, error: getCountryError } = useQuery({
    queryKey: [name],
    queryFn: () => CountriesAPI.getByName(name)
  }) 
  
  console.log('data', data)
  
  const codes = data?.borders?.toString();

  const { isPending, error, data: borderCountries } = useQuery({
    queryKey: [name, codes],
    queryFn: () => codes ? CountriesAPI.getByCodes(codes) : [],
    enabled: !!data
  })

  if (getCountryError) {
    return (
      <section className="px-4 md:px-[80px] pt-[25px] md:pt-[50px]">
        <p className="text-center">{`An error has occurred: ${getCountryError.message}`}</p>
      </section>
    )
  }

  if (error) {
    return (
      <section className="px-4 md:px-[80px] pt-[25px] md:pt-[50px]">
        <p className="text-center">{`An error has occurred: ${error.message}`}</p>
      </section>
    )
  }

  if (isPending) {
    return (
      <section className="px-8 md:px-[80px] pt-[40px] md:pt-[82px]">
        <Loading/>
      </section>
    )
  }  
  
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
          title={Utils.getName(data)}
          nativeName={Utils.getNativeName(data)}
          population={Utils.getPopulation(data)}
          region={data.region}
          subregion={data.subregion}
          capital={data.capital}
          topLevelDomain={data.tld}
          currencies={Utils.getCurrencies(data)}
          languages={Utils.getLanguages(data)}
          borderCountries={borderCountries}
        />
      </div>
    </section>  
  )
}

export default Details
