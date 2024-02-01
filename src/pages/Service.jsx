import ServiceCard from "../components/cards/Cards";
import { useAuth } from "../store/auth";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Service = () => {
  const { service = [] } = useAuth();
  // const {loading} = useAuth();

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  if (!Array.isArray(service)) {
    console.error("Service is not an array:", service);
    return <p>Error: Invalid data type for service</p>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <ServiceCard />

      {/* Costomer satisfact text */}

      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          marginBlock: "4rem",
        }}
      >
        Costomer Feedback
      </h1>
      <div className="constomer-satisfaction">
        <div className="cos-1">
          <h2>Costomer Satisfaction</h2>
        </div>
        <div className="cos-2">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus eum
            in doloremque corporis asperiores commodi numquam dolorem, nam ab
            tenetur sequi sint, consectetur facere hic ad voluptas quae est,
            quos voluptate autem nihil! Numquam harum tempore eos eligendi? Ab
            eveniet doloremque quos alias incidunt nesciunt molestias odit
            quidem, sint labore numquam consequuntur. Incidunt sint perspiciatis
            unde recusandae esse porro commodi facere, magni optio, enim
            obcaecati tempore expedita! Quibusdam, suscipit ipsa.
          </p>
        </div>
      </div>

      {/* Data fetch from the database */}
      <h1 className="main-heading">Service</h1>

      <div className="service-container">
        <Slider {...settings}>
          {service.map((curElem, index) => {
            const { price, description, provider, service } = curElem;
            return (
              <div className="services-card" key={index}>
                <div className="services-card-img">
                  <img
                    src="images/login.png"
                    alt="This is log img"
                    width={200}
                  />
                </div>
                <div className="servicesCard-details">
                  <div className="servicesContant">
                    <p>{provider}</p>
                    <p>{price}</p>
                  </div>
                </div>
                <h2>{service}</h2>
                <p>{description}</p>
              </div>
            );
          })}
        </Slider>
      </div>

      {/* Service testimonial */}
    </>
  );
};

export default Service;
