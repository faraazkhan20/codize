import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          {[...Array(6)].map((_, i) => (
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-4" key={i}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card {i + 1}</h5>
                  <p className="card-text">Card content.</p>
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
