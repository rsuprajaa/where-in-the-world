import React, {useState, useEffect} from 'react'
import axios from 'axios'
//COMPONENTS
import Card from '../components/Card'
import Search from '../components/Search'
import Loader from 'react-loader-spinner'
//DATA FROM API
import { getAllCountries } from '../api'

const Home = ({darkmode}) => {
      const [countries, setCountries] = useState([])
      const [term, setTerm] = useState('')
      const [isLoading, setLoading] = useState(true)
      useEffect(() => {
            const getCountries = async () => {
                  const { data } = await axios.get(getAllCountries())
                  const searchCountries = data.filter((country) => (
                        country.name.toLowerCase().startsWith(term.toLowerCase())
                  ))
                  setCountries(searchCountries)
                  setLoading(false)
            }
            getCountries()
      }, [term])
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
            <main>
                  <Search term={term} setTerm={setTerm}/>
                  <div className="cards">
                        {
                              countries.map((country) => (
                                    <Card key = {country.name} 
                                          image={country.flag} 
                                          name={country.name}
                                          capital = {country.capital} 
                                          population={country.population}
                                          region={country.region}
                                          id = {country.alpha3Code}
                                    
                                    />
                              ))
                        }
                        
                  </div>
                  </main>
      )
}

export default Home
