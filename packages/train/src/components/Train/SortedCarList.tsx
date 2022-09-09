import { TableRow } from "@mui/material";
import react from "react";
import { ITrainCar } from "../../types/TrainCar";
import CarItem from "./CarItem";

interface SortedCarListProps {
    trainList: ITrainCar[]
}

const SortedCarList = ({trainList}: SortedCarListProps) => {
 
  return (
    <>
      {trainList.map((car) => (
        <TableRow key={Math.random()}>
          <CarItem
            id={car.name}
            name={car.name}
            destination={car.destination}
            receiver={car.receiver}
            classificationTrack={car.classificationTrack}
            onRemove={(id:string)=>{}}
            isOutput={true}
          />
        </TableRow>
      ))}
    </>
  );
};

export default SortedCarList;