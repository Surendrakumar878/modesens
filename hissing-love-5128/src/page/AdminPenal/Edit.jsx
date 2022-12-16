import { Box, Button, Input, Select } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { edit, getdata } from "../../Redux/AppReducer/action";
import styles from "./AdminPage.module.css";


const Edit = () => {
  var name = JSON.parse(localStorage.getItem("username"));
  const dispatch = useDispatch();
  const products  = useSelector((store) => {
    return store.AppReducer.data;
  });
  const { id } = useParams();
  const data=products.filter((i)=>i.id===+id)
  console.log(id,data,products)
  const [product, setProduct] = useState({
    available: true,
    category: data[0].category,
    description:data[0].description,
    image: data[0].image,
    price:data[0].price,
    rating: { rate: 3.9, count: 120 },
    stores: 9,
    title:data[0].title,
    id:data[0].id
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(edit(id,product)).then(()=> {dispatch(getdata())
        // navigate("/admin")
    })
    navigate("/admin")
     };
  useEffect(() => {
    dispatch(getdata())

  }, [dispatch]);
  return (
    <Box>
      <Box id={styles.admin_header}>
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
          Edit Page
        </h3>
      </Box>
      <Box w="100%" display="flex" justifyContent="space-around">
        
        <Box>
          <Box W="50%">
            <Box>
              <Input
                placeholder="title"
                type="text"
                name={product.title}
                value={product.title}
                onChange={(e) =>
                  setProduct({ ...product, title: e.target.value })
                }
              />
            </Box>
            <Box>
              <Select
                name="category"
                //   onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Men's Data</option>
                <option value="mensdata">Men's Data</option>
                <option value="womensdata">Women's Data</option>
              </Select>
            </Box>
            <Box>
              <Input
                type="url"
                placeholder="Image URL"
                value={product.image}
                name={product.image}
                onChange={(e) =>
                  setProduct({ ...product, image: e.target.value })
                }
              />
            </Box>
            <Box>
              <Input
                type="number"
                value={product.price}
                name={product.price}
                onChange={(e) =>
                  setProduct({ ...product, price: e.target.value })
                }
                placeholder="price"
              />
            </Box>
            <Box>
              <Input
                type="text"
                value={product.description}
                name={product.description}
                onChange={(e) =>
                  setProduct({ ...product, description: e.target.value })
                }
                placeholder="description"
              />
            </Box>
            <Box style={{ textAlign: "center" }}>
              <Button onClick={handleSubmit}>Edit Product</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Edit;