import React from "react";
import "./App.css"
import TrainInputCard from "./components/Train/TrainInputCard";
import TrainOutputCard from "./components/Train/TrainOutputCard";

function App() {
  return (
    <div className="App">
      <h1>Input</h1>
      <TrainInputCard />
      <h1>Output</h1>
      <TrainOutputCard />
    </div>
  );
}

export default App;
