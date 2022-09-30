import React from 'react'

const LocationCard = ({info}) => {

    
    

    return (
    <div>
        <h2>{`Location: ${info?.name}`}</h2>
        <ul>
            <li>{`Type: ${info?.type}`}</li>
            <li>{`Dimension: ${info?.dimension}`}</li>
            <li>{`Population: ${info?.residents.length}`}</li>
        </ul>
    </div>
    )
}

export default LocationCard