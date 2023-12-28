import SearchForm from '../components/SearchForm/SearchForm'
import Dropdown from '../components/Dropdown/Dropdown'
import CountryCard from '../components/Country/CountryCard'
import Link from '../lib/Link'

const Home = () => {
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
      <div className="flex justify-center md:justify-start py-3"> 
        <Link href={`/country/germany`}>
          <CountryCard
            title={"Germany"}
            population={"81,770,900"}
            region={"Europe"}
            capital={"Berlin"}
          />
        </Link>        
      </div>
    </section>   
  )
}

export default Home
