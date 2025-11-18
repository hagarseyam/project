import React, { useState } from 'react'

function Counter() {
   const [count,setCount]= useState(0);
  

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="shadow-lg p-6 rounded-lg text-center space-y-4 w-64">
        <p className="text-xl font-semibold">Count:{count}</p>
        <button onClick={()=>{
           setCount(
           (prevCount)=>{ prevCount+1;
           }); 
        }} >
          Increase
        </button>
        <button onClick={()=>{
           setCount(
           (prevCount)=>{
            return prevCount-1;
           }); 
        }}>
          Decrease
        </button>
        <button onClick={()=>{
           setCount(0); 
        }}>
          Reset
        </button>

      </div>
    </div>
  )
}

export default Counter






