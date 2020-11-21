import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({name, image, region, population, capital, id}) => {
      return (
            <div className = 'card'>
                  <Link to={`/countries/${id}`}>
                        <img src={image} alt={`${name}Flag`}/>
                        <div className="card__description">
                              <h3>{name}</h3>    
                              <div className = 'detail'><span className = "subheading">Population: </span>{population}</div>
                              <div className = 'detail'><span className = "subheading">Region: </span>{region}</div>
                              <div className='detail'><span className = "subheading">Capital: </span>{capital}</div>
                        </div>
                  </Link>
            </div>
      )
}

export default Card
