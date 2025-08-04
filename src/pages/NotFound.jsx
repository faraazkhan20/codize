import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

function NotFound() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h4 className="text-center mb-0">Error 404</h4>
        <h6 className="text-center">Page Not Found</h6>
      </div>
    </>
  );
}

export default NotFound;
