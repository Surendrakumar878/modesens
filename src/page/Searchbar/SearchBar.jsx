import { Box,  Button,  Drawer,  DrawerBody,  DrawerContent,  DrawerOverlay,  Image, Text, useDisclosure, Wrap, WrapItem } from '@chakra-ui/react';
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
    const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
    // const [size, setSize] = React.useState('')
    // const { isOpen, onOpen, onClose } = useDisclosure()
  
    // const handleClick = (newSize) => {
    //   setSize(newSize)
    //   onOpen()
    // }
  
    // const sizes = [ 'md']
  


  return (
    <Box > 
       {/* <Drawer onClose={onClose} isOpen={isOpen} size={size}></Drawer> */}
   <Box>
   
     <Box ref={btnRef} colorScheme='teal' onClick={onOpen}><SearchInput  queryHanlder={queryHanlder} /></Box> 
      <Drawer
      size="md"
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent h="250px">
        


          <DrawerBody h="400px">
         <SearchInput queryHanlder={queryHanlder}/>
       
<Wrap w="109%" ml="-22px"  boxShadow='dark-lg'  rounded='md' bg='white'   h="200px"   display={"flex"} justifyContent="space-around"  spacing={7} >
{suggestion.map((i)=>{
    return <Link to={`/details/${i.id}`}> <WrapItem   w='140px' h='200px' key={i.id} display="flex"
  flexDirection={"column"}  justifyContent="center" pl="20px"   > 

<Image w="50%" src={i.image} alt="" />
    <Text>{i.title}</Text> 
   
    
    </WrapItem></Link>
})}
</Wrap>

          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>

      
    </Box>
  )
}
