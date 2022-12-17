import React from "react";
import { Link } from "react-router-dom";
import CartCard from "./CartCard";
import ViewerLikedCard from "./ViewersLikedCard";

const CartCardsParent = ({ viewersLikedData }) => {
  return (
    <>
      {viewersLikedData.map((el) => {
        return (
          <div>
            <CartCard key={el.id} el={el} />
          </div>
        );
      })}
    </>
  );
};

export default CartCardsParent;