import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import cardsData from "../data/cardsData";

function Home() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          {cardsData.map((card, i) => (
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-4" key={i}>
              <Link to={`/pages/${card.title}`} className="card h-100 text-decoration-none">
                <div className="card-body h-100 text-center d-flex justify-content-center align-items-center p-3">
                  <div className="card-title m-0">{card.title}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
