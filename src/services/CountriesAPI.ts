import fetchData from "../lib/fetchData"

const host = "https://restcountries.com/v3.1";

const CountriesAPI = {

  getAll: () => fetchData(`${host}/all`),

  getByRegion: (region:string) => fetchData(`${host}/region/${region}`),

  getByName: (name:string) => fetchData(`${host}/name/${name}`)  
}

export default CountriesAPI;
