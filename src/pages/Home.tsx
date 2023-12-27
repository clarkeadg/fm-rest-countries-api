import SearchForm from '../components/SearchForm/SearchForm'
import Dropdown from '../components/Dropdown/Dropdown'
import CountryCard from '../components/Country/CountryCard'
import Link from '../lib/Link'

const Home = () => {
  return (
    <section className="px-4 md:px-[80px] pt-[25px] md:pt-[50px]">
      <div className="md:flex w-full items-center justify-between mb-10"> 
        <SearchForm/>
        <Dropdown>
          Filter by Region
        </Dropdown> 
      </div>
      <div className="flex justify-center md:justify-start py-3"> 
        <Link href="/details">
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
