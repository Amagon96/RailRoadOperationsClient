import { Button, TableCell, TableRow } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const TrainLabel = () => {
  return (
    <TableRow>
      <TableCell>
        Name
      </TableCell>
      <TableCell>
        Destination
      </TableCell>
      <TableCell>
        Receiver
      </TableCell>
      <TableCell>
        {false ? "Classification Track": <Button>Sort</Button>}
      </TableCell>
    </TableRow>
  );
};

export default TrainLabel;
