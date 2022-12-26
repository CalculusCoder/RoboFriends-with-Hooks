import React from 'react'

const SearchField = ({onSearchChange}) => {
  return (
    <div>
        <input onChange={onSearchChange} className='search' type="text" name="talk" id="/" placeholder='Search Robots' />
    </div>
  )
}

export default SearchField