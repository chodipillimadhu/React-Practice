import React from 'react'
import { userdata } from './data'
//  let sampleArray=["madhu","satya",1,2,{username:"venkat"}]
//  let details=[
//     {
//         name:"madhu",
//         age:25,
//         place:"vizag"
//     }
//  ]
debugger;
console.log(userdata)
const SampleArray = () => {

    //   return (
    //    <div>
    //     {
    //         details.map((item)=>{
    //             return(
    //                 <div>
    //                     <h2>my name is : {item.name}</h2>
    //                     <h2>my age is : {item.age}</h2>
    //                     <h2>my place is : {item.place}</h2>
    //                 </div>
    //             )
    //         })
    //     }
    //    </div>
    //   )
    return (
        <div >
           
            {userdata.map((user) => {
                return (
                    <div style={{border:"1px solid blue"}}>
                        <div>name  : {user.name}</div>
                        <div>username : {user.username}</div>
                        <div>email : {user.email}</div>
                    </div>
                    
                )
            })}
        </div>
    )
}

export default SampleArray