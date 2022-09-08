import react, { useState } from "react";
import TrainInput from "./TrainInput";
import TrainList from "./TrainList";
import { Table, TableBody, TableContainer, TableHead, Paper } from "@mui/material";
import TrainLabel from "./TrainLabel";
import { TrainSort } from "../../api/TrainSortService";
import { string } from "prop-types";
import { ITrainCar } from "../../types/TrainCar";

function TrainInputCard() {

  const [trainList, setTrainList] = useState<Map<string,ITrainCar>>(new Map([]))

  const handleSort = async () => {
    const result = await TrainSort(trainList)
    console.log(result.data)
  }

  const handleAdd = (trainCar: ITrainCar) => {
    setTrainList((prevState)=>{
      return prevState.set(trainCar.name,trainCar)
    })
  }
  
  const handleRemove = (id:string) => {
    setTrainList((prevState)=>{
      prevState.delete(id)
      return prevState
    })
  }

  return (
    <TableContainer component={Paper} sx={{margin:"25px"}}>
      <Table>
        <TableHead>
          <TrainLabel />
        </TableHead>
        <TableBody>
          <TrainInput onAdd={handleAdd}/>
          <TrainList trainList={trainList} onRemove={handleRemove}/>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TrainInputCard;
