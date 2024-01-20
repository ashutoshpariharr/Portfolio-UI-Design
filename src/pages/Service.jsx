import ServiceCard from "../components/cards/Cards";
import LightCard from "../components/cards/LightCard";
import { useAuth } from "../store/auth";

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

  return (
    <>
      <ServiceCard />

      <section className="section-services">
        <div>
          <div className="container">
            <h1 className="main-heading">Service</h1>
          </div>
          <div className="container grid grid-three-cols">
            {service.map((curElem, index) => {
              const { price, description, provider, service } = curElem;
              return (
                <div className="card" key={index}>
                  <div className="card-img">
                    <img
                      src="images/login.png"
                      alt="This is log img"
                      width={200}
                    />
                  </div>
                  <div className="card-details">
                    <div className="grid grid-two-cols">
                      <p>{provider}</p>
                      <p>{price}</p>
                    </div>
                  </div>
                  <h2>{service}</h2>
                  <p>{description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <LightCard />
    </>
  );
};

export default Service;
