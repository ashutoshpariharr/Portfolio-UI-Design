import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 1500, min: 1024 },
    items: 2,
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

const data = [
  {
    url: "images/card1.webp",
    type: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id veniam asperiores, totam iure eos, culpa vitae quis corporis nam dolorum esse qui quo numquam? Et itaque inventore voluptates fugiat aliquam!",
    footer: '"MERN STACK"',
  },
  {
    url: "images/card2.webp",
    type: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id veniam asperiores, totam iure eos, culpa vitae quis corporis nam dolorum esse qui quo numquam? Et itaque inventore voluptates fugiat aliquam!",
    footer: '"Front-end Developer"',
  },
  {
    url: "images/card3.webp",
    type: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, quisquam.",
    footer: '"Back-end developer"',
  },
  {
    url: "images/card2.webp",
    type: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id veniam asperiores, totam iure eos, culpa vitae quis corporis nam dolorum esse qui quo numquam? Et itaque inventore voluptates fugiat aliquam!",
    footer: '"Full Stack Developer"',
  },
];

function Curousel() {
  return (
    <Carousel
      responsive={responsive}
      dotListClass="custom-dot-list-style"
      // itemClass="carousel-item-padding-40-px"
      swipeable={false}
      infinite={true}
      // keyBoardControl={true}
      draggable={false}
      containerClass="carousel-container"
      // autoPlay={true}
      // autoPlaySpeed={4000}
    >
      {data.map((info, index) => (
        <div className="banner" key={index}>
          <div className="child-banner">
            <img src={info.url} alt={`banner ${index}`} />
          </div>

          <div className="child-para">
            <p> {info.type} </p>
            <br />
            <h2> {info.footer} </h2>
            <br />
            <button className="banner-btn">
              {" "}
              <span>View More </span>
            </button>
          </div>
        </div>
      ))}

      {/* </div> */}
    </Carousel>
  );
}

export default Curousel;
