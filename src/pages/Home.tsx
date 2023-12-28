import { useQuery } from '@tanstack/react-query'
import CountriesAPI from '../services/CountriesAPI'
import Utils from '../components/Country/utils'
import Loading from '../components/Loading/Loading'
import SearchForm from '../components/SearchForm/SearchForm'
import Dropdown from '../components/Dropdown/Dropdown'
import CountryCard from '../components/Country/CountryCard'
import Link from '../lib/Link'

const Home = () => {
  
  const { isLoading, error, data } = useQuery({
    queryKey: ['all'],
    queryFn: () => CountriesAPI.getAll()
  })

  if (isLoading) {
    return (
      <section className="px-4 md:px-[80px] pt-[25px] md:pt-[50px]">
        <Loading/>
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
  
  return (
    <section className="px-4 md:px-[80px] pt-[25px] md:pt-[50px]">
      <div className="md:flex w-full justify-between mb-10"> 
        <div className="mb-12 md:mb-0">
          <SearchForm/>
        </div>
        <Dropdown title="Filter by Region">
          <div className="leading-[24px] md:leading-[28px]">
            <div>Africa</div>
            <div>America</div>
            <div>Asia</div>
            <div>Europe</div>
            <div>Oceania</div>
          </div>
        </Dropdown> 
      </div>
      <div className="flex justify-center py-3"> 
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          { data.map((item:any, index:number)=>{
            return (
              <li key={index}>
                <Link href={`/country/${Utils.getName(item).toLowerCase()}`}>
                  <CountryCard
                    flag={Utils.getFlag(item)}
                    title={Utils.getName(item)}
                    population={Utils.getPopulation(item)}
                    region={item.region}
                    capital={item.capital}
                  />
                </Link>
              </li>
            )
          })}
        </ul>              
      </div>
    </section>   
  )
}

export default Home
