import "./Cards.css";

const LightCard = () => {
  const handleMouseMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div id="cards" className="cards-container">
      {[1, 2, 3, 4, 5, 6].map((index) => (
        <div
          key={index}
          className="card"
          onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
        >
          <div className="card-content">
            <div className="card-info-wrapper">
              <div className="card-info">
                <i className="fa-duotone fa-apartment"></i>
                <div className="card-info-title">
                  <h3>Apartments</h3>
                  <h4>Places to be apart. Wait, what?</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LightCard;
