import React from 'react';
import CardData from './CardData';
import './Card.css';

const Card = ({monsters}) => {
  return (
    <div className='monster-container'>
        {
            monsters.map((monster) => {
                return <CardData key={monster.id} name={monster.name} email={monster.email} id={monster.id}/>
            })
        }
    </div>
  )
}

export default Card