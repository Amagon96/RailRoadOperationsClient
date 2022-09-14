import react from "react";
import { Card, CardContent, Paper, Table, TableBody, TableContainer, TableHead } from "@mui/material";
import { ITrainCar } from "../../types/TrainCar";
import CarList from "./CarList";
import TableLabel from "./TableLabel";
import SortedCarList from "./SortedCarList";

interface OutputCardProps{
  carList: ITrainCar[]
}

function OutputCard({carList}:OutputCardProps) {
  return (
    <TableContainer component={Paper} sx={{ margin: "25px", width:"auto" }}>
      <Table>
        <TableHead>
        <TableLabel isOutput={true} onSort={()=>new Promise(()=> undefined )}/>
        </TableHead>
        <TableBody>
          <SortedCarList trainList={carList}/>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default OutputCard;
