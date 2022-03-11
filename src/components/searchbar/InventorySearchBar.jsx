import React, { useState } from 'react'
import './inventorysearchbar.css'
import SearchIcon from '@material-ui/icons/Search'
import ClosedIcon from '@material-ui/icons/Close'
import { useNavigate } from 'react-router'

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState('')

  const filterHandler = (event) => {
    const searchWord = event.target.value
    setWordEntered(searchWord)
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase())
    })

    if (searchWord === '') {
      setFilteredData([])
    } else {
      const uniqueNewFilter = [
        ...new Map(newFilter.map((item) => [item['name'], item])).values(),
      ]
      setFilteredData(uniqueNewFilter)
    }
  }
  const clearInput = () => {
    setFilteredData([])
    setWordEntered('')
  }
  let navigate = useNavigate()
  const searchItem = (event) => {
    navigate('/inventory/' + event.target.innerText)
    clearInput()
  }
  return (
    <div className='search'>
      <div className='searchInput'>
        <input
          type='text'
          placeholder={placeholder}
          value={wordEntered}
          onChange={filterHandler}
        />
        <div className='searchIcon'>
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <ClosedIcon id='clearBtn' onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className='dataResult'>
          {filteredData.map((value, key) => {
            return (
              <a className='dataItem' onClick={searchItem}>
                <p key={value.id}>{value.name}</p>
              </a>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default SearchBar
