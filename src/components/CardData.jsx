import React from 'react'
import './cardData.css'

const CardData = ({ name, email, id }) => {
  return (
    <div className='container'>
        <div className='card-container'>
            <div><img className='img-container' src={`https://robohash.org/${id}?set=set2`} alt="monsters" /></div>
            <div className='name'>{name}</div>
            <div className='email'>{email}</div>
        </div>
    </div>
  )
}

export default CardData