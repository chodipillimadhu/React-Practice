import React, { useEffect, useReducer } from 'react'
//  types
const FETCH_INIT="FETCH_INIT";
const FETCH_START="FETCH_START";
const FETCH_ERROR="FETCH_ERROR";
const initialstate={
        loading:true,
        data:null,
        error:null
}
const DataReducer = (state, action) => {
    switch (action.type) {
        case FETCH_INIT:
            return {...state, loading: true, error: null}
        case FETCH_START:
            return {...state, loading: false, data: action.payload}
        case FETCH_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
         return state;
    }
}

const Multistate = () => {
    const[state,dispatch]=useReducer(DataReducer,initialstate)
    const DataHandler=async()=>{
       try {
         dispatch({type:FETCH_INIT})
        const response=await fetch("https://jsonplaceholder.typicode.com/users")
        const newData=await response.json()
        dispatch({type:FETCH_START,payload:newData})
       } catch (error) {
              dispatch({type:FETCH_ERROR,payload:error})
       }
    }
    useEffect(()=>{
        DataHandler()
//    console.log( "result",DataHandler())
},[])
  return (
    <div>
        {state.loading && <p>Loading....</p>}
          {state.data &&
              <div>
                  {state.data.map((item) => {
                      return (
                          <div>
                              <h2>{item.name}</h2>
                          </div>
                      )
                  })}

              </div>
          }
          {state.error && 
          <div>
            {alert(state.error)}
          </div>
          }
    </div>
  )
}

export default Multistate