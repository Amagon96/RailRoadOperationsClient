import react from "react";
import { Button, TableCell, TableRow } from "@mui/material";

interface TableLabelProps {
  onSort: () => Promise<void>;
}

const TableLabel = ({ onSort }: TableLabelProps) => {
  const handleSort = () => {
    onSort();
  };

  return (
    <TableRow>
      <TableCell>Name</TableCell>
      <TableCell>Destination</TableCell>
      <TableCell>Receiver</TableCell>
      <TableCell>
        {false ? (
          "Classification Track"
        ) : (
          <Button variant="contained" color="secondary" onClick={handleSort}>
            Sort
          </Button>
        )}
      </TableCell>
    </TableRow>
  );
};

export default TableLabel;
