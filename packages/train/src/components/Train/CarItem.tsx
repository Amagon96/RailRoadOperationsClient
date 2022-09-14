import Button from "@mui/material/Button";
import TableCell from "@mui/material/TableCell";
import React from "react";
import { ITrainCar } from "../../types/TrainCar";
import DeleteIcon from '@mui/icons-material/Delete';

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
      <TableCell align="center">{name}</TableCell>
      <TableCell align="center">{destination}</TableCell>
      <TableCell align="center">{receiver}</TableCell>
      <TableCell align="center">
        {isOutput ? (
          <p>{classificationTrack}</p>
        ) : (
          <Button variant="contained" color="error" onClick={handleRemove}>
            <DeleteIcon/>
          </Button>
        )}
      </TableCell>
    </>
  );
};

export default CarItem;
