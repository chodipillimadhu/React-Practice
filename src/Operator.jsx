import React from 'react'

const Operator = () => {
    const obj1=["madhu","satya"]
     const obj2 =["venkat","chodipilli"]
     const res=[...obj1,...obj2]
     console.log(res)
  return (
    <div>
        {res}
    </div>
  )
}

export default Operator