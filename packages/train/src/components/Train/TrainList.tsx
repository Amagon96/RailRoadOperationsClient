import { TableRow } from "@mui/material";
import React from "react";
import TrainCar from "./TrainCar";

const TrainList = () => {
  const trainList = [
    {
      id: 1,
      name: "Car 1",
      destination: "Houston",
      receiver: "FedEx",
      classificationTrack: null,
    },
    {
      id: 2,
      name: "Car 2",
      destination: "Chicago",
      receiver: "UPS",
      classificationTrack: null,
    },
  ];
  return (
    <>
      {trainList.map((car) => (
        <TableRow>
          <TrainCar
            key={car.id}
            name={car.name}
            destination={car.destination}
            receiver={car.receiver}
            classificationTrack={car.classificationTrack}
          />
        </TableRow>
      ))}
    </>
  );
};

export default TrainList;
