import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./cart.css";
import { store } from "../../Redux/store";
import ViewersAlsoLikedSection from "../../components/Navbar/productdetails/ViewersAlsoLikedSection";
import { mensViewerLiked } from "../../components/Navbar/productdetails/mensViewerLiked";
import Aos from "aos";
import CartCardsParent from "../../components/Navbar/productdetails/CartCardsParent";
import swal from "sweetalert";
import { checkoutclear } from "../../Redux/ProductReducer/action";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const cartData = useSelector((store) => store.ProductReducer.CartData);
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  // console.log("Isauth",isAuth)
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // console.log(prodData[0])
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    let sum = 0;
    for (let i = 0; i < cartData.length; i++) {
      sum += cartData[i].price;
    }
    setTotal(Math.round(sum));
  }, [cartData]);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  function checkoutfuction() {
    if(isAuth==false){
      return swal({
        title:"Not Logged in!",
        text:"It seems you are not logged in. Login now!",
        icon:"warning"
      })
      
    }
    // swal({
    //   title: "Order Placed Successfully",
    //   text: "Thank you for shopping with coolmart and being cool.",
    //   icon: "success",
    //   buttons: false,
    // });
    // dispatch(checkoutclear([]));
    setTimeout(() => {
      navigate("/checkout");
    }, 2000);
  }

  console.log(cartData);
  return (
    <>
      {cartData != [] && cartData.length > 0 ? (
        <div className="main_cart_1" style={{border:"none"}}>
          <div style={{ fontSize: "24px" }} className="cart_heading">
            MODESENS CONCIERGE
          </div>
          <div style={{ fontSize: "20px",textAlign:"center" }} >
            Your Added Items In Cart
          </div>

          <div className="viewer_ALSO_LIKED" style={{marginTop:"30px"}} data-aos="fade-up">
            <CartCardsParent viewersLikedData={cartData} />
          </div>
          <div className="fixed_Under_Bar">
             <p>
              <span>Your Grand Total Is :- </span>
              <span style={{ color: "#c00000" }}>₹ {total}</span>
            </p>
            <button
              style={{
                width: "129px",
                height: "39px",
                color: "#fff",
                backgroundColor: "#000",
              }}
              onClick={checkoutfuction}
            >
              CHECKOUT
            </button>
          </div>
        </div>
      ) : (
        <div className="main_cart" style={{border:"none"}}>
          <div style={{ fontSize: "24px" }} className="cart_heading">
            MODESENS CONCIERGE
          </div>
          <div style={{ fontSize: "16px" }} className="cart_heading_2">
            <p>
              {" "}
              Let ModeSens determine which store fulfill your request to get the
              best price for the product you want
            </p>
            <p>
              - enjoy a worry-free experience with no additional cost to you.
            </p>
          </div>

          <div>
            <div style={{ fontSize: "16px" }} className="cart_heading_3">
              <p> YOUR SHOPPING BAG IS EMPTY</p>
              <p>You haven't added any pieces to your bag - yet</p>
            </div>
          </div>

          <div style={{ marginTop: "30px" }}>
            <img
              className="empty_cart_img"
              src="https://cdn.modesens.com/static/img/20190618_nothing.svg"
              alt=""
            />
          </div>

          <div className="empty_cart_btn">
            <button onClick={()=>{navigate("/womens")}}>SHOP WOMEN</button>
            <button onClick={()=>{navigate("/men")}}>SHOP MEN</button>
            <button onClick={()=>{navigate("/kids")}}>SHOP KIDS</button>
          </div>
          <div className="title_prod_desc" style={{ marginBottom: "20px" }}>
            Recently Viewed
          </div>

          <div className="viewer_ALSO_LIKED" data-aos="fade-up">
            <ViewersAlsoLikedSection viewersLikedData={mensViewerLiked} />
          </div>
        </div>
      )}
    </>
  );
};
