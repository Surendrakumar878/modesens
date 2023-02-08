import { Button, FormControl, FormErrorMessage, FormLabel, Input,FormHelperText } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { checkoutclear } from "../../Redux/ProductReducer/action";
import "./check.css";

function Tabs() {
  const cartData = useSelector((store) => store.ProductReducer.CartData);
  console.log(cartData)
  const [toggleState, setToggleState] = useState(1);
  const dispatch=useDispatch()
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [pin, setPin] = useState("")
  const [total, setTotal] = useState(0);
    useEffect(() => {
      let sum = 0;
      for (let i = 0; i < cartData.length; i++) {
        sum += cartData[i].price;
      }
      setTotal(Math.round(sum));
    }, [cartData]);
    // console.log(pin.length)
  const handlesubmit = () => {
    if(pin.length===6){
      dispatch(checkoutclear([]));
      alert("Your order placed Successfully")
      navigate("/")
    }
    else{
      alert("enter correct credential")
    }
    
  }

  const toggleTab = (index) => {
    setToggleState(index);
  };
 

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Cash on dilevery
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Online Pay
        </button>

      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Your Shipping Address</h2>
          <hr />
          <div className="maincash">
            <div className="cashform">
              <form onSubmit={handlesubmit}>
                <label>Full Name</label>
                <Input placeholder="Enter your Full Name" type="text" value={name}onChange={(e) => setName(e.target.value)} required /><br />
                <label>Email</label>
                <Input placeholder="Enter your Email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label>Address</label>
                <Input placeholder="Enter your Address" type="text" value={address}onChange={(e) => setAddress(e.target.value)} required/>
                <label>Pin</label>
                <Input placeholder="Enter your Pin" type="number" value={pin} onChange={(e) => setPin(e.target.value)} />
              <p style={{color:"red"}}>{pin.length!=6 && pin.length>0?"Enter 6 digit pin":""}</p> 
               <br/> <label>Phone no</label>
                <Input placeholder="Phone no" type="number" required/>
                <Button type="submit" bg={"black"} color="white" _hover={{ bg: 'black' }} w={"100%"} mt={"15px"}>Submit</Button>
              </form>
            </div>
            <div className="grandtotal">
              <div><p style={{ fontWeight: "bold", fontSize: "20px" }}>Total</p> <p style={{ fontWeight: "bold", fontSize: "20px" }}> : ₹{total}</p></div>
              <div><p style={{ fontWeight: "bold", fontSize: "20px" }}>Shipping charges</p><p style={{ fontWeight: "bold", fontSize: "20px" }}>Free</p></div>

              <div><p style={{ fontWeight: "bold", fontSize: "20px" }}>Your Grand Total</p> <p style={{ fontWeight: "bold", fontSize: "20px", color: "red" }}> : ₹{total}</p></div>
            </div>
          </div>


        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Your Shipping Address</h2>
          <hr />
         
          <div className="maincash">
            <div className="cashform">
              <form onSubmit={handlesubmit}>
                <label>Full Name</label>
                <Input placeholder="Enter your Full Name" type="text" value={name} onChange={(e) => setName(e.target.value)} required /><br />
                <label>Email</label>
                <Input placeholder="Enter your Email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label>Address</label>
                <Input placeholder="Enter your Address" type="text" value={address} onChange={(e) => setAddress(e.target.value)} required/>
                <label>Pin</label>
                <Input placeholder="Enter your Pin" type="number" value={pin} onChange={(e) => setPin(e.target.value)} />
              <p style={{color:"red"}}>{pin.length!=6 && pin.length>0?"Enter 6 digit pin":""}</p> 
                <label>Phone no</label>
                <Input placeholder="Phone no" type="number" required/>
                <Button type="submit" bg={"black"} color="white" _hover={{ bg: 'black' }} w={"100%"} mt={"15px"}>Submit</Button>
              </form>
            </div>
            <div className="grandtotal">
            
              <label>Card Number</label>
              <Input placeholder="Enter your 16 digit card number" type="number" required/><br />
              <label >Name on Card</label>
              <Input placeholder="Name on card" type="text" style={{marginBottom:"20px"}} required/><br />
              <div style={{ display: "flex" }}>
                <div><label>Expiry Date</label>
                  <Input placeholder="Expiry" type="text" required /></div>
                <div style={{ marginLeft: "20px" }}>
                  <p>CVV</p>
                  <Input placeholder="CVV" type="password" required/>
                </div>


              </div>
              <div style={{marginTop:"20px"}}><p style={{ fontWeight: "bold", fontSize: "20px" }}>Total</p> <p style={{ fontWeight: "bold", fontSize: "20px" }}> : ₹{total}</p></div>
              <div><p style={{ fontWeight: "bold", fontSize: "20px" }}>Shipping charges</p><p style={{ fontWeight: "bold", fontSize: "20px" }}>Free</p></div>

              <div><p style={{ fontWeight: "bold", fontSize: "20px" }}>Your Grand Total</p> <p style={{ fontWeight: "bold", fontSize: "20px", color: "red" }}> : ₹{total}</p></div>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  );
}

export default Tabs;