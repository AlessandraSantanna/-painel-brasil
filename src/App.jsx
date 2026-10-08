import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Estados from "./pages/Estados/Estados";

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



