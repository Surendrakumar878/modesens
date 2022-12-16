import { Box,  Image, Text, Wrap, WrapItem } from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getdata } from '../../Redux/AppReducer/action';
import { SearchInput } from './SearchInput'

export const SearchBar = () => {
    const [show,setShow]=useState("none")
    const dispatch = useDispatch();
    const data=useSelector((store) => {
        return store.AppReducer.data;
      });
     
    const [query,setQuery]=useState("")
    const [suggestion,setSuggestion]=useState([]);
    const queryHanlder=useCallback((val)=>{
        setQuery(val)

    },[])

    useEffect(()=>{
        dispatch(getdata())},[])
    useEffect(()=>{
        // dispatch(getdata())
        if(query===""){
            setSuggestion([])
        }else{
            let text=query.trim().toLowerCase()
            let newSugg=data.filter((i)=>{
                return i.title.toLowerCase().indexOf(text)===-1?true:false;
            })
            setSuggestion(newSugg)
            console.log("hell",newSugg)
        }
    },[query])
   
  return (
    <Box > <h1 >SearchBar{query}</h1> 

      <Box  onClick={()=>setShow("")}>  <SearchInput queryHanlder={queryHanlder}/></Box>
        <Box display={show}>
<Wrap  boxShadow='dark-lg'  rounded='md' bg='white'   h="200px" w="650px" ml="600px" display={"flex"} justifyContent="space-around"  spacing={7} >
{suggestion.map((i)=>{
    return <Link to={`/details/${i.id}`}> <WrapItem   w='140px' h='200px' key={i.id} display="flex"
  flexDirection={"column"}  justifyContent="center" pl="20px"   > 

<Image w="50%" src={i.image} alt="" />
    <Text>{i.title}</Text> 
   
    
    </WrapItem></Link>
})}
</Wrap>
</Box>
    </Box>
  )
}
