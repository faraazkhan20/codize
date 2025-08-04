import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Page from "./pages/Page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pages/:id" element={<Page />} />
    </Routes>
  );
}

export default App;
