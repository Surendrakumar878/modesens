import { Box, Button, Center, Heading, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";
import React, { useEffect } from "react";
// import Navbar from '../components/Navbar/Navbar'
import Carousel from "react-bootstrap/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getdata, getwomensdata } from "../Redux/AppReducer/action";

export const HomePage = () => {
  const data = useSelector((store) => store.AppReducer.data)
    // console.log(mens)
    const womens=data.filter((i)=>i.category==="womens")
    const special=data.filter((i)=>i.rating.rate>4)
    const dispatch = useDispatch()


    useEffect(() => {
      
        dispatch(getdata())

    }, [])
    console.log(data)
  return (
    <Box>
      <Box>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://modesens.com/banner/14422/getimg/?img=%2Fbanner%2F20221206Nordstorm-JingLeng1140x400_1670304216.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://modesens.com/banner/14475/getimg/?img=%2Fbanner%2F20221213-modesens-D2-1140x400-EN.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://modesens.com/banner/14509/getimg/?img=%2Fbanner%2F20221215-modesens-Moda-1140x400-F-EN.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Box>
      <Box textAlign={"center"}>
        <Heading >New Partners and Designers</Heading>
        <Box>
          Check out the new retail partners and brands who just joined the
          ModeSens family.
        </Box>
        <Box>
          <Carousel>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src="https://modesens.com/banner/14422/getimg/?img=%2Fbanner%2F20221206Nordstorm-JingLeng1140x400_1670304216.png"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src="https://modesens.com/banner/14475/getimg/?img=%2Fbanner%2F20221213-modesens-D2-1140x400-EN.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://modesens.com/banner/14509/getimg/?img=%2Fbanner%2F20221215-modesens-Moda-1140x400-F-EN.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Box>
      </Box>
      <Box>
        <Box textAlign={"center"}>
          <Heading>Shop Women</Heading>
          <Wrap  boxShadow='dark-lg' pt="10px"  pb="10px"   bg='white'   h="400px" w="1150px" ml="100px" display={"flex"} justifyContent="space-around"  spacing={7} >
{womens.map((i)=>{
    return <Link to={`/details/${i.id}`}> <WrapItem  mb="110px" ml="10px"  w='195px' h='auto' border={"1px solid red"} key={i.id} display="flex"
  flexDirection={"column"}  justifyContent="center"    > 

<Box border={"1px solid red"} h="250px" w="100%" >
  
  <Image w="70%" src={i.image} alt="" />
  </Box> 
  <Box border={"1px solid red"} h="100px" w="100%" >

    <Text>{i.title}</Text> 
  </Box>
   
    
    </WrapItem></Link>
})}
</Wrap>
        </Box>
      </Box>
      <Box textAlign={"center"}>
        <Box>
          <Heading>New To sale</Heading>
          <Wrap  boxShadow='dark-lg' pt="10px"  pb="10px"   bg='white'   h="400px" w="1150px" ml="100px" display={"flex"} justifyContent="space-around"  spacing={7} >
{data.map((i)=>{
    return <Link to={`/details/${i.id}`}> <WrapItem  mb="110px" ml="10px"  w='195px' h='auto' border={"1px solid red"} key={i.id} display="flex"
  flexDirection={"column"}  justifyContent="center"    > 

<Box border={"1px solid red"} h="250px" w="100%" >
  
  <Image w="70%" src={i.image} alt="" />
  </Box> 
  <Box border={"1px solid red"} h="100px" w="100%" >

    <Text>{i.title}</Text> 
  </Box>
   
    
    </WrapItem></Link>
})}
</Wrap>
          <Button>SHOP MORE</Button>
        </Box>
      </Box>
      <Box textAlign={"center"}>
        <Box>
          <Heading>Special Offers</Heading>
          <Wrap  boxShadow='dark-lg' pt="10px"  pb="10px"   bg='white'   h="400px" w="1150px" ml="100px" display={"flex"} justifyContent="space-around"  spacing={7} >
{special.map((i)=>{
    return <Link to={`/details/${i.id}`}> <WrapItem  mb="110px" ml="10px"  w='195px' h='auto' border={"1px solid red"} key={i.id} display="flex"
  flexDirection={"column"}  justifyContent="center"    > 

<Box border={"1px solid red"} h="250px" w="100%" >
  
  <Image w="60%" src={i.image} alt="" />
  </Box> 
  <Box border={"1px solid red"} h="100px" w="100%" >

    <Text>{i.title}</Text> 
  </Box>
   
    
    </WrapItem></Link>
})}
</Wrap>
          <Button>SEE MORE</Button>
        </Box>
      </Box>
      <Box textAlign={"center"}>
        <Box>
          <Heading>Trending Now</Heading>
          <Wrap  boxShadow='dark-lg' pt="10px"  pb="10px"   bg='white'   h="400px" w="1150px" ml="100px" display={"flex"} justifyContent="space-around"  spacing={7} >
{womens.map((i)=>{
    return <Link to={`/details/${i.id}`}> <WrapItem  mb="110px" ml="10px"  w='195px' h='auto' border={"1px solid red"} key={i.id} display="flex"
  flexDirection={"column"}  justifyContent="center"    > 

<Box border={"1px solid red"} h="250px" w="100%" >
  
  <Image w="70%" src={i.image} alt="" />
  </Box> 
  <Box border={"1px solid red"} h="100px" w="100%" >

    <Text>{i.title}</Text> 
  </Box>
   
    
    </WrapItem></Link>
})}
</Wrap>
          <Button>SHOP MORE</Button>
        </Box>
      </Box>
      <Box>
        <Box textAlign={"center"}>
          <Heading>Recently Viewed</Heading>
          <Wrap  boxShadow='dark-lg' pt="10px"  pb="10px"   bg='white'   h="400px" w="1150px" ml="100px" display={"flex"} justifyContent="space-around"  spacing={7} >
{womens.map((i)=>{
    return <Link to={`/details/${i.id}`}> <WrapItem  mb="110px" ml="10px"  w='195px' h='auto' border={"1px solid red"} key={i.id} display="flex"
  flexDirection={"column"}  justifyContent="center"    > 

<Box border={"1px solid red"} h="250px" w="100%" >
  
  <Image w="70%" src={i.image} alt="" />
  </Box> 
  <Box border={"1px solid red"} h="100px" w="100%" >

    <Text>{i.title}</Text> 
  </Box>
   
    
    </WrapItem></Link>
})}
</Wrap>
          <Button>MORE</Button>
        </Box>
      </Box>
      <Box>
        <Box textAlign={"center"}>
          <Heading>Community Posts</Heading>
          <Box p='50px' w={"100%"} display={"flex"} justifyContent="space-around" >
            <Image w="15%" src="https://cdn.modesens.com/umedia/1707011s?w=400" alt="" />
            <Image w="15%" src="https://cdn.modesens.com/umedia/1707018s?w=400" alt="" />
            <Image w="15%" src="https://cdn.modesens.com/umedia/1707030s?w=400" alt="" />
            <Image w="15%" src="https://cdn.modesens.com/umedia/1707141s?w=400" alt="" />
          </Box>
          <Button>VIEW ALL</Button>
        </Box>
      </Box>
      <Box textAlign={"center"} w={{lg:"100%"}} display={"flex"} justifyContent="space-around" >
        <Box w="30%" alignItems={"center"} >
          <Heading>Download the ModeSens App</Heading>
          <Text>A seamless experience that takes your style
to the next level.</Text>
<Button borderRadius={0} bg={"black"} color="white">DOWNLOAD NOW</Button>
<Center>

          <Image  src="https://cdn.modesens.com/static/img/20220826appdownload_en.svg" alt="" />
</Center>
        </Box>
        <Box w="30%">
          <Heading>Download the ModeSens App</Heading>
          <Text>Get timely, accurate product information
every time you browse.</Text>
<Button borderRadius={0} bg={"black"} color="white">INSTALL NOW</Button>
<Center>

          <img src="https://cdn.modesens.com/static/img/20211109downloadright.png" alt="" />
</Center>
        </Box>
      </Box>
    </Box>
  );
};
