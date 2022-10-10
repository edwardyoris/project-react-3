import React from 'react'
import './styles/Location.css'

const LocationInfo = ({location}) => {
  
  return (
    <article className='card__location-art'>
      <h2 className='card__location-h2'>{location?.name}</h2>
      <ul className='card__location-ul'>
        <li className='card__location-li'><span className='card__location-span'>Type: </span>{location?.type}</li>
        <li className='card__location-li'><span className='card__location-span'>Dimension: </span>{location?.dimension}</li>
        <li className='card__location-li'><span className='card__location-span'>Population: </span>{location?.residents.length}</li>
      </ul>
    </article>
  )
}

export default LocationInfo