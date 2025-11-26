
import React from 'react'


function Firstcomponent(props) {
    console.log(props)
  return (
    <div className='cont'>name:{props.name}</div>
  )
}

export default Firstcomponent