import React, { useState } from "react";
import InputCard from "./components/Train/InputCard";
import OutputCard from "./components/Train/OutputCard";
import { ITrainCar } from "./types/TrainCar";
import { Box, Typography } from "@mui/material"

function App() {

  const [sortedTrain, setSortedTrain] = useState<ITrainCar[]>([])

  const handleSort = (sortedTrain: ITrainCar[]) => {
    setSortedTrain(sortedTrain)
  }

  return (
    <Box className="App">
      <Typography variant="h5" align="center" sx={{paddingY:"25px", fontWeight:"bold"}}>Enter a train configuration</Typography>
      <InputCard onSort={handleSort}/>
      <Typography variant="h5" align="center" sx={{paddingY:"25px", fontWeight:"bold"}}>Sorted train</Typography>
      <OutputCard carList={sortedTrain}/>
    </Box>
  );
}

export default App;
