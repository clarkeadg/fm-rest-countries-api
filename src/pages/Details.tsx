import Layout from '../components/Layout/Layout'
import Button from '../components/Button/Button'
import { FaArrowLeftLong } from "react-icons/fa6";

const Details = () => {
  return (
    <Layout>
      <section className="px-8 md:px-[80px] pt-[40px] md:pt-[82px]">
        <div className="flex w-full items-center justify-between">
          <Button accessoryLeft={<FaArrowLeftLong />}>
            Back
          </Button>
        </div>
      </section>
    </Layout>    
  )
}

export default Details
