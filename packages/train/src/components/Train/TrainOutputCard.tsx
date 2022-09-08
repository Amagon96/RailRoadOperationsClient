import * as React from "react";
import { Card, CardContent, Paper, Table, TableBody, TableContainer, TableHead } from "@mui/material";
import TrainLabel from "./TrainLabel";
import TrainList from "./TrainList";

function OutputTrainCard() {
  return (
    <TableContainer component={Paper} sx={{ margin: "25px" }}>
      <Table sx={{}}>
        <TableHead>
          <TrainLabel />
        </TableHead>
        <TableBody>
          {/* <TrainList /> */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default OutputTrainCard;
