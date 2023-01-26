import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css";

const CartData = () => {
    const [logmenu,setLogmenu]=useState("")
    let logData=[
        "USERLOGIN",
        "ADMINLOGIN"
    ]
  return (
    <>
    <div>{logData.map((el,i)=>{
        return(
            <div key ={i} className="logmenu" style={{
                fontSize: "10px",
              }}>

                {el}
            </div>
        )
        
    })}</div>
    <div className="cartdata">{logmenu}</div>
        </>
  )
}

export default CartData