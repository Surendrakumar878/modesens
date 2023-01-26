import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../ProductDetails/productdetails.css";
import ThumbnailCarousel from "../../components/Navbar/productdetails/thumbnailcarousel";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectDetailsCarousel from "../../components/Navbar/productdetails/ProductDetailsCarousel";
import ViewerLikedCard from "../../components/Navbar/productdetails/ViewersLikedCard";
import { womenViewrsLiked } from "../../components/Navbar/productdetails/womensViewerLiked";
import ViewersAlsoLikedSection from "../../components/Navbar/productdetails/ViewersAlsoLikedSection";
import { mensViewerLiked } from "../../components/Navbar/productdetails/mensViewerLiked";
import { Box } from "@chakra-ui/react";
import Aos from "aos";
import "aos/dist/aos.css";
import { ImageMagnifier } from "../../components/Navbar/productdetails/ImageMagnifier";
import swal from "sweetalert";
import LoginSignupModal from "../../components/LoginSignup/LoginSignupModal";
import { addtocart, getproddata } from "../../Redux/ProductReducer/action";
import { store } from "../../Redux/store";
import { useState } from "react";
import { kidsViewersLiked } from "../../components/Navbar/productdetails/kidsViewerLiked";
import { beautyViewersLiked } from "../../components/Navbar/productdetails/beautyViewersLiked";
const ProductDetails = () => {
  const id = useParams();
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = React.useState(false);
  const [viewersdata,setViwersData]=useState([]);
  const token=useSelector((store)=>store.AuthReducer.token);
  console.log("toekn",token)
  const prodData=useSelector((store)=>store.ProductReducer.ProdData);
   console.log(prodData);
  // console.log(id);
  const navigate=useNavigate();
const cartData=useSelector((store)=>store.ProductReducer.CartData);
console.log(cartData);

  useEffect(()=>{
    dispatch( getproddata(id))
    // console.log(prodData[0])
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  },[id])

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const navigateFunction=()=>{
    if(prodData.length===0){
      return
    }
    if(prodData[0].category==="mens"){
      navigate("/men")
    }
    else if(prodData[0].category==="womens"){
      navigate("/womens")
    }
    if(prodData[0].category==="kids"){
      navigate("/kids")
    }
    if(prodData[0].category==="beauty"){
      navigate("/beauty")
    }
  }
  const addtocartfunction=(data)=>{
         let newcart2=cartData.filter((el)=>{
          return el.id===data.id
         })
         if(newcart2.length>0){
          swal({
            title:"Item already available in cart",
            text:"It seems item is already present in your cart",
            icon:"warning"
          })
         }
         else{
          let newcart=[...cartData,data]
          dispatch(addtocart(newcart))
         }
  }

  return (
    <section className="proddetails_section">
      
{/* --------------------------------loginsignupmodal------------------------------------------ */}


      <div className="breadcrumbs_proddesc">
        <Link to="/"> Coolmart/</Link> <Link to={`/details/${id}`}>{prodData.length>0 && prodData[0].title}</Link>
      </div>

      <div className="thumbnail_and_details">
        <div className="thumbnail_carousel">
          <ThumbnailCarousel image={`${prodData.length>0 ? prodData[0].image:""}`} />
        </div>
        <div className="thumbnail_details">
          <div style={{ marginTop: "0px" }}>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>{prodData.length>0 && prodData[0].title}</p>
          </div>
          <div>
            <p style={{ fontSize: "14px" }}>Category : {prodData.length>0 && prodData[0].category}</p>
          </div>
          <div>
            <p
              style={{
                fontSize: "18.06px",
                fontWeight: "600",
                color: "#C00000",
              }}
            >
             ₹ {prodData.length>0 && prodData[0].price}
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "600",
                textDecoration: "underline",
              }}
            >
              Shop From {prodData.length>0 && prodData[0].stores} Stores
            </p>
          </div>
          <div>
            <p style={{ fontSize: "14px", fontWeight: "600" }}>
              <span style={{ textDecoration: "underline" }}>Join Now</span> to
              earn upto <span style={{ color: "#C00000" }}>577</span> points
              when you buy.
            </p>
          </div>
        </div>
      </div>

      <div className="title_prod_desc">Shop With ModeSens Concierge</div>

      <div className="Shop_with_concierge">
        <div className="Shop_with_concierge_info">
          ModeSens Concierge helps you shop 500+ stores in one place. A premium
          benefit exclusively reserved for Silver and above members. Learn more
        </div>
        <div className="Shop_with_concierge_button">
          <button>SELECT SIZE</button>
          {prodData.length>0 && prodData[0].available===true?
          <button
            style={{ background: "#1c1c1c", border: "none", color: "#fff" }}
            onClick={()=>{swal({
              title:"Added To Cart",
              icon:"success",
              text:"Item added to cart make sure to checkout!"
            });addtocartfunction(prodData[0])}}
          >
            ADD TO BAG
          </button>:
          <button disabled
          style={{ background: "#c00000", border: "none", color: "#fff" }}>
          Stock Not Available
        </button>
          }
        </div>
      </div>

      <div className="title_prod_desc">
        <span>
          {" "}
          Compare Across 500+ Stores{" "}
          <span style={{ color: "#8E8E8E" }}>（2 Stores）</span>
        </span>
      </div>

      <div
        style={{
          height: "17.95px",
          fontSize: "12px",
          textAlign: "left",
          fontWeight: "600",
          marginTop: "10px",
        }}
      >
        $330 - $550
      </div>

      <div className="compare_stores_div">
        <div>
          <div
            style={{
              width: "82px",
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
            }}
          >
            <img
              src={prodData.length>0 ? prodData[0].image:""}
              style={{ width: "50px", height: "60px" }}
              alt=""
            />
          </div>
          <div
          className="compare_stores_div_title_price"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "left",
              textAlign: "left",
            }}
          >
            <div style={{ marginTop: "0px", width: "100%" }}>
              <p style={{ fontSize: "20px", fontWeight: "bold" }}>
              {prodData.length>0 && prodData[0].title}
              </p>
            </div>
            <div style={{ marginTop: "0px", width: "100%" }}>
              <p
                style={{
                  fontSize: "18.06px",
                  fontWeight: "600",
                  color: "#C00000",
                }}
              >
               {prodData.length>0 && prodData[0].category}
              </p>
            </div>
            <div style={{ marginTop: "0px", width: "100%" }}>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  textDecoration: "underline",
                }}
              >
                Shop From Store 1
              </p>
            </div>
          </div>
          <div style={{ width: "156.23px" }}>
            {prodData.length>0 && prodData[0].available===true?<button
              style={{
                background: "#1c1c1c",
                border: "none",
                width: "100%",
                height: "40px",
                color: "#fff",
              }}
              onClick={()=>{swal({
                title:"Added To Cart",
                icon:"success",
                text:"Item added to cart make sure to checkout!"
              });addtocartfunction(prodData[0])}}
            >
              ADD TO BAG
            </button>:
             <button disabled 
             style={{ background: "#c00000", border: "none", color: "#fff", width: "100%",
             height: "40px" }}>
             Stock Not Available
           </button>
            }
          </div>
        </div>
        <div>
          <div
            style={{
              width: "82px",
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
            }}
          >
            <img
              src={prodData.length>0 ? prodData[0].image:""}
              style={{ width: "50px", height: "60px" }}
              alt=""
            />
          </div>
          <div
          className="compare_stores_div_title_price"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "left",
              textAlign: "left",
            }}
          >
            <div style={{ marginTop: "0px", width: "100%" }}>
              <p style={{ fontSize: "20px", fontWeight: "bold" }}>
              {prodData.length>0 && prodData[0].title}
              </p>
            </div>
            <div style={{ marginTop: "0px", width: "100%" }}>
              <p
                style={{
                  fontSize: "18.06px",
                  fontWeight: "600",
                  color: "#C00000",
                }}
              >
               {prodData.length>0 && prodData[0].category}
              </p>
            </div>
            <div style={{ marginTop: "0px", width: "100%" }}>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  textDecoration: "underline",
                }}
              >
                Shop From store 2
              </p>
            </div>
          </div>
          <div style={{ width: "156.23px" }}>
          {prodData.length>0 && prodData[0].available==true?<button
              style={{
                background: "#1c1c1c",
                border: "none",
                width: "100%",
                height: "40px",
                color: "#fff",
              }}
              onClick={()=>{swal({
                title:"Added To Cart",
                icon:"success",
                text:"Item added to cart make sure to checkout!"
              });addtocartfunction(prodData[0])}}
            >
              ADD TO BAG
            </button>:
             <button disabled 
             style={{ background: "#c00000", border: "none", color: "#fff", width: "100%",
             height: "40px" }}>
             Stock Not Available
           </button>
            }
          </div>
        </div>
      </div>

      <div className="title_prod_desc">
        <span>Subscribe To Alerts</span>{" "}
        <button className="set_alert">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              height="20"
              width="20"
              fill="#333"
            >
              <path d="M256 32V49.88C328.5 61.39 384 124.2 384 200V233.4C384 278.8 399.5 322.9 427.8 358.4L442.7 377C448.5 384.2 449.6 394.1 445.6 402.4C441.6 410.7 433.2 416 424 416H24C14.77 416 6.365 410.7 2.369 402.4C-1.628 394.1-.504 384.2 5.26 377L20.17 358.4C48.54 322.9 64 278.8 64 233.4V200C64 124.2 119.5 61.39 192 49.88V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32V32zM216 96C158.6 96 112 142.6 112 200V233.4C112 281.3 98.12 328 72.31 368H375.7C349.9 328 336 281.3 336 233.4V200C336 142.6 289.4 96 232 96H216zM288 448C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288z" />
            </svg>
          </span>{" "}
          SET ALERT
        </button>
      </div>

      <div
        style={{
          height: "17.95px",
          fontSize: "14px",
          textAlign: "left",
          fontWeight: "600",
          color: "#8E8E8E",
          marginTop: "14px",
        }}
      >
        We'll keep our eyes out for you. Subscribe to receive automatic email
        and app updates to be the first to know when this item becomes available
        in new stores, sizes or prices.
      </div>

      <div className="sale_prod_desc" data-aos="fade-left">
        <img
          src="https://modesens.com/banner/14434/getimg/?img=%2Fbanner%2F20221206-modesens-SSENSE-1440x250-EN.jpg"
          alt=""
        />
      </div>

      <div className="title_prod_desc">Product Details</div>

      <div data-aos="fade-up">
        <ProjectDetailsCarousel image={prodData.length>0 ? prodData[0].image:""} title={prodData.length>0 && prodData[0].title} description={prodData.length>0 && prodData[0].description} />
      </div>

      <div className="title_prod_desc" style={{ marginBottom: "20px" }}>
        Viewers Also Liked
      </div>

      <div className="viewer_ALSO_LIKED" data-aos="fade-up">
        <ViewersAlsoLikedSection viewersLikedData={womenViewrsLiked} />
      </div>

      <div className="view_more_also_liked">
        <button onClick={navigateFunction}>VIEW MORE</button>
      </div>

      <div className="title_prod_desc" style={{ marginBottom: "20px" }}>
        Recently Viewed
      </div>

      <div className="viewer_ALSO_LIKED" data-aos="fade-up">
        <ViewersAlsoLikedSection viewersLikedData={mensViewerLiked} />
      </div>

      <div className="title_prod_desc" style={{ marginBottom: "20px" }}>
        Product Reviews
      </div>

      <div className="prod_review">
        <div data-aos="fade-left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="gold"
            viewBox="0 0 576 512"
          >
            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
          </svg>
          <span>{prodData.length>0 && prodData[0].rating.rate}</span>
        </div>
        <div data-aos="fade-right">
          <span>{prodData.length>0 && prodData[0].rating.count} Reviews</span>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
