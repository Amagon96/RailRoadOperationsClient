import { Button, TableCell } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { ITrainCar } from "../../types/TrainCar";

interface TrainCarProps {
  name: string;
  destination: string;
  receiver: string;
  classificationTrack?: number;
  onRemove: (id: string) => void;
}

const TrainCar = ({
  name,
  destination,
  receiver,
  classificationTrack,
  onRemove,
}: TrainCarProps) => {
  const handleRemove = () => {
    onRemove(name);
  };

  return (
    <>
      <TableCell>{name}</TableCell>
      <TableCell>{destination}</TableCell>
      <TableCell>{receiver}</TableCell>
      <TableCell>
        {false ? (
          <p>{classificationTrack}</p>
        ) : (
          <Button variant="outlined" color="error" onClick={handleRemove}>
            Remove
          </Button>
        )}
      </TableCell>
    </>
  );
};

export default TrainCar;
