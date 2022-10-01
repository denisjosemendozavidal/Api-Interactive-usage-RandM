import React, { useEffect, useState } from 'react'

const Filters = ({sugList}) => {

    const [showingTitle, setShowingTitle] = useState()

    useEffect (() => {
        if (sugList) {
            setShowingTitle("Or pick from any of these:")
        } else {
            setShowingTitle("")
        }

    }, [sugList])

    
    return (
      <ul className='suglist'>
      <p className='suglist-tittle'>{showingTitle}</p>
          {
              sugList?.map(location => (
                  <li key={location.id}>{`${location.name}`}</li>
              ))
          }
      </ul>
    )
  }

export default Filters

