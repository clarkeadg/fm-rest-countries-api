import axios from 'axios';

const api = axios.create({
  baseURL: 'https://restcountries.com/v3.1'
});

const CountriesAPI = {

  getAll: async () => {
    const { data } = await api.get(`/all`);
    return data;
  },

  getByRegion: async (region:string) => {
    const { data } = await api.get(`/region/${region}`);
    return data;
  },

  getByName: async (name:string) => {
    const { data } = await api.get(`/name/${name}?fullText=true`);
    if (data && data[0])
    return data[0];
  },

  getByCodes: async (codes:string) => {
    const { data } = await api.get(`/alpha?codes=${codes}`);
    return data;
  }
}

export default CountriesAPI;
