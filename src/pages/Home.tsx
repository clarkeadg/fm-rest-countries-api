import SearchForm from '../components/SearchForm/SearchForm'
import Dropdown from '../components/Dropdown/Dropdown'
import CountryCard from '../components/Country/CountryCard'
import Link from '../lib/Link'

const Home = () => {
  return (
    <section className="px-4 md:px-[80px] py-5">
      <div className="flex w-full items-center justify-between"> 
        <SearchForm/>
        <Dropdown>
          Filter by Region
        </Dropdown> 
      </div>
      <div className="py-10"> 
        <Link href="/details">
          <CountryCard/>
        </Link>        
      </div>
    </section>   
  )
}

export default Home
