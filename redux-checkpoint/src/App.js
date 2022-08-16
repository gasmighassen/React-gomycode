import "./App.css";
import React from "react";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";

function App() {
  return (
    <div>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
