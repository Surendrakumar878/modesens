import { Box, Button, Image, Input, Select } from "@chakra-ui/react";

import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addNewData,
  deleteDataFromCart,
  edit,
  getdata,
  update,
} from "../../Redux/AppReducer/action";
import styles from "./AdminPage.module.css";
import { Filter } from "./Filter";
const Admin = () => {
  var name = JSON.parse(localStorage.getItem("username"));
  const mensData = useSelector((store) => {
    return store.AppReducer.data;
  });
  const dispatch = useDispatch();
  const [active, setActive] = useState(true);

  const [product, setProduct] = useState({
    available: true,
    category: "mens",
    description: "",
    image: "",
    price: 0,
    rating: { rate: 3.9, count: 120 },
    stores: 9,
    title: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewData(product)).then(() => dispatch(getdata()));
  };
  const status = (id) => {
    setActive((pre) => !pre);
    let payload = active;
    console.log(payload, id);
    dispatch(edit(id, { available: payload })).then(() => dispatch(getdata()));
  };

  useEffect(() => {
    dispatch(getdata());
  }, []);

  // console.log(mensData);
  return (
    <Box ml={{ sm: "30px" }} id={styles.admin_header_main_div}>
      <div id={styles.admin_header}>
        <Link to="/">
          <img
            id={styles.admin_logo}
            src="https://i.postimg.cc/gcL4D1yK/Black-and-Red-Cool-and-Funky-Gaming-Logo-removebg-preview-1.png"
            alt=""
          />
        </Link>
        <h3 id={styles.admin_heading}>
          Welcome{" "}
          <span style={{ color: "green", fontStyle: "italic" }}>{name}</span> to
          Admin Panel
        </h3>
      </div>
      <Filter />
      <Box w="100%" display={{ md: "flex" }} justifyContent="space-around">
        <Box W="50%">
          <div className={styles.form_element_div}>
            <Input
              placeholder="title"
              type="text"
              name={product.title}
              value={product.title}
              className={styles.form_Input}
              onChange={(e) =>
                setProduct({ ...product, title: e.target.value })
              }
            />
          </div>
          <div>
            <Select
              name="category"
              onChange={(e) =>
                setProduct({ ...product, category: e.target.value })
              }
            >
              <option value="">Select Category</option>
              <option value="mens">mens</option>
              <option value="Womens">Womens</option>
              <option value="kids">kids</option>
              <option value="beauty ">beauty </option>
              <option value="jewelery ">jewelery </option>
            </Select>
          </div>
          <div>
            <Input
              type="url"
              placeholder="Image URL"
              value={product.image}
              name={product.image}
              onChange={(e) =>
                setProduct({ ...product, image: e.target.value })
              }
            />
          </div>
          <div className={styles.form_element_div}>
            <Input
              type="text"
              value={product.description}
              name={product.description}
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
              placeholder="description"
            />
          </div>
          <div className={styles.form_element_div}>
            <Input
              type="number"
              value={product.price}
              name={product.price}
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
              placeholder="price"
            />
          </div>

          <div style={{ textAlign: "center" }}>
            <Button onClick={handleSubmit}>Add Product</Button>
          </div>
        </Box>

        <Box
          style={{ overflow: "scroll" }}
          w={{ lg: "50%", md: "100%", sm: "100%" }}
          h="480px"
          scrollBehavior="auto"
        >
          <Button>DATA </Button>

          <Box >
            
              {mensData.length > 0 &&
                mensData.map((item) => {
                  return (
                    <Box boxShadow='dark-lg' p='6' rounded='md' bg='white' key={item.id}>
                      <Box>
                        <Box>
                          <Box display={"flex"} justifyContent="space-around" p="10px">
                            {" "}
                            <Image src={item.image} alt="" w="8%" />{" "}
                            <Box>
                              {" "}
                              {item.title}
                              <div>{item.category}</div>
                              <div>₹{item.price} </div>
                            </Box>{" "}
                          </Box>
                        </Box>

                        <Box display={"flex"} justifyContent={"space-around"}>
                          <Link to={`/product/${item.id}`}>
                            <Button
                              color={"white"}
                              bg={"teal"}
                              _hover={{
                                bg: "#F9F5EB",
                                color: "teal",
                                border: "2px solid teal ",
                              }}
                            >
                              {" "}
                              Edit
                            </Button>
                          </Link>
                          <Box onClick={() => status(item.id)}>
                            {item.available ? (
                              <Button
                                _hover={{
                                  bg: "#F9F5EB",
                                  color: "green",
                                  border: "2px solid green ",
                                }}
                                bg="green"
                                color={"white"}
                                ml="70px"
                              >
                                active
                              </Button>
                            ) : (
                              <Button bg="red.400" ml="70px">
                                Inactive
                              </Button>
                            )}
                          </Box>
                          <Button
                            bg="red"
                            color={"white"}
                            _hover={{
                              bg: "#F9F5EB",
                              color: "red",
                              border: "2px solid red ",
                            }}
                            onClick={() =>
                              dispatch(deleteDataFromCart(item.id)).then(() =>
                                dispatch(getdata())
                              )
                            }
                            ml="70px"
                          >
                            Delete
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
            
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Admin;
