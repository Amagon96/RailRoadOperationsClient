import { Button, TableCell } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { ITrainCar } from "../../types/TrainCar";

interface CarItemProps {
  id: string;
  name: string;
  destination: string;
  receiver: string;
  classificationTrack?: number;
  onRemove: (id: string) => void;
  isOutput: boolean;
}

const CarItem = ({
  id,
  name,
  destination,
  receiver,
  classificationTrack,
  onRemove,
  isOutput,
}: CarItemProps) => {
  const handleRemove = () => {
    onRemove(id);
  };

  return (
    <>
      <TableCell>{name}</TableCell>
      <TableCell>{destination}</TableCell>
      <TableCell>{receiver}</TableCell>
      <TableCell>
        {isOutput ? (
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

export default CarItem;