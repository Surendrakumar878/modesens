import Carousel from 'react-bootstrap/Carousel';

function ProjectDetailsCarousel() {
  return (
    <Carousel interval={1000} className='prod_details_carousel' variant="dark" indicators={false}>
     <Carousel.Item className='product_details_carousel_item'>
        <img
          className="img_product_details_carousel"
          src="https://cdn.modesens.com/availability/55757501?w=400"
          alt="Second slide"
        />
        <Carousel.Caption style={{textAlign:"justify"}} >
        <div style={{ marginTop: "0px", width: "100%" }}>
              <p style={{ fontSize: "20px", fontWeight: "bold" }}>
              Cotton Blend Parka In
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est exercitationem eaque rem amet sint dolore possimus quibusdam doloremque, cupiditate, necessitatibus eum. Rem adipisci consequatur esse magnam corrupti. Porro, dolore labore.
              </p>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='product_details_carousel_item'>
        <img
          className="img_product_details_carousel"
          src="https://cdn.modesens.com/availability/55757501?w=400"
          alt="Second slide"
        />
        <Carousel.Caption style={{textAlign:"justify"}} >
        <div style={{ marginTop: "0px", width: "100%" }}>
              <p style={{ fontSize: "20px", fontWeight: "bold" }}>
              Cotton Blend Parka In
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est exercitationem eaque rem amet sint dolore possimus quibusdam doloremque, cupiditate, necessitatibus eum. Rem adipisci consequatur esse magnam corrupti. Porro, dolore labore.
              </p>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProjectDetailsCarousel;