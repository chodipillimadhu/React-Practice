import React, { useState } from 'react'

const Employee = () => {
    const[name,setname]=useState("")
     const[role,setrole]=useState("")
      const[email,setemail]=useState("")
       const[dept,setdept]=useState("")

  
       const empdetails={name,role,email,dept}
       const formhandle= async(e)=>{
        e.preventDefault()
        console.log(empdetails)
        const response=await fetch("http://localhost:5000/api/employee",{
         method:"POST",
         headers:{
            "Content-Type": "application/json"
         },
         body:JSON.stringify(empdetails)
        });
        const result=await response.json();
        console.log("Api Response:",result);
       }


  return (
   <div className="empForm">
    <div className="sectionForm">
        <form onSubmit={formhandle}>
            <label>Employee Name</label>
            <input type='text' name='name' onChange={(e)=>setname(e.target.value)} placeholder='Enter a name'></input>
            <br></br>
               <label>Employee Role</label>
            <input type='text' name='role' onChange={(e)=>setrole(e.target.value)} placeholder='Enter a Role'></input>
               <br></br>
               <label>Employee Email</label>
            <input type='text' name='email' onChange={(e)=>setemail(e.target.value)} placeholder='Enter a Email'></input>
               <br></br>
               <label>Employee Department</label>
            <input type='text' name='dept' onChange={(e)=>setdept(e.target.value)} placeholder='Enter a Department'></input>
             <br></br>
            <button type='submit'>Submit</button>
        </form>
    </div>
   </div>
  )
}

export default Employee