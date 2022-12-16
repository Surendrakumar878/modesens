import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Data from "./Data";
import LoginSignupModal from "../LoginSignup/LoginSignupModal";
// import CartData from "./CartData";
import { useSelector } from "react-redux";

import { store } from '../../Redux/store';

function Navbar() {
  const [modalShow, setModalShow] = React.useState(false);
  const token=useSelector((store)=>store.AuthReducer.token);
  console.log("token",token)
  const [menu, setMenu] = useState("");
  
  
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img className="full_logo"
            src="https://i.postimg.cc/7hFL7SGx/1670760238004-removebg-preview.jpg"
            alt=""
          ></img>
           <img className="short_logo"
            src="https://thumbs.dreamstime.com/z/c-shape-8574661.jpg"
            alt=""
            ></img>
           
        </div>
        {/* <div className="logomini">

        <img
            src="https://thumbs.dreamstime.com/z/c-shape-8574661.jpg"
            alt=""
            ></img>
            </div> */}
        <div className="links">
          <Link
            to="women"
            onMouseEnter={() => {
              let d = "women";
              setMenu(<Data r={d} />);
            }}
            onMouseLeave={() => {
              setMenu("");
            }}
          >
            WOMEN{" "}
          </Link>
          <Link
            to="men"
            onMouseEnter={() => {
              let d = "men";
              setMenu(
                <Data
                  r={d}
                  onMouseLeave={() => {
                    setMenu("");
                  }}
                />
              );
            }}
          >
            MEN
          </Link>
          <Link
            to="products"
            onMouseEnter={() => {
              let d = "beauty";
              setMenu(
                <Data
                  r={d}
                  onMouseLeave={() => {
                    setMenu("");
                  }}
                />
              );
            }}
          >
            BEAUTY
          </Link>
          <Link
            to="men"
            onMouseEnter={() => {
              let d = "kids";
              setMenu(
                <Data
                  r={d}
                  onMouseLeave={() => {
                    setMenu("");
                  }}
                />
              );
            }}
          >
            KIDS
          </Link>
          <Link
            to="/"
            onMouseEnter={() => {
              let d = "home";
              setMenu(
                <Data
                  r={d}
                  onMouseLeave={() => {
                    setMenu("");
                  }}
                />
              );
            }}
          >
            HOME
          </Link>
          <Link
            to="offers"
            onMouseEnter={() => {
              let d = "offers";
              setMenu(
                <Data
                  r={d}
                  onMouseLeave={() => {
                    setMenu("");
                  }}
                />
              );
            }}
          >
            OFFERS
          </Link>
          <Link
            to="design"
            onMouseEnter={() => {
              let d = "designers";
              setMenu(
                <Data
                  r={d}
                  onMouseLeave={() => {
                    setMenu("");
                  }}
                />
              );
            }}
          >
            DESIGNERS
          </Link>
          <Link
            to="community"
            onMouseEnter={() => {
              let d = "community";
              setMenu(
                <Data
                  r={d}
                  onMouseLeave={() => {
                    setMenu("");
                  }}
                />
              );
            }}
          >
            COMMUNITY
          </Link>
          <Link
            to="whycoolmart"
            onMouseEnter={() => {
              let d = "why";
              setMenu(
                <Data
                  r={d}
                  onMouseLeave={() => {
                    setMenu("");
                  }}
                />
              );
            }}
          >
            WHY COOLMART
          </Link>
        </div>
        <LoginSignupModal  show={modalShow}
        onHide={() => setModalShow(false)}/>
        <div className="rightIcons">
          <div className="flag_icon">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/20px-Flag_of_India.svg.png"
              alt=""
            ></img>
          </div>
         
          <div>
            <img className="bag"
              src="https://cdn.modesens.com/static/img/20200612shopping_bag2.svg"
              alt=""
            />
          </div>
          <div >
            <span>
            <img onClick={() => setModalShow(true)}
              src="https://cdn.modesens.com/static/img/20200612account_b2.svg"
              alt=""
              />
              </span>
              
          </div>
          <div >
            {/* <span className="admin" >
              <Link to="adminlogin">
            <img 
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAMAAADV/VW6AAAAY1BMVEX///8AAABkZGSjo6PV1dWNjY339/fc3Nz09PT8/Pzp6elzc3NRUVHg4OC+vr7w8PDHx8ceHh41NTVsbGybm5stLS23t7eDg4MTExMZGRmTk5MnJyeurq56enpdXV06OjpGRkZLXcteAAAECklEQVRoge2b2ZaqMBBFpUEUZBBQxAHh/7/ykoRRhVTsU73uA/XU7YpuSSo1u9l8KfHRLuvEsoo0u+W7bz/lS3b0LKyxpLe/+wb7U2q9SZH90ReI7u9wKReXH77/mYELibjpx2KB3mwALz1fhDdy8BjpkY7Oynf0dMb995fPvZMTEz4g0S3LYaHbRLqVctD3VLplPRjwNzq+wGt/TKdzaN/JBF+jrb9HVXslaOXfGdGtLRj/MMPXYHxmhk9CLL42w1tHKD0+G+JzKD5MDPHYm7+jObtBsKpP8vQrfsWv+BWPk/BqiL9B8f5cUj0n2GDXrQzxWIdLznA6AQd7WzN6usfij2b4J5ZuqnvwNOtgQi98NN7I8GRoupnuM5T4DJSP4eFNHh+cYygJqXR0gtcKsbpS89A3mwuFnsAvXScuJdHkqWsp/lNLB7u6qXg6PndRf7HGE8TM9Mb6zqf6XOXUiXj252Q/Y1P5F4ntt9irKBk1/l2c7biddMjB0Q1FwuPDPtmR8wcdpFVWGSS2g7OSjL17OEh3w5xx5N11r1zOLl7Dzp9V69KmdUb1/E4dPPgMgHMRzEr9PTV6P/JFkQskWxbbG9vtbl9lIPkSeN2F6fFaQxigfb4bjfy83OiXZm4gDn2ovJ5t3BZ4u4l9V3r20lazX79ScsAEHu7jNcC5ytcnYcdZvlRO1z2jX98D51Nwq0KacdShnO3bwsT+jTcKT5/L6KpVMGouqSjH/7Q2+zIM2EezSVVrZPqou1J3fWa0oIq+CACjhVqSuvkDrlT/zyYh6c006VvuWaqn7Xe/LWUsFb/MglBN1y6a4pUuLDd5TXJuX1PDVIffJ/yqgqmZKjFIe3Uty8Cd8A7yTZr8s6Cff7n8SZYlTWrf0JdVNFdXfaB39pYGk6TIw+9rXbWwbh9v/Vjo2qfFl5NVqdgM7UiPjcPL5+13W7pg7YEB8UKP3MHoO5TxAiBeHL5/Hv+n7zcg8eUE+KBU/ZD4+yTau1CqTkh8c/hTvL6/j8Q3RsQbVO9ImSaD4suRV6xdyiAfFF+M7NyN1GuB4kXA1y3zKUcPxue9y3t6G5fwBiy+0fYWSrr1aHzldT5vTxumw+LFicuHzojzZGC8CB8yNR5FGmQE44XP90JHBPGkNg8YHwwJFKnDCsYPDSNtlZ0F3xeUdHE5D/7QLac1ONH4ukvfaSO0aHzR1S9o/UU0vksciL11OL49fGJzF46/q9XE6Wk4vr35xClSPF4ePsXX8+Blnk/t6+PxhVhMnR3H42WeT50qYMCLohJ1LQP+YjDRwoCvXPpvJhjwzeGT13Lgc5c8R8iBL8njLCz4J/3nMhz4K32GkwNvICt+xf/3eMPfANGEPj0ams4kE+TzQNM/KgY48no9Hz4AAAAASUVORK5CYII="
              alt=""
              />
              </Link>
              </span> */}
              
          </div>
          
          
          
          <div className="search">
            <img
              style={{ width: "50%%" }}
              src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"
              alt=""
            />
            <input type="text" placeholder="SEARCH" />
          </div>
          <div
            style={{ marginTop: "-10px", cursor: "pointer" }}
            
          >
           
          </div>
        </div>
      </div>
      <div>{menu}</div>
    </div>
  );
}

export default Navbar;
