import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import './styles/CardResident.css'

const CardResidents = ({ url }) => {
    const [resident, setresident] = useState()

    useEffect(() => {
        axios.get(url)
            .then(res => setresident(res.data))
            .catch(err => console.log(err))

    }, [])

    return (
        <article className='card__art-1'>
            <header className='card__header'>
                <img className='card__img' src={resident?.image} alt="Imagen" />
                <div className='card__container'>
                    <div className={`card__status-circle ${resident?.status}`}></div>
                    <span className='card__status-text'>{resident?.status}</span>
                </div>
            </header>
            <section className='card__sec-1'>
                <h3 className='card__name'>{resident?.name}</h3>
                <ul className='card__container-ul'>
                    <li className='card__li'><span className='card__span'>Species: </span>{resident?.species}</li>
                    <li className='card__li'><span className='card__span'>Origin: </span>{resident?.origin.name}</li>
                    <li className='card__li'><span className='card__span'>Episodes where it appears: </span>{resident?.episode.length}</li>
                </ul>
            </section>
        </article>
    )
}

export default CardResidents