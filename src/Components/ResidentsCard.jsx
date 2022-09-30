import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ResidentsCard = ({url}) => {
    const [resident, setResident] = useState()

    useEffect(() => {
        axios.get(url)
            .then (res => setResident(res.data))
            .catch(err => console.log(err))
    }, [])
    
    

    return (
    <div>
        <header>
            <img src={resident?.image} alt="" />
            <div>
                <div className='circle'></div>
                <span>{`Status: ${resident?.status}`}</span>
            </div>
        </header>

        <section>
            <h2>{`Name: ${resident?.name}`}</h2>
            <h4>{`Species: ${resident?.species}`}</h4>
            <h4>{`Origin: ${resident?.origin.name}`}</h4>
            <h4>{`Appeard on:${resident?.episode.length} episode/s`} </h4>
        </section>
        
        
    </div>
    )
}

export default ResidentsCard