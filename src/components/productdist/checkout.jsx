import { Button, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import "./checkout.css";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const handlesubmit = () => {
    if (name === "" || email === "" || address === "") {
      alert("fill all input fileds")
      navigate("/checkout")
    }
    else {
      navigate("/")
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
                <Input placeholder="Enter your Full Name" type="text" onChange={(e) => setName(e.target.value)} /><br />
                <label>Email</label>
                <Input placeholder="Enter your Email" type="text" onChange={(e) => setEmail(e.target.value)} />
                <label>Address</label>
                <Input placeholder="Enter your Address" type="text" onChange={(e) => setAddress(e.target.value)} />
                <label>Pin</label>
                <Input placeholder="Enter your Pin" type="text" />
                <label>Phone no</label>
                <Input placeholder="Phone no" type="number" />
                <Button type="submit" bg={"black"} color="white" _hover={{ bg: 'black' }} w={"100%"} mt={"15px"}>Submit</Button>
              </form>
            </div>
            <div className="grandtotal">
              <div><p style={{ fontWeight: "bold", fontSize: "20px" }}>Total</p> <p style={{ fontWeight: "bold", fontSize: "20px" }}> : ₹567</p></div>
              <div><p style={{ fontWeight: "bold", fontSize: "20px" }}>Shipping charges</p><p style={{ fontWeight: "bold", fontSize: "20px" }}>Free</p></div>

              <div><p style={{ fontWeight: "bold", fontSize: "20px" }}>Your Grand Total</p> <p style={{ fontWeight: "bold", fontSize: "20px", color: "red" }}> : ₹567</p></div>
            </div>
          </div>


        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Your Shipping Address</h2>
          <hr />
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p> */}
          <div className="maincash">
            <div className="cashform">
              <form onSubmit={handlesubmit}>
                <label>Full Name</label>
                <Input placeholder="Enter your Full Name" type="text" onChange={(e) => setName(e.target.value)} /><br />
                <label>Email</label>
                <Input placeholder="Enter your Email" type="text" onChange={(e) => setEmail(e.target.value)} />
                <label>Address</label>
                <Input placeholder="Enter your Address" type="text" onChange={(e) => setAddress(e.target.value)} />
                <label>Pin</label>
                <Input placeholder="Enter your Pin" type="text" />
                <label>Phone no</label>
                <Input placeholder="Phone no" type="number" />
                <Button type="submit" bg={"black"} color="white" _hover={{ bg: 'black' }} w={"100%"} mt={"15px"}>Submit</Button>
              </form>
            </div>
            <div className="grandtotal">
              <label>Card Number</label>
              <Input placeholder="Enter your 16 digit card number" type="number" /><br />
              <label >Name on Card</label>
              <Input placeholder="Name on card" type="number" style={{marginBottom:"20px"}}/><br />
              <div style={{ display: "flex" }}>
                <div><label>Expiry Date</label>
                  <Input placeholder="Expiry" type="text" /></div>
                <div style={{ marginLeft: "20px" }}>
                  <p>CVV</p>
                  <Input placeholder="CVV" type="number" />
                </div>


              </div>
              <div style={{marginTop:"20px"}}><p style={{ fontWeight: "bold", fontSize: "20px" }}>Total</p> <p style={{ fontWeight: "bold", fontSize: "20px" }}> : ₹567</p></div>
              <div><p style={{ fontWeight: "bold", fontSize: "20px" }}>Shipping charges</p><p style={{ fontWeight: "bold", fontSize: "20px" }}>Free</p></div>

              <div><p style={{ fontWeight: "bold", fontSize: "20px" }}>Your Grand Total</p> <p style={{ fontWeight: "bold", fontSize: "20px", color: "red" }}> : ₹567</p></div>
            </div>
          </div>
        </div>

        {/* <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Content 3</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Tabs;