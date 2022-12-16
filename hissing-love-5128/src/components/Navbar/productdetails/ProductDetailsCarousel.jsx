import Carousel from 'react-bootstrap/Carousel';

function ProjectDetailsCarousel({image,title,description}) {
  return (
    <Carousel interval={1000} className='prod_details_carousel' variant="dark" indicators={false}>
     <Carousel.Item className='product_details_carousel_item'>
        <img
          className="img_product_details_carousel"
          src={image}
          alt="Second slide"
        />
        <Carousel.Caption style={{textAlign:"justify"}} >
        <div style={{ marginTop: "0px", width: "100%" }}>
              <p style={{ fontSize: "20px", fontWeight: "bold" }}>
             {title}
              </p>
            </div>
            <div style={{ marginTop: "20px", width: "100%" }}>
              <p
                style={{
                  fontSize: "11.9px",
                  fontWeight: "600",
                  color: "#8e8e8e",
                }}
              >
                {description}  </p>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='product_details_carousel_item'>
        <img
          className="img_product_details_carousel"
          src={image}
          alt="Second slide"
        />
        <Carousel.Caption style={{textAlign:"justify"}} >
        <div style={{ marginTop: "0px", width: "100%" }}>
              <p style={{ fontSize: "20px", fontWeight: "bold" }}>
             {title}
              </p>
            </div>
            <div style={{ marginTop: "20px", width: "100%" }}>
              <p
                style={{
                  fontSize: "11.9px",
                  fontWeight: "600",
                  color: "#8e8e8e",
                }}
              >
              {description} </p>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProjectDetailsCarousel;