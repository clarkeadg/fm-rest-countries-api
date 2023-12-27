import { memo, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import './SearchForm.css'

type SearchFormProps = {

}

const SearchForm = ({  }:SearchFormProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e:React.SyntheticEvent) => {
    e.preventDefault();
  }
  
  return (
    <div className={"search-form px-10 md:px-9 rounded-md shadow w-[480px] max-w-full mb-11 md:mb-0"}>
      <form onSubmit={handleSubmit} data-testid="search-form" className="flex items-center gap-6 md:gap-4">        
        <FaSearch className="text-[14px] md:text-[17px]"/>        
        <div className="flex grow">
          <input
            value={query}
            onChange={(e)=>{ setQuery(e.target.value)}}
            className="text-[12px] md:text-[15px] leading-none px-2 py-4 md:py-5 w-full focus:outline-none mt-[2px]"
            type="text"
            placeholder="Search for a country..."
            data-testid="search-input"
          />
        </div>
      </form>
    </div>
  )
}

export default memo(SearchForm)
