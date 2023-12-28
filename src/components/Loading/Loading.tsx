import { memo } from 'react'
import { ImSpinner2 } from "react-icons/im";
import './Loading.css'

const Loading = () => {
  return (
    <div className="loading flex w-full items-center justify-center h-32">
      <div className="">
        <ImSpinner2 className="animate-spin h-10 w-auto"/>
      </div>
    </div>
  )
}

export default memo(Loading)
