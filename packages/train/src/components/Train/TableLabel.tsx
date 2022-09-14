import react from "react";
import { Button, TableCell, TableRow } from "@mui/material";

interface TableLabelProps {
  isOutput: boolean;
  onSort: () => Promise<void>;
}

const TableLabel = ({ onSort, isOutput }: TableLabelProps) => {
  const handleSort = () => {
    onSort();
  };

  return (
    <TableRow sx={{backgroundColor:"skyblue"}}>
      <TableCell align="center" sx={{fontWeight:"bold", fontSize:20}}>Name</TableCell>
      <TableCell align="center" sx={{fontWeight:"bold", fontSize:20}}>Destination</TableCell>
      <TableCell align="center" sx={{fontWeight:"bold", fontSize:20}}>Receiver</TableCell>
      <TableCell align="center" sx={{fontWeight:"bold", fontSize:20}}>
        {isOutput ? (
          "Classification Track"
        ) : (
          <Button variant="contained" color="primary" onClick={handleSort}>
            Sort
          </Button>
        )}
      </TableCell>
    </TableRow>
  );
};

export default TableLabel;
