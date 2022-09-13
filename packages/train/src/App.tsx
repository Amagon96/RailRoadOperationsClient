import React, { useState } from "react";
import "./App.css"
import InputCard from "./components/Train/InputCard";
import OutputCard from "./components/Train/OutputCard";
import { ITrainCar } from "./types/TrainCar";

function App() {

  const [sortedTrain, setSortedTrain] = useState<ITrainCar[]>([])

  const handleSort = (sortedTrain: ITrainCar[]) => {
    setSortedTrain(sortedTrain)
  }

  return (
    <div className="App">
      <h1>Enter a train configuration</h1>
      <InputCard onSort={handleSort}/>
      <h1>Sorted train</h1>
      <OutputCard carList={sortedTrain}/>
    </div>
  );
}

export default App;
