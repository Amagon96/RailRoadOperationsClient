import React from "react";
import TrainCar from "./TrainCar";

const TrainList = () => {
  const trainList = [
    {
      name: "Car 1",
      destination: "Houston",
      receiver: "FedEx",
      classificationTrack: null,
    },
    {
      name: "Car 2",
      destination: "Chicago",
      receiver: "UPS",
      classificationTrack: null,
    },
  ];
  return (
    <ul>
      {trainList.map((car) => {
        return <TrainCar 
        name={car.name} 
        destination={car.destination}
        receiver={car.receiver}
        classificationTrack={car.classificationTrack} 
        />;
      })}
    </ul>
  );
};

export default TrainList;
