import React, { useState } from "react";
import InputCard from "./components/input/input-card";
import OutputCard from "./components/output/output-card";
import { ITrainCar } from "./types/TrainCar";
import { Box, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const [sortedTrain, setSortedTrain] = useState<ITrainCar[]>([]);

  const handleSort = (sortedTrain: ITrainCar[]) => {
    setSortedTrain(sortedTrain);
  };

  return (
    <>
    <CssBaseline />
      <Box>
        <InputCard onSort={handleSort} />
        <OutputCard carList={sortedTrain} />
      </Box>
    </>
  );
}

export default App;
