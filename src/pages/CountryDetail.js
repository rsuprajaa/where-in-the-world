import React, {useState, useEffect} from 'react'
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios'
import Loader from 'react-loader-spinner'
// DATA FROM API
import { getCountry } from '../api'

const CountryDetail = () => {
      const {location} = useHistory()
      const id = location.pathname.split('/')[2]
      const [country, setCountry] = useState([])
      const [isLoading, setLoading] = useState(true)
      useEffect(() => {
            const getCountryDetail = async() => {
                  const response = await axios.get(getCountry(id))
                  setCountry(response.data) 
                  setLoading(false)
            }
            getCountryDetail()
      }, [country, id])

      return isLoading ? (<main>
            <Loader
            type="Oval"
            color="#00BFFF"
            height={50}
            width={50}
            timeout={1000}
            className = "loader"
            />
            </main>) : (
            <>
            <Link to ='/'>
                   <button className = "btn"><i className="fas fa-arrow-left"></i>  Back</button>
            </Link>
            <main className = "country-detail">
                  <div className="flag">
                        <img src = {country.flag} alt = {`${country.name}Flag`} className = "flag--img"/>
                  </div>
                  <div className="country-detail__description">
                        <h2>{country.name}</h2>
                        <div className='detail'>
                              <span className = "country-detail__subheading">Native Name: </span>{country.nativeName}
                        </div>
                        <div className='detail'>
                              <span className = "country-detail__subheading">Population: </span>{country.population}
                        </div>
                        <div className='detail'>
                              <span className = "country-detail__subheading">Region: </span>{country.region}
                        </div>
                        <div className='detail'>
                              <span className = "country-detail__subheading">Sub Region: </span>{country.subregion}
                        </div>
                        <div className='detail'>
                              <span className = "country-detail__subheading">Capital: </span>{country.capital}
                        </div>
                        <div className='detail'>
                              <span className = "country-detail__subheading">Top Level Domain: </span>{country.topLevelDomain}
                        </div>
                        <div className='detail'>
                              <span className = "country-detail__subheading">Currencies: </span>
                              {country.currencies.map((curr, idx) => (
                                    (idx ? ', ' : '') + curr.name
                              ))}
                        </div>
                        <div className='detail'>
                              <span className = "country-detail__subheading">Languages: </span>
                              {country.languages.map((lang, idx) => (
                                    (idx ? ', ' : '') + lang.name
                              ))}
                        </div>
                        <div className='detail'>
                              <span className = "country-detail__subheading">Border Countries: </span>
                              {country.borders.map((country, idx) => (
                                    <Link to = {`/countries/${country}`}>
                                    <span className="country-detail__tag" key = {country}>
                                          {country}
                                          </span>
                                    </Link>
                              ))}</div>
                  </div>
                  </main>
            </>)
}

export default CountryDetail
