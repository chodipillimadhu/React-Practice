import React from 'react'

function Fourthcomponent(props) {
    const{model,year,make}=props.mycar
  return (
    <div className='fourthcontainer'>
        <div>model :  {model}</div>
        <div>year : {year}</div>
        <div>make : {make}</div>
    </div>
  )
}

export default Fourthcomponent