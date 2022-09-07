import * as React from "react";
import { Card, CardContent } from "@mui/material";

function OutputTrainCard() {
  return (
    <Card sx={{ minWidth: 750, display: "inline-block", maxHeight: 400 }}>
      <CardContent>
        <label>Sorted train list:</label>
      </CardContent>
    </Card>
  );
}

export default OutputTrainCard;