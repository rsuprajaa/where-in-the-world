import React from 'react'
const Search = ({term, setTerm}) => {
      
      const changeHandler = (e) => {
            setTerm(e.target.value)
      }
      return (
            <div>
                  <input type='text' placeholder='Search for a country ...' onChange={changeHandler} className = "search-bar"/>
            </div>
      )
}

export default Search
