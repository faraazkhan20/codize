import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <Link className="navbar-brand fw-semibold" to="/">
          Codize
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Link
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control form-control-sm me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-sm btn-outline-success me-2" type="submit">
              Search
            </button>
            <button className="btn btn-sm btn-outline-primary" type="submit">
              GitHub
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
