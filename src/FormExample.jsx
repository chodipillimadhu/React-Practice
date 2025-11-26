import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const FormExample = () => {
    
    const[username,setusername]=useState("");
    const getUsername=(e)=>{
        setusername(e.target.value)
    }
    const[newUserDetails,setuserDetails]=useState()

    const notify = () => toast("Successfully saved!");
    const updateUsername=(e)=>{
        e.preventDefault()
       setuserDetails(username)
        notify()
    }
  return (
    <section className='formsection'>
       <ToastContainer/>
        <div className='inputdiv'>
             <h2>{newUserDetails}</h2>
          <form onSubmit={updateUsername}>
              <input type="text" placeholder='Enter a name' onChange={getUsername}/>
            <br/>
           <button type='submit' onClick={updateUsername}>Submit</button>
          </form>
        </div>
         
    </section>
  )
}

export default FormExample