import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import react, { useState } from "react";
import { TrainSort } from "../../api/TrainSortService";
import { ITrainCar } from "../../types/TrainCar";
import CarList from "./CarList";
import InputRow from "./InputRow";
import TableLabel from "./TableLabel";

interface InputCardProps{
  onSort: (sortedTrain:ITrainCar[]) => void
}

function InputCard({onSort}:InputCardProps) {
  const [trainList, setTrainList] = useState<Map<string, ITrainCar>>(
    new Map([])
  );

  const handleSort = async () => {
    const result = await TrainSort(trainList);
    const data = result.data;
    onSort(data)
  };

  const handleAdd = (id: string, trainCar: ITrainCar) => {
    setTrainList((prevState) => {
      const nextState = new Map(prevState);
      nextState.set(id, trainCar);
      return nextState;
    });
  };

  const handleRemove = (id: string) => {
    setTrainList((prevState) => {
      const nextState = new Map(prevState);
      nextState.delete(id);
      return nextState;
    });
  };

  return (
    <TableContainer component={Paper} sx={{ margin: "25px" }}>
      <Table>
        <TableHead>
          <TableLabel isOutput={false} onSort={handleSort} />
        </TableHead>
        <TableBody>
          <InputRow onAdd={handleAdd} />
          <CarList trainList={trainList} onRemove={handleRemove} />
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default InputCard;
