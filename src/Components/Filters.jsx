import React, { useEffect, useState } from 'react'

const Filters = ({sugList, setDesiredLocation}) => {

 /*this is to add a suggestion on top of the sugList so user knows what he is supposed to do with it*/    
    const [showingTitle, setShowingTitle] = useState()

    useEffect (() => {
        if (sugList) {
            setShowingTitle("Or pick from any of these:")
        } else {
            setShowingTitle("")
        }

    }, [sugList])


 /*This is to create a new API request once the user clicks on the sugList item */    
    const handleClick = id => setDesiredLocation(id);
    

    
    return (
      <ul className='suglist'>
      <p className='suglist-tittle'>{showingTitle}</p>
          {
              sugList?.map(location => (
                  <li onClick={() => handleClick(location.id)} key={location.id}>{`${location.name}`}</li>
              ))
          }
      </ul>
    )
  }

export default Filters

