import { Box, Button, Input, Select } from "@chakra-ui/react";

import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteDataFromCart,
  getdata,
  update,
} from "../../Redux/AppReducer/action";
import styles from "./AdminPage.module.css";
const Admin = () => {
  var name = JSON.parse(localStorage.getItem("username"));
  const mensData = useSelector((store) => {
    console.log(store);
    return store.AppReducer.data;
  });
  const dispatch = useDispatch();
  const [active, setActive] = useState(true);

  const [product, setProduct] = useState({
    available: true,
    category: "mens",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 109.95,
    rating: { rate: 3.9, count: 120 },
    stores: 9,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  });
  const [category, setCategory] = useState("");

  console.log(mensData);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(product)
  };

  // console.log("product",product)
  useEffect(() => {
    dispatch(getdata());
  }, []);

  console.log(mensData);
  return (
    <div id={styles.admin_header_main_div}>
      <div id={styles.admin_header}>
        <Link to="/">
          <img
            id={styles.admin_logo}
            src="https://i.postimg.cc/2SR23Rqv/Black-and-Red-Cool-and-Funky-Gaming-Logo-5.gif"
            alt=""
          />
        </Link>
        <h3 id={styles.admin_heading}>
          Welcome{" "}
          <span style={{ color: "green", fontStyle: "italic" }}>{name}</span> to
          Admin Panel
        </h3>
      </div>
      <Box w="100%" display="flex" justifyContent="space-around">
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
              onChange={(e) => setCategory(e.target.value)}
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
              type="number"
              value={product.discount_price_box}
              name={product.discount_price_box}
              onChange={(e) =>
                setProduct({ ...product, discount_price_box: e.target.value })
              }
              placeholder="actualPriceText"
            />
          </div>
          <div className={styles.form_element_div}>
            <Input
              type="number"
              value={product.discount_price_box}
              name={product.discount_price_box}
              onChange={(e) =>
                setProduct({ ...product, discount_price_box: e.target.value })
              }
              placeholder="actualPriceText"
            />
          </div>
          <div className={styles.form_element_div}>
            <Input
              type="number"
              value={product.discount_price_box}
              name={product.discount_price_box}
              onChange={(e) =>
                setProduct({ ...product, discount_price_box: e.target.value })
              }
              placeholder="actualPriceText"
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <Button onClick={handleSubmit}>Add Product</Button>
          </div>
        </Box>
        <Box
          style={{ overflow: "scroll" }}
          w="50%"
          h="580px"
          scrollBehavior="auto"
        >
          <Button>DATA</Button>

          <Box>
            <div>
              {mensData.length > 0 &&
                mensData.map((item) => {
                  return (
                    <div key={item.id}>
                      <Box>{item.title}</Box>
                      <Box>
                        <div>{item.price}</div>

                        <div>₹{item.catagory}</div>

                        <div>₹{item.actualPriceText} </div>
                        <Box justifyContent={"space-around"}>
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
                          {item.status ? (
                            <Button
                              _hover={{
                                bg: "#F9F5EB",
                                color: "green",
                                border: "2px solid green ",
                              }}
                              bg="green"
                              color={"white"}
                              onClick={() => {
                                update(item.id);
                                setActive(false);
                                alert("Inactive");
                              }}
                              ml="70px"
                            >
                              active
                            </Button>
                          ) : (
                            <Button
                              bg="red.400"
                              ml="70px"
                              onClick={() => {
                                update(item.id);
                                setActive(true);
                                alert("active");
                              }}
                            >
                              Inactive
                            </Button>
                          )}
                          <Button
                            bg="red"
                            color={"white"}
                            _hover={{
                              bg: "#F9F5EB",
                              color: "red",
                              border: "2px solid red ",
                            }}
                            onClick={() => deleteDataFromCart(item.id)}
                            ml="70px"
                          >
                            Delete
                          </Button>
                        </Box>
                      </Box>
                    </div>
                  );
                })}
            </div>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Admin;
