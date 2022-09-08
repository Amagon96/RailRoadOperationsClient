import { Button, TableCell } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

interface TrainCarProps {
  name: string;
  destination: string;
  receiver: string;
  classificationTrack: number | null;
}

const TrainCar = ({
  name,
  destination,
  receiver,
  classificationTrack,
}: TrainCarProps) => {
  return (
    <>
      <TableCell>
        {name}
      </TableCell>
      <TableCell>
        {destination}
      </TableCell>
      <TableCell>
        {receiver}
      </TableCell>
      <TableCell>
        {false ? <p>{classificationTrack}</p> : <Button>Remove</Button>}
      </TableCell>
    </>
  );
};

export default TrainCar;
