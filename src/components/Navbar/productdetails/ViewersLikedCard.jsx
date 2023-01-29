import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function ViewerLikedCard({ el }) {
  return (
    <Card key={el.id}
      style={{
        border: "none",
        width: "281px",
        height: "441px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign:"center",
        justifyContent: "space-evenly",
        fontFamily: "SuisseIntl",
      }}
      className="viewer_liked_Card"
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
          xmlns="http://www.w3.org/2000/svg"
          className="heartsvg"
          width="20"
          height="20"
          style={{ marginBottom: "10px", marginTop: "5px" }}
          fill="gray"
          viewBox="0 0 512 512"
        >
          <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
        </svg>
      </div>
      <Card.Img
        variant="top"
        src={el.image}
        style={{ width: "229px", height: "265px" }}
      />
      <div className="hide_CARD_VIEW"  style={{ width: "229px", height: "40px",border:"1px solid #1c1c1c",background:"transparent",color:"#000" }}>VIEW MORE</div>
      <Card.Body>
        <Card.Title style={{ fontSize: "14px", fontWeight: "600" }}>
          {el.title}
        </Card.Title>
        <Card.Text
          style={{ fontSize: "14px", marginBottom: "7px", marginTop: "7px" ,color:"red" ,fontWeight:"bold"}}
        >
          ₹ {el.price}
        </Card.Text>
        <Card.Text style={{ fontSize: "14px", color: "#8e838e" }}>
          Compare {el.stores} stores
        </Card.Text>
        {el.available==true? <Card.Text style={{ fontSize: "14px", color: "#000" }}>
          Stock Available
        </Card.Text>:<Card.Text style={{ fontSize: "14px", color: "#c00000" }}>
          Stock Not Available
        </Card.Text>} 
      </Card.Body>
    </Card>
  );
}

export default ViewerLikedCard;
