import React from 'react'

const Filters = ({sugList}) => {
    
    return (
      <ul className='suglist'>
          {
              sugList?.map(location => (
                  <li key={location.id}>{`${location.name}`}</li>
              ))
          }
      </ul>
    )
  }

export default Filters

