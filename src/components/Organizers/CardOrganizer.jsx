import React from 'react'
import './CardOrganizer.css'
const CardOrganizer = ({imageUrl}) => {
  return (
    <div className='organizer'>
    <div className='imgOrganizer' style={{backgroundImage: `url(${imageUrl})`}}></div>
    </div>
  )
}

export default CardOrganizer