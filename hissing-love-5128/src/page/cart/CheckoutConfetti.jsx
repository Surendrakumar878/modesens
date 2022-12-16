import React, { useState, useRef, useEffect } from "react";
import Confetti from "react-confetti";
import swal from "sweetalert";
import "./checkout.css";

export const Checkout = () => {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const confetiRef = useRef(null);

  useEffect(() => {
    swal({
      title: "order Placed!",
      text: "Thank you for shopping with coolmart and being cool",
      icon: "success",
    });
    setHeight(confetiRef.current.clientHeight);
    setWidth(confetiRef.current.clientWidth);
  }, []);

  return (
    <Confetti
      ref={confetiRef}
      numberOfPieces={250}
      width={"1524px"}
      height={"800px"}
    />
  );
};
