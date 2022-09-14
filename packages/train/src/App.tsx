import React, { useState } from "react";
import InputCard from "./components/Train/InputCard";
import OutputCard from "./components/Train/OutputCard";
import { ITrainCar } from "./types/TrainCar";
import { Box, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline/CssBaseline";

function App() {

  const [sortedTrain, setSortedTrain] = useState<ITrainCar[]>([])

  const handleSort = (sortedTrain: ITrainCar[]) => {
    setSortedTrain(sortedTrain)
  }

  return (
    <>
      <CssBaseline/>
      <InputCard onSort={handleSort}/>
      <OutputCard carList={sortedTrain}/>
    </>
  );
}

export default App;
