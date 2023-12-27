import Layout from '../components/Layout/Layout'
import Button from '../components/Button/Button'
import { FaArrowLeftLong } from "react-icons/fa6";
import CountryDetails from '../components/Country/CountryDetails'

const Details = () => {
  return (
    <section className="px-8 md:px-[80px] pt-[40px] md:pt-[82px]">
      <div className="flex w-full items-center justify-between"> 
        <Button href="/" accessoryLeft={<FaArrowLeftLong />}>
          Back
        </Button>
      </div>
      <div className="py-10"> 
        <CountryDetails/>
      </div>
    </section>  
  )
}

export default Details
