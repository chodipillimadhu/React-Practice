import React, { useState } from 'react'

const PractriceForm = () => {
    const[username,setusername]=useState("")

    const getUsername=(e)=>{
        setusername(e.target.value)
    }
const[newusername,setnewusername]=useState()
const updateUsername=(e)=>{
    e.preventDefault()
        setnewusername(username)
    }
  return (
  <section>
      <div>
<form onSubmit={updateUsername}>
            <h2>{newusername}</h2>
        <input type='text' placeholder='enter a name' onChange={getUsername}></input>
        <br></br>
        <button type='submit' onClick={updateUsername}>Submit</button>
</form>
      </div>
  </section>
  )
}

export default PractriceForm