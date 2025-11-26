import React, { useEffect, useState } from 'react'

function EventListners() {
    // const ReSize=()=>{
       
    // }
     const[screensize,setscreensize]=useState({
            width:window.innerWidth,
            height:window.innerHeight
        })
     const updatescreensize=()=>{
       setscreensize({
            width:window.innerWidth,
            height:window.innerHeight
        })
    }
    useEffect(()=>
    {
        window.addEventListener('resize',updatescreensize);
        return()=>{
            window.removeEventListener('resize',updatescreensize)
        }
    },[]);
  return (
    <div><h1>Screen Resize Examples</h1>
    <p>Resize the window to see the screen</p>
    <p style={{color:"red"}}>width:{screensize.width}px</p>
     <p style={{color:"red"}}>height:{screensize.height}px</p>
    </div>
  )
}

export default EventListners