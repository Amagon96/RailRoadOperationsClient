import { Button, TableCell, TableRow } from "@mui/material";
import { TrainSort } from "../../api/TrainSortService";
import { Box } from "@mui/system";
import React from "react";

const TrainLabel = () => {

  const handleSort = () => {
    
  }

  return (
    <TableRow>
      <TableCell>Name</TableCell>
      <TableCell>Destination</TableCell>
      <TableCell>Receiver</TableCell>
      <TableCell>
        {false ? (
          "Classification Track"
        ) : (
          <Button variant="contained" color="secondary" onClick={handleSort}>
            Sort
          </Button>
        )}
      </TableCell>
    </TableRow>
  );
};

export default TrainLabel;
