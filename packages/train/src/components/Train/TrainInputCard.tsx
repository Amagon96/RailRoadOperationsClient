import * as React from "react";
import TrainInput from "./TrainInput";
import TrainList from "./TrainList";
import { Table, TableBody, TableContainer, TableHead, Paper } from "@mui/material";
import TrainLabel from "./TrainLabel";

function TrainInputCard() {
  return (
    <TableContainer component={Paper} sx={{display: "flex"}}>
      <Table sx={{padding: "25px"}}>
        <TableHead>
          <TrainLabel />
        </TableHead>
        <TableBody>
          <TrainInput />
          <TrainList />
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TrainInputCard;
