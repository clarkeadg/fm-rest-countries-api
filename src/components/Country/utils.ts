
export const getCode = (data:any) => {
  return data.cca3;
}

export const getFlag = (data:any) => {
  return data.flags.svg || data.flags.png;
}

export const getName = (data:any) => {
  return data.name.common;
}

export const getPopulation = (data:any) => {
  return data.population.toLocaleString()
}

export const getNativeName = (data:any) => {
  let nativeName = "";
  for(let i in data.name.nativeName) {
    nativeName = data.name.nativeName[i].common;
  };
  return nativeName
}

export const getCurrencies = (data:any) => {
  const currencies:string[] = [];
  for(let i in data.currencies) {
    currencies.push(data.currencies[i].name)
  };
  return currencies.toString();
}

export const getLanguages = (data:any) => {
  const languages:string[] = [];
  for(let i in data.languages) {
    languages.push(data.languages[i])
  }
  return languages.toString();
}

export const getBorderCountries = (data:any) => {
  const borderCountries:string[] = [];
  for(let i in data) {
    borderCountries.push(getName(data[i]))
  }
  return borderCountries
}

export default {
  getCode,
  getFlag,
  getName,
  getPopulation,
  getNativeName,
  getCurrencies,
  getLanguages,
  getBorderCountries
}