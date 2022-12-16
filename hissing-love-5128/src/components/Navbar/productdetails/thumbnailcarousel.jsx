import Carousel from "react-bootstrap/Carousel";
import { ImageMagnifier } from "./ImageMagnifier";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

function ThumbnailCarousel({image}) {
  const navigate=useNavigate();
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  // This arrangement can be altered based on how we want the date's format to appear.
  let currentDate = `${day}/${month}/${year}`;
  console.log(currentDate);

  const sharetosocial=()=>{
    swal("Select where you want to share?", {
      buttons: {
        cancel: "Cancel",
        catch: {
          text: "G-mail",
          value: "catch",
        }
      },
    })
    .then((value) => {
      switch (value) {
     
        case "Cancel":
          swal("Share cancelled successfully");
          break;
     
        case "catch":
          navigate("/")
          break;
     
        default:
          swal("Share cancelled successfully");
      }
    });
  }

  return (
    <Carousel
      interval={3000}
      variant="dark"
      indicatorLabels={false}
      indicators={false}
      className="thumbnail_carousel_rb"
      style={{ width: "100%" }}
    >
      <Carousel.Item>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="thumbnail_carousel_img_parent_div">
            <ImageMagnifier
              width={"130px"}
              height={"180px"}
              src={image}
            />
          </div>
          <div
            style={{
              width: "10%",
              height: "180px",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              flexDirection: "column",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="heartsvg"
              width="25"
              height="25"
              style={{ marginBottom: "10px", marginTop: "5px" }}
              fill="gray"
              viewBox="0 0 512 512"
            >
              <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
            </svg>
            <img
            onClick={sharetosocial}
              src="https://cdn.modesens.com/static/img/20210908share.svg"
              style={{ width: "25px", height: "25px",zIndex:"11" }}
              alt=""
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "11.9px",
            fontWeight: "bold",
            color: "#000",
            alignItems: "flex-end",
            justifyContent: "left",
          }}
        >
          <p style={{ textDecoration: "underline", marginLeft: "6%" }}>
            Visit Coolmart For More Details
          </p>
          <p style={{ marginLeft: "28%" }}>First seen in {currentDate}</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="thumbnail_carousel_img_parent_div">
            <ImageMagnifier
              width={"130px"}
              height={"180px"}
              src={image}
            />
          </div>
          <div
            style={{
              width: "10%",
              height: "180px",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              flexDirection: "column",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              className="heartsvg"
              height="25"
              style={{ marginBottom: "10px", marginTop: "5px" }}
              fill="gray"
              viewBox="0 0 512 512"
            >
              <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
            </svg>
            <img
              src="https://cdn.modesens.com/static/img/20210908share.svg"
              style={{ width: "25px", height: "25px",zIndex:"11" }}
              alt=""
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "11.9px",
            fontWeight: "bold",
            alignItems: "flex-end",
            justifyContent: "left",
          }}
        >
          <p style={{ textDecoration: "underline", marginLeft: "6%" }}>
            Visit Coolmart For More Details
          </p>
          <p style={{ marginLeft: "28%" }}>First seen in {currentDate}</p>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default ThumbnailCarousel;
