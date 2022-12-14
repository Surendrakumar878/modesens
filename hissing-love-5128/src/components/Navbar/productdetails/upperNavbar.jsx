import Carousel from "react-bootstrap/Carousel";

function UpperNavbarCarousel() {
  return (
    <Carousel indicators={false} interval={1000} className="upperNavbarCarousel">
      <Carousel.Item style={{background:"#000",width:"100%",height:"30px"}}>
        <p style={{ color: "#fff", fontWeight: "bold",fontSize:"14px",marginTop:"3px" }}>
          Check Coolmart before you buy.
          <span style={{ fontWeight: "lighter" }}>
            Compare across 500+ stores for your items.
          </span>
        </p>
      </Carousel.Item>
      <Carousel.Item style={{background:"#C00000",width:"100%",height:"30px"}}>
        <p style={{ color: "#fff", fontWeight: "bold",fontSize:"14px",marginTop:"3px"  }}>
          IT'S THE SELL SEASON.
          <span style={{ fontWeight: "lighter" }}>
            The best deals from 500+ retailers.
          </span>
        </p>
      </Carousel.Item>
    </Carousel>
  );
}

export default UpperNavbarCarousel;
