import Layout from '../components/Layout/Layout'
import SearchForm from '../components/SearchForm/SearchForm'
import Dropdown from '../components/Dropdown/Dropdown'
import CountryCard from '../components/Country/CountryCard'

const Home = () => {
  return (
    <Layout>
      <section className="px-4 md:px-[80px] py-5">
        <div className="flex w-full items-center justify-between"> 
          <SearchForm/>
          <Dropdown>
            Filter by Region
          </Dropdown> 
        </div>
        <div className="py-10"> 
          <CountryCard/>
        </div>
      </section>
    </Layout>    
  )
}

export default Home
