import { Input } from '@chakra-ui/react';
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
    
        <Input variant='flushed' type="text" placeholder='Search by keyword or store URL' value={input} onChange={handleTnput} />
  
  )
}
