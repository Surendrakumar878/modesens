import { Box } from '@chakra-ui/react'
import React from 'react'
// import Navbar from '../components/Navbar/Navbar'
import Carousel from 'react-bootstrap/Carousel';

export const HomePage = () => {
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
<Box>
<Box>New Partners and Designers</Box>
<Box>Check out the new retail partners and brands who just joined the ModeSens family.</Box>

</Box>


    </Box>
   
  )
}
