import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Arrays from "./pages/Arrays";
import Sorting from "./pages/Sorting";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pages/Arrays" element={<Arrays />} />
      <Route path="/pages/Sorting" element={<Sorting />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
