import { TableRow } from "@mui/material";
import React from "react";
import { ITrainCar } from "../../types/TrainCar";
import TrainCar from "./TrainCar";

interface TrainListProps {
  trainList: Map<string,ITrainCar>
  onRemove: (id:string) => void
}

const TrainList = ({trainList, onRemove}:TrainListProps) => {
 
  const handleRemove = (id:string) => {
    onRemove(id)
  }
  return (
    <>
      {Array.from(trainList).map(([id,car]) => (
        <TableRow>
          <TrainCar
            key={id}
            name={car.name}
            destination={car.destination}
            receiver={car.receiver}
            classificationTrack={car.classificationTrack}
            onRemove={handleRemove}
          />
        </TableRow>
      ))}
    </>
  );
};

export default TrainList;
