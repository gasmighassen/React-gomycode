import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Description from "./components/Description";
import Home from "./components/Home";

function App() {
  const [text, setText] = useState("");
  const [rate, setRate] = useState("");
  return (
    <div className="App">
      <NavBar setText={setText} setRate={setRate} />
      <Routes>
        <Route path="/" element={<Home text={text} rate={rate} />} />
        <Route path="/desc/:title" element={<Description />} />
      </Routes>
    </div>
  );
}

export default App;
