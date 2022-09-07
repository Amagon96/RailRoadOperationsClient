import * as React from "react";
import TrainInput from "./TrainInput";
import TrainList from "./TrainList";
import { Card } from "@mui/material";
import TrainLabel from "./TrainLabel";

function TrainInputCard() {
  return (
    <Card>
      <TrainLabel />
      <TrainInput />
      <TrainList />
    </Card>
  );
}

export default TrainInputCard;
