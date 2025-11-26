import React, { useEffect, useState } from 'react'
 let userdetails="https://jsonplaceholder.typicode.com/posts";
 console.log("i am link :  ",userdetails);
const UserPage = () => {
   const[user,setuser]=useState([]);
    const userhandler= async()=>{
        const response= await fetch(userdetails);
        const newdata= await response.json();
        setuser(newdata)
    }
    useEffect(()=>{
console.log(userhandler());
    },[]);
    console.log("your data is ",user);
   
    
  return (
    <div>
        {user.map((item)=>{
            return(
                <div className="usersection">
                    <h2>{item.title}</h2>
                     <h5>{item.body}</h5>
                </div>
            )
        })}
    </div>
  )
}

export default UserPage