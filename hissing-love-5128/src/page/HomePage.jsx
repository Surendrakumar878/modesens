import { Box, Button, Heading, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";
import React, { useEffect } from "react";
// import Navbar from '../components/Navbar/Navbar'
import Carousel from "react-bootstrap/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getwomensdata } from "../Redux/AppReducer/action";

export const HomePage = () => {
  const womens = useSelector((store) => store.AppReducer.data)
    // console.log(mens)
    const dispatch = useDispatch()


    useEffect(() => {
      
        dispatch(getwomensdata())

    }, [])
    // console.log(mens)
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
          <Wrap  boxShadow='dark-lg' pt="100px"  pb="100px"  rounded='md' bg='white'   h="400px" w="950px" ml="200px" display={"flex"} justifyContent="space-around"  spacing={7} >
{womens.map((i)=>{
    return <Link to={`/details/${i.id}`}> <WrapItem  mb="110px"   w='140px' h='200px' key={i.id} display="flex"
  flexDirection={"column"}  justifyContent="center" pl="20px"   > 

<Image w="100%" src={i.image} alt="" />
    <Text>{i.title}</Text> 
   
    
    </WrapItem></Link>
})}
</Wrap>
        </Box>
      </Box>
      <Box textAlign={"center"}>
        <Box>
          <Heading>New To sale</Heading>
          <Wrap  boxShadow='dark-lg' pt="100px"  pb="100px"  rounded='md' bg='white'   h="400px" w="950px" ml="200px" display={"flex"} justifyContent="space-around"  spacing={7} >
{womens.map((i)=>{
    return <Link to={`/details/${i.id}`}> <WrapItem  mb="110px"   w='140px' h='200px' key={i.id} display="flex"
  flexDirection={"column"}  justifyContent="center" pl="20px"   > 

<Image w="100%" src={i.image} alt="" />
    <Text>{i.title}</Text> 
   
    
    </WrapItem></Link>
})}
</Wrap>
          <Button>SHOP MORE</Button>
        </Box>
      </Box>
      <Box textAlign={"center"}>
        <Box>
          <Heading>Special Offers</Heading>
          <Wrap  boxShadow='dark-lg' pt="100px"  pb="100px"  rounded='md' bg='white'   h="400px" w="950px" ml="200px" display={"flex"} justifyContent="space-around"  spacing={7} >
{womens.map((i)=>{
    return <Link to={`/details/${i.id}`}> <WrapItem  mb="110px"   w='140px' h='200px' key={i.id} display="flex"
  flexDirection={"column"}  justifyContent="center" pl="20px"   > 

<Image w="100%" src={i.image} alt="" />
    <Text>{i.title}</Text> 
   
    
    </WrapItem></Link>
})}
</Wrap>
          <Button>SEE MORE</Button>
        </Box>
      </Box>
      <Box textAlign={"center"}>
        <Box>
          <Heading>Trending Now</Heading>
          <Wrap  boxShadow='dark-lg' pt="100px"  pb="100px"  rounded='md' bg='white'   h="400px" w="950px" ml="200px" display={"flex"} justifyContent="space-around"  spacing={7} >
{womens.map((i)=>{
    return <Link to={`/details/${i.id}`}> <WrapItem  mb="110px"   w='140px' h='200px' key={i.id} display="flex"
  flexDirection={"column"}  justifyContent="center" pl="20px"   > 

<Image w="100%" src={i.image} alt="" />
    <Text>{i.title}</Text> 
   
    
    </WrapItem></Link>
})}
</Wrap>
          <Button>SHOP MORE</Button>
        </Box>
      </Box>
      <Box>
        <Box textAlign={"center"}>
          <Heading>Recently Viewed</Heading>
          <Wrap  boxShadow='dark-lg' pt="100px"  pb="100px"  rounded='md' bg='white'   h="400px" w="950px" ml="200px" display={"flex"} justifyContent="space-around"  spacing={7} >
{womens.map((i)=>{
    return <Link to={`/details/${i.id}`}> <WrapItem  mb="110px"   w='140px' h='200px' key={i.id} display="flex"
  flexDirection={"column"}  justifyContent="center" pl="20px"   > 

<Image w="100%" src={i.image} alt="" />
    <Text>{i.title}</Text> 
   
    
    </WrapItem></Link>
})}
</Wrap>
          <Button>MORE</Button>
        </Box>
      </Box>
      <Box>
        <Box textAlign={"center"}>
          <Heading>Community Posts</Heading>
          <Box>
            <img src="https://cdn.modesens.com/umedia/1707011s?w=400" alt="" />
          </Box>
          <Button>VIEW ALL</Button>
        </Box>
      </Box>
      <Box w={{lg:"100%"}} display={"flex"}>
        <Box w="50%" textAlign={"center"}>
          <Heading>Download the ModeSens App</Heading>
          <Text>A seamless experience that takes your style
to the next level.</Text>
          <img src="https://cdn.modesens.com/static/img/20220826appdownload_en.svg" alt="" />
        </Box>
        <Box w="50%" textAlign={"center"}>
          <Heading>Download the ModeSens App</Heading>
          <Text>Get timely, accurate product information
every time you browse.</Text>
          <img src="https://cdn.modesens.com/static/img/20211109downloadright.png" alt="" />
        </Box>
      </Box>
    </Box>
  );
};
