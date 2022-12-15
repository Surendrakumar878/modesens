import React, { useEffect, useState } from 'react'

export const SearchInput = ({queryHanlder}) => {
    const [input,setInput]=useState("");
    const handleTnput=(e)=>{
        setInput(e.target.value)
    }
    useEffect(()=>{
        queryHanlder(input)

    },[queryHanlder,input])
  return (
    <div><h1>input</h1>
        <input type="text" placeholder='inpur' value={input} onChange={handleTnput} />
    </div>
  )
}
