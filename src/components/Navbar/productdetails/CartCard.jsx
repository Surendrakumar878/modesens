import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { removefromcart } from "../../../Redux/ProductReducer/action";
import { store } from "../../../Redux/store";

function CartCard({ el }) {
  const dispatch = useDispatch();
  const cartData = useSelector((store) => store.ProductReducer.CartData);
  const [total, setTotal] = useState(0);
  const [count,setCount]=useState(1);

  console.log(cartData, "card");

  const removefromcartfunction = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to see this item in cart",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Item has been removed from cart!", {
          icon: "success",
        });

        let newcart = cartData.filter((Item) => {
          return Item.id != el.id;
        });
        dispatch(removefromcart(newcart));
      } else {
      }
    });
  };

  return (
    <Card
      key={el.id}
      style={{
        border: "none",
        width: "281px",
        height: "461px",
        display: "flex",
        boxShadow:
          "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "space-evenly",
        fontFamily: "SuisseIntl",
      }}
    >
      <div
        style={{
          width: "229px",
          height: "20px",
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "right",
        }}
      >
        <svg
          onClick={removefromcartfunction}
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginBottom: "10px", marginTop: "5px", cursor: "pointer" }}
          viewBox="0 0 448 512"
          width="20"
          height="20"
          fill="#000"
        >
          <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
        </svg>
      </div>
      <Link to={`/details/${el.id}`}>
        {" "}
        <Card.Img
          variant="top"
          src={el.image}
          style={{ width: "229px", height: "265px" }}
        />
      </Link>
      <div
        className="hide_CARD_VIEW"
        style={{
          width: "229px",
          height: "40px",
          border: "1px solid #1c1c1c",
          background: "transparent",
          color: "#000",
        }}
      >
        VIEW MORE
      </div>
      <Card.Body>
        <Card.Title style={{ fontSize: "14px", fontWeight: "600" }}>
          {el.title}
        </Card.Title>
        <Card.Text
          style={{ fontSize: "14px", marginBottom: "7px", marginTop: "7px" }}
        >
          ₹ {el.price}
        </Card.Text>
        <Card.Text style={{ fontSize: "14px", color: "#8e838e" }}>
          Compare {el.stores} stores
        </Card.Text>

        {el.available == true ? (
          <Card.Text style={{ fontSize: "14px", color: "#000" }}>
            Stock Available
          </Card.Text>
        ) : (
          <Card.Text style={{ fontSize: "14px", color: "#c00000" }}>
            Stock Not Available
          </Card.Text>
        )}
    
      </Card.Body>
    </Card>
  );
}

export default CartCard;
