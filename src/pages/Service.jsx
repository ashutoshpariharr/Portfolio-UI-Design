import ServiceCard from "../components/cards/Cards";
import { useAuth } from "../store/auth";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Section } from "../components/social/TextAni";
import { useEffect } from "react";

const Service = ({ setProgress }) => {
  const { service = [] } = useAuth();
  // const {loading} = useAuth();

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  useEffect(() => {
    setProgress(50)
    setTimeout(() => {
      setProgress(2000)
    }, 2000);
  }, [])

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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="service-horizontal">
        <ServiceCard />
      </div>

      {/* Costomer satisfact text */}
      <Section>
        <h1 className="service-costomer">
          Internship Success: Earned Praise from a Satisfied Supervisor
        </h1>
      </Section>

      <Section>
        <div className="constomer-satisfaction">
          {/* <div className="cos-1">
            <h2>Internship Feedbacks</h2>
          </div> */}
          <div className="cos-2">
            <p>
              During my final internship, I had the privilege of working under
              the guidance of an esteemed supervisor who recognized and
              appreciated my dedication and contributions. His satisfaction with
              my performance was evident through his words of praise and
              encouragement. From tackling complex tasks to demonstrating
              initiative and problem-solving skills, I consistently strived to
              exceed expectations and deliver exceptional results. <br />
              Under the mentorship of my supervisor, I not only refined my
              technical skills but also developed valuable professional
              qualities such as teamwork, communication, and adaptability. His
              satisfaction with my performance not only validated my efforts but
              also fueled my passion for continuous growth and improvement.{" "}
              <br />
              As I reflect on my internship experience, I am grateful for the
              opportunity to have made a positive impact and earned the respect
              and appreciation of my supervisor. It is a testament to my
              commitment to excellence and my ability to thrive in a
              professional environment.
            </p>
          </div>
        </div>
      </Section>

      {/* Data fetch from the database */}
      <Section>
        <h1 className="main-heading">Service</h1>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            padding: "2rem",
            justifyContent: "center",
            marginTop: "-1rem",
          }}
        >
          Data Come From The Database
        </p>
      </Section>

      <div className="service-container">
        <Slider {...settings}>
          {service.map((curElem, index) => {
            const { price, description, provider, service, ImageURL } = curElem;
            return (
              <div className="services-card" key={index}>
                <div className="services-card-img">
                  <img src={ImageURL} alt="This is log img" />
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
