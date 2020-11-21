const base_url = "https://restcountries.eu/rest/v2/"

export const getAllCountries = () => {
      const allCountries = `${base_url}all`
      return allCountries
}

export const getCountry = (id) => {
      const country = `${base_url}alpha/${id}`
      return country
}


