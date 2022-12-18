import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  Image,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
// import Navbar from '../components/Navbar/Navbar'
import Carousel from "react-bootstrap/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getdata, getwomensdata } from "../Redux/AppReducer/action";

export const HomePage = () => {
  const data = useSelector((store) => store.AppReducer.data);
  const [show, setShow] = useState("400px");
  const [see, setSee] = useState("400px");
  const [more, setMore] = useState("400px");
  const [showStatus, setShowStatus] = useState(true);
  const womens = data.filter((i) => i.category === "womens");
  const special = data.filter((i) => i.rating.rate > 4);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getdata());
  }, []);
  console.log(data);
  return (
    <Box pos="ralative" w={{ lg: "100%", md: "100%", sm: "100%" }}>
      <Box>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://modesens.com/banner/14422/getimg/?img=%2Fbanner%2F20221206Nordstorm-JingLeng1140x400_1670304216.png"
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://modesens.com/banner/14475/getimg/?img=%2Fbanner%2F20221213-modesens-D2-1140x400-EN.jpg"
              alt="Second slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://modesens.com/banner/14509/getimg/?img=%2Fbanner%2F20221215-modesens-Moda-1140x400-F-EN.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Box>

      {/* New Partners and Designers */}
      <Box textAlign={"center"}>
        <Box fontSize={{ lg: "34px", md: "34px", sm: "34px" }}>
          Featured Partners
        </Box>
        <Box fontSize={{ lg: "24px", md: "24px", sm: "24px" }} color="gray.400">
          Compare across our 500+ partner stores to find the products you want
          at the best price.
        </Box>
        <Box>
          <Carousel>
            <Carousel.Item>
              <Grid templateColumns="repeat(6, 1fr)" gap={4} p={10}>
                <GridItem w="100%" h="auto">
                  {" "}
                  <Image
                    w="90%"
                    src="https://cdn.modesens.com/banner/20220708-SSENSE-logo.png"
                    alt=""
                  />{" "}
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <Image
                    w="90%"
                    src="https://cdn.modesens.com/banner/20220708-NET-A-PORTER-logo.png"
                    alt=""
                  />{" "}
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <Image
                    w="90%"
                    src="https://cdn.modesens.com/banner/20220708-FARFETCH-logo.png"
                    alt=""
                  />{" "}
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <Image
                    w="90%"
                    src="https://cdn.modesens.com/banner/20220708-NORDSTROM-logo.png"
                    alt=""
                  />{" "}
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <Image
                    w="90%"
                    src="https://cdn.modesens.com/banner/20220708-MATCHESFASHION-logo.png"
                    alt=""
                  />{" "}
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <Image
                    w="90%"
                    src="https://cdn.modesens.com/banner/20220708-SAKS-FIFTH-AVENUE-logo.png"
                    alt=""
                  />{" "}
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <Image
                    w="90%"
                    src="https://cdn.modesens.com/banner/20220708-MYTHERESA-logo.png"
                    alt=""
                  />{" "}
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <Image
                    w="90%"
                    src="https://cdn.modesens.com/banner/20220708-SHOPBOP-logo.png"
                    alt=""
                  />{" "}
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <Image
                    w="90%"
                    src="https://cdn.modesens.com/banner/20220708-ITALIST-logo.png"
                    alt=""
                  />{" "}
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <Image
                    w="90%"
                    src="https://cdn.modesens.com/banner/20220708-CETTIRE-logo.png"
                    alt=""
                  />{" "}
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <Image
                    w="90%"
                    src="https://cdn.modesens.com/banner/20220708-LUISAVIAROMA-logo.png"
                    alt=""
                  />{" "}
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <Image
                    w="90%"
                    src="https://cdn.modesens.com/banner/20220708-BROWNSFASHION-logo.png"
                    alt=""
                  />{" "}
                </GridItem>
              </Grid>
            </Carousel.Item>
            <Carousel.Item>
              <Grid templateColumns="repeat(6, 1fr)" gap={4} p={10}>
                <GridItem w="100%" h="auto">
                  {" "}
                  <Image
                    w="90%"
                    src="https://cdn.modesens.com/banner/20220708-BLUEMERCURY-logo.png"
                    alt=""
                  />{" "}
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <Image
                    w="90%"
                    src="https://cdn.modesens.com/merchant/woolrich__logo.jpg?w=400"
                    alt=""
                  />{" "}
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <Image
                    w="90%"
                    src="https://cdn.modesens.com/merchant/visualmood-logo.png?w=400"
                    alt=""
                  />{" "}
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <Image
                    w="90%"
                    src="https://cdn.modesens.com/banner/20220708-MONTBLANC-logo.png"
                    alt=""
                  />{" "}
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <Image
                    w="90%"
                    src="https://cdn.modesens.com/banner/20220708-DR-MARTENS-logo.png"
                    alt=""
                  />{" "}
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <Image
                    w="90%"
                    src="https://cdn.modesens.com/banner/20220708-REPETTO-logo.png"
                    alt=""
                  />{" "}
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <Image
                    w="90%"
                    src="https://cdn.modesens.com/banner/20220708-NOBLEMARS-logo.png"
                    alt=""
                  />{" "}
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <Image
                    w="90%"
                    src="https://cdn.modesens.com/banner/20220708-D1MILANO-logo.png"
                    alt=""
                  />{" "}
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <Image
                    w="90%"
                    src="https://cdn.modesens.com/banner/20220708-ERNO-LASZLO-logo.png"
                    alt=""
                  />{" "}
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <Image
                    w="90%"
                    src="https://cdn.modesens.com/banner/20220708-LAPOINTE-logo.png"
                    alt=""
                  />{" "}
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <Image
                    w="90%"
                    src="https://cdn.modesens.com/banner/20220708-MONNALISA-logo.png"
                    alt=""
                  />{" "}
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <Image
                    w="90%"
                    src="https://cdn.modesens.com/banner/20220708-MANGO-logo.png"
                    alt=""
                  />{" "}
                </GridItem>
              </Grid>
            </Carousel.Item>
            <Carousel.Item>
              <Grid templateColumns="repeat(6, 1fr)" gap={4} p={10}>
                <GridItem w="100%" h="auto">
                  {" "}
                  <Image
                    w="90%"
                    src="https://cdn.modesens.com/banner/20211014-GUCCI-logo.png"
                    alt=""
                  />{" "}
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <Image
                    w="90%"
                    src="https://cdn.modesens.com/banner/20211014-PRADA-logo.png"
                    alt=""
                  />{" "}
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <Image
                    w="90%"
                    src="https://cdn.modesens.com/banner/20211014-SAINT-LAURENT-logo.png"
                    alt=""
                  />{" "}
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <Image
                    w="90%"
                    src="https://cdn.modesens.com/banner/20211014-BOTTEGA-VENETA-logo.png"
                    alt=""
                  />{" "}
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <Image
                    w="90%"
                    src="https://cdn.modesens.com/banner/20211014-BURBERRY-logo.png"
                    alt=""
                  />{" "}
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <Image
                    w="90%"
                    src="https://cdn.modesens.com/banner/20211014-FENDI-logo.png"
                    alt=""
                  />{" "}
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <Image
                    w="90%"
                    src="https://cdn.modesens.com/banner/20211014-VERSACE-logo.png"
                    alt=""
                  />{" "}
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <Image
                    w="90%"
                    src="https://cdn.modesens.com/banner/20211014-BALENCIAGA-logo.png"
                    alt=""
                  />{" "}
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <Image
                    w="90%"
                    src="https://cdn.modesens.com/banner/20211014-LOEWE-logo.png"
                    alt=""
                  />{" "}
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <Image
                    w="90%"
                    src="https://cdn.modesens.com/banner/20211014-GIVENCHY-logo.png"
                    alt=""
                  />{" "}
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <Image
                    w="90%"
                    src="https://cdn.modesens.com/banner/20211014-GUCCI-logo.png"
                    alt=""
                  />{" "}
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <Image
                    w="90%"
                    src="https://cdn.modesens.com/banner/20211014-VALENTINO-logo.png"
                    alt=""
                  />{" "}
                </GridItem>
              </Grid>
            </Carousel.Item>
          </Carousel>
        </Box>
      </Box>
      <Box>
        <Box textAlign={"center"}>
          <Box fontSize={{ lg: "34px", md: "34px", sm: "34px" }}>
            Shop Women
          </Box>
          <Wrap
            boxShadow="dark-lg"
            Box
            pt={{ lg: "10px", md: "10px", sm: "10px" }}
            pb={{ lg: "10px", md: "10px", sm: "10px" }}
            bg="white"
            h={{ lg: "200px", md: "400px", sm: "400px" }}
            w={{ lg: "92%", sm: "100%", md: "100%" }}
            ml={{ lg: "50px", md: "50px", sm: "25%" }}
            mr={{ lg: "50px", md: "50px", sm: "25%" }}
            display={"flex"}
            justifyContent="space-around"
            spacing={7}
          >
            <WrapItem
              mb={{ lg: "100px", md: "110px", sm: "110px" }}
              ml={{ lg: "10px", md: "10px", sm: "10px" }}
              w={{ lg: "15%", md: "195px" }}
              h={{ lg: "150px", md: "auto", sm: "auto" }}
              display="flex"
              flexDirection={"column"}
              justifyContent="center"
            >
              <Box
                Box
                h={{ lg: "100px", md: "250px", sm: "250px" }}
                w={{ lg: "100px", sm: "100%", md: "100%" }}
                // borderRadius="50%"
              >
                <Image
                  borderRadius="50%"
                  Box
                  h={{ lg: "94px", md: "250px", sm: "250px" }}
                  w={{ lg: "100%", md: "70%", sm: "70%" }}
                  src="https://cdn.modesens.com/banner/20220919-W-Sale.jpg"
                  alt=""
                />
              </Box>
              <Box
                Box
                h={{ lg: "25px", md: "70px" }}
                w={{ lg: "100px", md: "100%", sm: "100%" }}
                fontSize={{ lg: "20px", md: "20px", sm: "20px" }}
              >
                <Text>sale</Text>
              </Box>
            </WrapItem>
            <WrapItem
              mb={{ lg: "100px", md: "110px", sm: "110px" }}
              ml={{ lg: "10px", md: "10px", sm: "10px" }}
              w={{ lg: "15%", md: "195px" }}
              h={{ lg: "150px", md: "auto", sm: "auto" }}
              display="flex"
              flexDirection={"column"}
              justifyContent="center"
            >
              <Box
                Box
                h={{ lg: "100px", md: "250px", sm: "250px" }}
                w={{ lg: "100px", sm: "100%", md: "100%" }}
                // borderRadius="50%"
              >
                <Image
                  borderRadius="50%"
                  Box
                  h={{ lg: "94px", md: "250px", sm: "250px" }}
                  w={{ lg: "100%", md: "70%", sm: "70%" }}
                  src="https://cdn.modesens.com/banner/20220919-W-New.jpg"
                  alt=""
                />
              </Box>
              <Box
                Box
                h={{ lg: "25px", md: "70px" }}
                w={{ lg: "100px", md: "100%", sm: "100%" }}
                fontSize={{ lg: "20px", md: "20px", sm: "20px" }}
              >
                <Text>NEW ARRIVALS</Text>
              </Box>
            </WrapItem>
            <WrapItem
              mb={{ lg: "100px", md: "110px", sm: "110px" }}
              ml={{ lg: "10px", md: "10px", sm: "10px" }}
              w={{ lg: "15%", md: "195px" }}
              h={{ lg: "150px", md: "auto", sm: "auto" }}
              display="flex"
              flexDirection={"column"}
              justifyContent="center"
            >
              <Box
                Box
                h={{ lg: "100px", md: "250px", sm: "250px" }}
                w={{ lg: "100px", sm: "100%", md: "100%" }}
                // borderRadius="50%"
              >
                <Image
                  borderRadius="50%"
                  Box
                  h={{ lg: "94px", md: "250px", sm: "250px" }}
                  w={{ lg: "100%", md: "70%", sm: "70%" }}
                  src="https://cdn.modesens.com/banner/20220919-W-Jackets.jpg"
                  alt=""
                />
              </Box>
              <Box
                Box
                h={{ lg: "25px", md: "70px" }}
                w={{ lg: "100px", md: "100%", sm: "100%" }}
                fontSize={{ lg: "20px", md: "20px", sm: "20px" }}
              >
                <Text>JACKETS</Text>
              </Box>
            </WrapItem>
            <WrapItem
              mb={{ lg: "100px", md: "110px", sm: "110px" }}
              ml={{ lg: "10px", md: "10px", sm: "10px" }}
              w={{ lg: "15%", md: "195px" }}
              h={{ lg: "150px", md: "auto", sm: "auto" }}
              display="flex"
              flexDirection={"column"}
              justifyContent="center"
            >
              <Box
                Box
                h={{ lg: "100px", md: "250px", sm: "250px" }}
                w={{ lg: "100px", sm: "100%", md: "100%" }}
                // borderRadius="50%"
              >
                <Image
                  borderRadius="50%"
                  Box
                  h={{ lg: "94px", md: "250px", sm: "250px" }}
                  w={{ lg: "100%", md: "70%", sm: "70%" }}
                  src="https://cdn.modesens.com/banner/20220919-W-Dresses.jpg"
                  alt=""
                />
              </Box>
              <Box
                Box
                h={{ lg: "25px", md: "70px" }}
                w={{ lg: "100px", md: "100%", sm: "100%" }}
                fontSize={{ lg: "20px", md: "20px", sm: "20px" }}
              >
                <Text>DRESSES</Text>
              </Box>
            </WrapItem>
            <WrapItem
              mb={{ lg: "100px", md: "110px", sm: "110px" }}
              ml={{ lg: "10px", md: "10px", sm: "10px" }}
              w={{ lg: "15%", md: "195px" }}
              h={{ lg: "150px", md: "auto", sm: "auto" }}
              display="flex"
              flexDirection={"column"}
              justifyContent="center"
            >
              <Box
                Box
                h={{ lg: "100px", md: "250px", sm: "250px" }}
                w={{ lg: "100px", sm: "100%", md: "100%" }}
                // borderRadius="50%"
              >
                <Image
                  borderRadius="50%"
                  Box
                  h={{ lg: "94px", md: "250px", sm: "250px" }}
                  w={{ lg: "100%", md: "70%", sm: "70%" }}
                  src="https://cdn.modesens.com/banner/20220919-W-Tops.jpg"
                  alt=""
                />
              </Box>
              <Box
                Box
                h={{ lg: "25px", md: "70px" }}
                w={{ lg: "100px", md: "100%", sm: "100%" }}
                fontSize={{ lg: "20px", md: "20px", sm: "20px" }}
              >
                <Text>TOPS</Text>
              </Box>
            </WrapItem>
            <WrapItem
              mb={{ lg: "100px", md: "110px", sm: "110px" }}
              ml={{ lg: "10px", md: "10px", sm: "10px" }}
              w={{ lg: "15%", md: "195px" }}
              h={{ lg: "150px", md: "auto", sm: "auto" }}
              display="flex"
              flexDirection={"column"}
              justifyContent="center"
            >
              <Box
                Box
                h={{ lg: "100px", md: "250px", sm: "250px" }}
                w={{ lg: "100px", sm: "100%", md: "100%" }}
                // borderRadius="50%"
              >
                <Image
                  borderRadius="50%"
                  Box
                  h={{ lg: "94px", md: "250px", sm: "250px" }}
                  w={{ lg: "100%", md: "70%", sm: "70%" }}
                  src="https://cdn.modesens.com/banner/20220919-W-Pants.jpg"
                  alt=""
                />
              </Box>
              <Box
                Box
                h={{ lg: "25px", md: "70px" }}
                w={{ lg: "100px", md: "100%", sm: "100%" }}
                fontSize={{ lg: "20px", md: "20px", sm: "20px" }}
              >
                <Text>PANTS</Text>
              </Box>
            </WrapItem>
            <WrapItem
              mb={{ lg: "100px", md: "110px", sm: "110px" }}
              ml={{ lg: "10px", md: "10px", sm: "10px" }}
              w={{ lg: "15%", md: "195px" }}
              h={{ lg: "150px", md: "auto", sm: "auto" }}
              display="flex"
              flexDirection={"column"}
              justifyContent="center"
            >
              <Box
                Box
                h={{ lg: "100px", md: "250px", sm: "250px" }}
                w={{ lg: "100px", sm: "100%", md: "100%" }}
                // borderRadius="50%"
              >
                <Image
                  borderRadius="50%"
                  Box
                  h={{ lg: "94px", md: "250px", sm: "250px" }}
                  w={{ lg: "100%", md: "70%", sm: "70%" }}
                  src="https://cdn.modesens.com/banner/20220919-W-Shoes.jpg"
                  alt=""
                />
              </Box>
              <Box
                Box
                h={{ lg: "25px", md: "70px" }}
                w={{ lg: "100px", md: "100%", sm: "100%" }}
                fontSize={{ lg: "20px", md: "20px", sm: "20px" }}
              >
                <Text>SHOES</Text>
              </Box>
            </WrapItem>
            <WrapItem
              mb={{ lg: "100px", md: "110px", sm: "110px" }}
              ml={{ lg: "10px", md: "10px", sm: "10px" }}
              w={{ lg: "15%", md: "195px" }}
              h={{ lg: "150px", md: "auto", sm: "auto" }}
              display="flex"
              flexDirection={"column"}
              justifyContent="center"
            >
              <Box
                Box
                h={{ lg: "100px", md: "250px", sm: "250px" }}
                w={{ lg: "100px", sm: "100%", md: "100%" }}
                // borderRadius="50%"
              >
                <Image
                  borderRadius="50%"
                  Box
                  h={{ lg: "94px", md: "250px", sm: "250px" }}
                  w={{ lg: "100%", md: "70%", sm: "70%" }}
                  src="https://cdn.modesens.com/banner/20220919-W-Bags.jpg"
                  alt=""
                />
              </Box>
              <Box
                Box
                h={{ lg: "25px", md: "70px" }}
                w={{ lg: "100px", md: "100%", sm: "100%" }}
                fontSize={{ lg: "20px", md: "20px", sm: "20px" }}
              >
                <Text>BAGS</Text>
              </Box>
            </WrapItem>
            <WrapItem
              mb={{ lg: "100px", md: "110px", sm: "110px" }}
              ml={{ lg: "10px", md: "10px", sm: "10px" }}
              w={{ lg: "15%", md: "195px" }}
              h={{ lg: "150px", md: "auto", sm: "auto" }}
              display="flex"
              flexDirection={"column"}
              justifyContent="center"
            >
              <Box
                Box
                h={{ lg: "100px", md: "250px", sm: "250px" }}
                w={{ lg: "100px", sm: "100%", md: "100%" }}
                // borderRadius="50%"
              >
                <Image
                  borderRadius="50%"
                  Box
                  h={{ lg: "94px", md: "250px", sm: "250px" }}
                  w={{ lg: "100%", md: "70%", sm: "70%" }}
                  src="https://cdn.modesens.com/banner/20221207-W-PreOwned_1670402059.jpg"
                  alt=""
                />
              </Box>
              <Box
                Box
                h={{ lg: "25px", md: "70px" }}
                w={{ lg: "100px", md: "100%", sm: "100%" }}
                fontSize={{ lg: "20px", md: "20px", sm: "20px" }}
              >
                <Text>PRE</Text>
              </Box>
            </WrapItem>
          </Wrap>
        </Box>
      </Box>
      <Box textAlign={"center"}>
        <Box>
          <Box fontSize={{ lg: "34px", md: "34px", sm: "34px" }}>
            New To sale
          </Box>
          <Wrap
            boxShadow="dark-lg"
            pt={{ lg: "10px", md: "10px", sm: "10px" }}
            pb={{ lg: "10px", md: "10px", sm: "10px" }}
            bg="white"
            h={{ lg: show, md: "400px", sm: "400px" }}
            w={{ lg: "100%", sm: "100%", md: "100%" }}
            ml={{ lg: "100px", md: "50px", sm: "25%" }}
            display={"flex"}
            justifyContent="space-around"
            spacing={7}
          >
            {womens.map((i) => {
              return (
                <Link to={`/details/${i.id}`}>
                  {" "}
                  <WrapItem
                    mb={{ lg: "110px", md: "110px", sm: "110px" }}
                    ml={{ lg: "10px", md: "10px", sm: "10px" }}
                    w={{ lg: "195px", md: "195px" }}
                    h={{ lg: "auto", md: "auto", sm: "auto" }}
                    key={i.id}
                    display="flex"
                    flexDirection={"column"}
                    justifyContent="center"
                  >
                    <Box position="relative" right="-134px">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="heartsvg"
                        width="20"
                        height="20"
                        style={{ marginBottom: "10px", marginTop: "5px" }}
                        fill="gray"
                        viewBox="0 0 512 512"
                      >
                        <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
                      </svg>
                    </Box>
                    <Box
                      h={{ lg: "250px", md: "250px", sm: "250px" }}
                      w={{ lg: "100%", sm: "100%", md: "100%" }}
                    >
                      <Image
                        w={{ lg: "70%", md: "70%", sm: "70%" }}
                        src={i.image}
                        alt=""
                      />
                    </Box>
                    <Box
                      h={{ lg: "100px", md: "70px" }}
                      w={{ lg: "100%", md: "100%", sm: "100%" }}
                      fontSize={{ lg: "20px", md: "20px", sm: "20px" }}
                    >
                      <Text>{i.title}</Text>
                    </Box>
                  </WrapItem>
                </Link>
              );
            })}
          </Wrap>
          <Box>
            {showStatus ? (
              <Button
                onClick={() => {
                  setShow("auto");
                  setShowStatus(false);
                }}
              >
                SHOP MORE
              </Button>
            ) : (
              <Button
                onClick={() => {
                  setShow("400px");
                  setShowStatus(true);
                }}
              >
                {" "}
                SHOP LESS
              </Button>
            )}
          </Box>
        </Box>
      </Box>
      <Box textAlign={"center"}>
        <Box>
          <Box fontSize={{ lg: "34px", md: "34px", sm: "34px" }}>
            Special Offers
          </Box>
          <Wrap
            boxShadow="dark-lg"
            pt={{ lg: "10px", md: "10px", sm: "10px" }}
            pb={{ lg: "10px", md: "10px", sm: "10px" }}
            bg="white"
            h={{ lg: see, md: "400px", sm: "400px" }}
            w={{ lg: "100%", sm: "100%", md: "100%" }}
            ml={{ lg: "100px", md: "50px", sm: "25%" }}
            display={"flex"}
            justifyContent="space-around"
            spacing={7}
          >
            {special.map((i) => {
              return (
                <Link to={`/details/${i.id}`}>
                  {" "}
                  <WrapItem
                    mb={{ lg: "110px", md: "110px", sm: "110px" }}
                    ml={{ lg: "10px", md: "10px", sm: "10px" }}
                    w={{ lg: "195px", md: "195px" }}
                    h={{ lg: "auto", md: "auto", sm: "auto" }}
                    key={i.id}
                    display="flex"
                    flexDirection={"column"}
                    justifyContent="center"
                  >
                    <Box position="relative" right="-134px">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="heartsvg"
                        width="20"
                        height="20"
                        style={{ marginBottom: "10px", marginTop: "5px" }}
                        fill="gray"
                        viewBox="0 0 512 512"
                      >
                        <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
                      </svg>
                    </Box>
                    <Box
                      h={{ lg: "250px", md: "250px", sm: "250px" }}
                      w={{ lg: "100%", sm: "100%", md: "100%" }}
                    >
                      <Image
                        w={{ lg: "70%", md: "70%", sm: "70%" }}
                        src={i.image}
                        alt=""
                      />
                    </Box>
                    <Box
                      h={{ lg: "100px", md: "70px" }}
                      w={{ lg: "100%", md: "100%", sm: "100%" }}
                      fontSize={{ lg: "20px", md: "20px", sm: "20px" }}
                    >
                      <Text>{i.title}</Text>
                    </Box>
                  </WrapItem>
                </Link>
              );
            })}
          </Wrap>
          <Box>
            {showStatus ? (
              <Button
                onClick={() => {
                  setSee("auto");
                  setShowStatus(false);
                }}
              >
                SHOP MORE
              </Button>
            ) : (
              <Button
                onClick={() => {
                  setShow("400px");
                  setShowStatus(true);
                }}
              >
                {" "}
                SHOP LESS
              </Button>
            )}
          </Box>
        </Box>
      </Box>
      <Box textAlign={"center"}>
        <Box>
          <Box fontSize={{ lg: "34px", md: "34px", sm: "34px" }}>
            Trending Now
          </Box>
          <Wrap
            boxShadow="dark-lg"
            pt={{ lg: "10px", md: "10px", sm: "10px" }}
            pb={{ lg: "10px", md: "10px", sm: "10px" }}
            bg="white"
            h={{ lg: see, md: "400px", sm: "400px" }}
            w={{ lg: "100%", sm: "100%", md: "100%" }}
            ml={{ lg: "100px", md: "50px", sm: "25%" }}
            display={"flex"}
            justifyContent="space-around"
            spacing={7}
          >
            {womens.map((i) => {
              return (
                <Link to={`/details/${i.id}`}>
                  {" "}
                  <WrapItem
                    mb={{ lg: "110px", md: "110px", sm: "110px" }}
                    ml={{ lg: "10px", md: "10px", sm: "10px" }}
                    w={{ lg: "195px", md: "195px" }}
                    h={{ lg: "auto", md: "auto", sm: "auto" }}
                    key={i.id}
                    display="flex"
                    flexDirection={"column"}
                    justifyContent="center"
                  >
                    <Box position="relative" right="-134px">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="heartsvg"
                        width="20"
                        height="20"
                        style={{ marginBottom: "10px", marginTop: "5px" }}
                        fill="gray"
                        viewBox="0 0 512 512"
                      >
                        <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
                      </svg>
                    </Box>
                    <Box
                      h={{ lg: "250px", md: "250px", sm: "250px" }}
                      w={{ lg: "100%", sm: "100%", md: "100%" }}
                    >
                      <Image
                        w={{ lg: "70%", md: "70%", sm: "70%" }}
                        src={i.image}
                        alt=""
                      />
                    </Box>
                    <Box
                      h={{ lg: "100px", md: "70px" }}
                      w={{ lg: "100%", md: "100%", sm: "100%" }}
                      fontSize={{ lg: "20px", md: "20px", sm: "20px" }}
                    >
                      <Text>{i.title}</Text>
                    </Box>
                  </WrapItem>
                </Link>
              );
            })}
          </Wrap>
          <Box>
            {showStatus ? (
              <Button
                onClick={() => {
                  setSee("auto");
                  setShowStatus(false);
                }}
              >
                SHOP MORE
              </Button>
            ) : (
              <Button
                onClick={() => {
                  setSee("400px");
                  setShowStatus(true);
                }}
              >
                {" "}
                SHOP LESS
              </Button>
            )}
          </Box>
        </Box>
      </Box>
      <Box>
        <Box textAlign={"center"}>
          <Box fontSize={{ lg: "34px", md: "34px", sm: "34px" }}>
            Recently Viewed
          </Box>
          <Wrap
            boxShadow="dark-lg"
            pt={{ lg: "10px", md: "10px", sm: "10px" }}
            pb={{ lg: "10px", md: "10px", sm: "10px" }}
            bg="white"
            h={{ lg: more, md: "400px", sm: "400px" }}
            w={{ lg: "100%", sm: "100%", md: "100%" }}
            ml={{ lg: "100px", md: "50px", sm: "25%" }}
            display={"flex"}
            justifyContent="space-around"
            spacing={7}
          >
            {womens.map((i) => {
              return (
                <Link to={`/details/${i.id}`}>
                  {" "}
                  <WrapItem
                    mb={{ lg: "110px", md: "110px", sm: "110px" }}
                    ml={{ lg: "10px", md: "10px", sm: "10px" }}
                    w={{ lg: "195px", md: "195px" }}
                    h={{ lg: "auto", md: "auto", sm: "auto" }}
                    key={i.id}
                    display="flex"
                    flexDirection={"column"}
                    justifyContent="center"
                  >
                    <Box position="relative" right="-134px">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="heartsvg"
                        width="20"
                        height="20"
                        style={{ marginBottom: "10px", marginTop: "5px" }}
                        fill="gray"
                        viewBox="0 0 512 512"
                      >
                        <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
                      </svg>
                    </Box>
                    <Box
                      h={{ lg: "250px", md: "250px", sm: "250px" }}
                      w={{ lg: "100%", sm: "100%", md: "100%" }}
                    >
                      <Image
                        w={{ lg: "70%", md: "70%", sm: "70%" }}
                        src={i.image}
                        alt=""
                      />
                    </Box>
                    <Box
                      h={{ lg: "100px", md: "70px" }}
                      w={{ lg: "100%", md: "100%", sm: "100%" }}
                      fontSize={{ lg: "20px", md: "20px", sm: "20px" }}
                    >
                      <Text>{i.title}</Text>
                    </Box>
                  </WrapItem>
                </Link>
              );
            })}
          </Wrap>
          <Box>
            {showStatus ? (
              <Button
                onClick={() => {
                  setMore("auto");
                  setShowStatus(false);
                }}
              >
                SHOP MORE
              </Button>
            ) : (
              <Button
                onClick={() => {
                  setMore("400px");
                  setShowStatus(true);
                }}
              >
                {" "}
                SHOP LESS
              </Button>
            )}
          </Box>
        </Box>
      </Box>
      <Box>
        <Box textAlign={"center"}>
          <Box fontSize={{ lg: "34px", md: "34px", sm: "34px" }}>
            Community Posts
          </Box>
          <Box
            p="50px"
            w={{ lg: "100%", md: "100%", sm: "100%" }}
            display={"flex"}
            justifyContent="space-around"
          >
            <Image
              w={{ lg: "15%", md: "15%", sm: "15%" }}
              src="https://cdn.modesens.com/umedia/1707011s?w=400"
              alt=""
            />
            <Image
              w={{ lg: "15%", md: "15%", sm: "15%" }}
              src="https://cdn.modesens.com/umedia/1707018s?w=400"
              alt=""
            />
            <Image
              w={{ lg: "15%", md: "15%", sm: "15%" }}
              src="https://cdn.modesens.com/umedia/1707030s?w=400"
              alt=""
            />
            <Image
              w={{ lg: "15%", md: "15%", sm: "15%" }}
              src="https://cdn.modesens.com/umedia/1707141s?w=400"
              alt=""
            />
          </Box>
          <Button>VIEW ALL</Button>
        </Box>
      </Box>
      <Box
        textAlign={"center"}
        w={{ lg: "100%", md: "333%", sm: "333%" }}
        display={{md:"flex"}}
        // m={{md:"auto"}}
        justifyContent="space-around"
      >
        <Box w={{ lg: "30%", md: "30%", sm: "30%" }} alignItems={"center"}>
          <Box fontSize={{ lg: "34px", md: "34px", sm: "34px" }}>
            Download the ModeSens App
          </Box>
          <Text fontSize={{ lg: "20x", md: "24px", sm: "24px" }}>
            A seamless experience that takes your style to the next level.
          </Text>
          <Button
            fontSize={{ lg: "20px", md: "24px", sm: "24px" }}
            borderRadius={0}
            bg={"black"}
            color="white"
          >
            DOWNLOAD NOW
          </Button>
          <Center>
            <Image
              src="https://cdn.modesens.com/static/img/20220826appdownload_en.svg"
              alt=""
            />
          </Center>
        </Box>
        <Box w={{ lg: "30%", md: "30%", sm: "30%" }}>
          <Box fontSize={{ lg: "34px", md: "34px", sm: "34px" }}>
            Download the ModeSens App
          </Box>
          <Text fontSize={{ lg: "20x", md: "24px", sm: "24px" }}>
            Get timely, accurate product information every time you browse.
          </Text>
          <Button
            fontSize={{ lg: "20px", md: "24px", sm: "24px" }}
            borderRadius={0}
            bg={"black"}
            color="white"
          >
            INSTALL NOW
          </Button>
          <Center>
            <img
              src="https://cdn.modesens.com/static/img/20211109downloadright.png"
              alt=""
            />
          </Center>
        </Box>
      </Box>
    </Box>
  );
};
