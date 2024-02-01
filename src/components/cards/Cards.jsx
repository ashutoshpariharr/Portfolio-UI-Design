import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import "../../style.css";

const ServiceCard = () => {
  return (
    <div className="serviceCard">
      <div className="service-item">
       <span className="serviceSpan">Projects</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          neque tenetur cupiditate explicabo ea, facere inventore, illum dolorem
          ab rem nostrum perspiciatis mollitia saepe impedit nemo aliquid
          aliquam minima. Doloremque.
        </p>
      </div>
      <br />
     
      <HorizontalScrollCarousel />
      <div className="service-item">
      {/* <span className="serviceSpan">Scroll up</span> */}
      <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          neque tenetur cupiditate explicabo ea, facere inventore, illum dolorem
          ab rem nostrum perspiciatis mollitia saepe impedit nemo aliquid
          aliquam minima. Doloremque.
        </p>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="target">
      <div className="sticky">
        <motion.div style={{ x, display: "flex", gap: 20 }}>
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};
const Card = ({ card }) => {
  return (
    <div key={card.id} className="root-card">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50%",
        }}
      ></div>
      <div className="content">
        <p>{card.title}</p>
      </div>
      <div className="content">
        <h2>{card.heding}</h2>
      </div>
      <div className="content">
        <button className="btn">Visit</button>
        <button className="btn">Code</button>
      </div>
    </div>
  );
};

export default ServiceCard;

const cards = [
  {
    url: "https://images.unsplash.com/photo-1611243017235-84454d0491aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heding: "Thisis heding",
    title:
      "Title 1 This si ashutosh parhar kig h wo biajjfiejiejiijiejiejiejiejieiejeieeiie",
    id: 1,
  },
  {
    url: "  https://images.unsplash.com/photo-1611243017235-84454d0491aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Title 2",
    id: 2,
  },
  {
    url: "https://images.unsplash.com/photo-1611243017235-84454d0491aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Title 3",
    id: 3,
  },
  {
    url: "https://images.unsplash.com/photo-1611243017235-84454d0491aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Title 4",
    id: 4,
  },
  {
    url: "https://images.unsplash.com/photo-1611243017235-84454d0491aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Ashutosh papa",
    id: 5,
  },
  {
    url: "https://images.unsplash.com/photo-1611243017235-84454d0491aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Title 6",
    id: 6,
  },
  {
    url: "https://images.unsplash.com/photo-1611243017235-84454d0491aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Title 7",
    id: 7,
  },
];
