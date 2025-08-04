import Navbar from "./components/Navbar";
import cardsData from "./data/cardsData";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          {cardsData.map((card, i) => (
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-4" key={i}>
              <div className="card h-100 bg-transparent border-2 rounded shadow" style={{ borderColor: card.color }}>
                <div className="card-body h-100 text-center d-flex justify-content-center align-items-center p-3">
                  <div className="card-title m-0" style={{ color: card.color }}>
                    {card.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
