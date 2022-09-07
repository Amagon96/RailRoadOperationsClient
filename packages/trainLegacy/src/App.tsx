import React from 'react';
import './App.css';
import InputTrainCard from "./InputTrainCard";
import OutputTrainCard from './OutputTrainCard';
import { Grid } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <InputTrainCard />
        <OutputTrainCard /> 
      </Grid>
    </div>
  );
}

export default App;
