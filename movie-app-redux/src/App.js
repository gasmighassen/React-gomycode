import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Description from "./components/Description";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/desc/:title" element={<Description />} />
      </Routes>
    </div>
  );
}

export default App;
