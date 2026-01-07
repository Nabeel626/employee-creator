import { Route, Routes } from "react-router-dom";
import Add from "./assets/pages/Add";
import Home from "./assets/pages/Home";
import "./App.scss";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-employee" element={<Add />} />
      </Routes>
    </div>
  );
}

export default App;
