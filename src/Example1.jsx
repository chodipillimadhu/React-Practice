// import React, { useState } from 'react'
import React, { useEffect,useState } from 'react'

function Example1() {
    const[city,setcity]=useState("hyd")
    useEffect(()=>{
        setTimeout(() => {
           setcity("bang") 
        }, 3000);
    },[]);
  return (
    <div><h1>{city}</h1></div>
  )
}

export default Example1