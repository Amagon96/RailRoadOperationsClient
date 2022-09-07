import * as React from "react";
import { Card, CardContent } from "@mui/material";
import TrainLabel from "./TrainLabel";
import TrainList from "./TrainList";

function OutputTrainCard() {
  return (
    <Card>
      <TrainLabel/>
      <TrainList/>
    </Card>
  );
}

export default OutputTrainCard;