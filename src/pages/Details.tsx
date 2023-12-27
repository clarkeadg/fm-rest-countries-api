import Button from '../components/Button/Button'
import { FaArrowLeftLong } from "react-icons/fa6";
import CountryDetails from '../components/Country/CountryDetails'

const Details = () => {
  return (
    <section className="px-8 md:px-[80px] pt-[40px] md:pt-[82px]">
      <div className="flex w-full items-center justify-between mb-14"> 
        <Button href="/" accessoryLeft={<FaArrowLeftLong />}>
          Back
        </Button>
      </div>
      <div className="py-9"> 
        <CountryDetails
          title={"Belgium"}
          nativeName={"Belgie"}
          population={"11,319,511"}
          region={"Europe"}
          subRegion={"Western Europe"}
          capital={"Brussels"}
          topLevelDomain={".be"}
          currencies={"Euro"}
          languages={"Dutch, French, German"}
          borderCountries={['France','Germany','Netherlands']}
        />
      </div>
    </section>  
  )
}

export default Details
