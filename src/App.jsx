
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Estados from "./Pages/Estados/Estados";

import "./App.css";
function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/estados"
          element={<Estados />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;



