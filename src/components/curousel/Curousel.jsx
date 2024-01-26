import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 1500, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Curousel() {
  return (
    <Carousel
      responsive={responsive}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      swipeable={false}
      infinite={true}
      keyBoardControl={true}
      draggable={false}
      containerClass="carousel-container"
      autoPlay={true}
      autoPlaySpeed={10000}
    >
      <div className="crousel-card">
        <img src="images/card1.webp" alt="This is a registeration img" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
          corrupti!
        </p>
      </div>
      <div className="crousel-card">
        <img src="images/card2.webp" alt="This is a registeration img" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
          corrupti!
        </p>
      </div>
      <div className="crousel-card">
        <img src="images/card3.webp" alt="This is a registeration img" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
          corrupti!
        </p>
      </div>
    </Carousel>
  );
}

export default Curousel;
