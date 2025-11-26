import React, { useState,useEffect } from 'react'

function Statemg() {
    const[city,setcity]=useState("hyderabad")
     useEffect(() => {
    console.log("Rendered city:", city);
  });
   useEffect(() => {
  if (city === "hyderabad") {
    setcity("Banglore");
  } else {
    setcity("chennai");
  }
}, [city]);
   
  return (
    <div>{city}</div>
  )
}

export default Statemg