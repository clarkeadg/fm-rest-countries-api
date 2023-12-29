import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import CountriesAPI from '../services/CountriesAPI'
import Utils from '../components/Country/utils'
import Loading from '../components/Loading/Loading'
import SearchForm from '../components/SearchForm/SearchForm'
import Dropdown from '../components/Dropdown/Dropdown'
import CountryCard from '../components/Country/CountryCard'
import RegionButton from '../components/Country/RegionButton'
import Link from '../lib/Link'

const Home = () => {  
  const [params, setParams] = useSearchParams();
  const [region, setRegion] = useState(params.get('region') || '');
  const [query, setQuery] = useState(params.get('q') || '');

  useEffect(()=>{
    setParams({ region, q: query })
  }, [region, query])

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

  const sortedItems = data.sort((a:any, b:any)=>{
    return a.population > b.population ? -1 : 1; 
  });
  
  return (
    <section className="px-4 md:px-[80px] pt-[25px] md:pt-[50px]">
      <div className="md:flex w-full justify-between mb-10"> 
        <div className="mb-12 md:mb-0">
          <SearchForm query={query} setQuery={setQuery}/>
        </div>
        <Dropdown title={region || "Filter by Region"}>
          <div className="leading-[24px] md:leading-[28px]">
            <RegionButton title="All" handleClick={setRegion} />
            <RegionButton title="Africa" handleClick={setRegion} />
            <RegionButton title="Americas" handleClick={setRegion} />
            <RegionButton title="Asia" handleClick={setRegion} />
            <RegionButton title="Europe" handleClick={setRegion} />
            <RegionButton title="Oceania" handleClick={setRegion} />
          </div>
        </Dropdown> 
      </div>
      <div className="flex justify-center py-3"> 
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          { sortedItems.map((item:any, index:number)=>{
            // Filter by region
            if (region && item.region != region) return false;
            
            // Filter by search
            const name = Utils.getName(item).toLowerCase();
            if (query && !~name.search(new RegExp(`^${query.toLowerCase()}`))) return false;

            return (
              <li key={index}>
                <Link href={`/country/${encodeURIComponent(name)}`} className="flex h-full">
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
