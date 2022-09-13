import { TableRow } from "@mui/material";
import React from "react";
import { ITrainCar } from "../../types/TrainCar";
import CarItem from "./CarItem";

interface CarListProps {
  trainList: Map<string, ITrainCar>;
  onRemove: (id: string) => void;
}

const CarList = ({ trainList, onRemove }: CarListProps) => {
  const handleRemove = (id: string) => {
    onRemove(id);
  };

  return (
    <>
      {Array.from(trainList).map(([id, car]) => (
        <TableRow key={id}>
          <CarItem
            id={id}
            name={car.name}
            destination={car.destination}
            receiver={car.receiver}
            classificationTrack={car.classificationTrack}
            onRemove={handleRemove}
            isOutput={false}
          />
        </TableRow>
      ))}
    </>
  );
};

export default CarList;
