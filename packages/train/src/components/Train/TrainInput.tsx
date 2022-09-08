import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  TextField,
  TableBody,
  TableRow,
  TableContainer,
  Table,
  Select,
  TableCell,
} from "@mui/material";
import React, { useState } from "react";
import TrainLabel from "./TrainLabel";

const destinations = [
  {
    value: "1",
    label: "Houston",
  },
  {
    value: "2",
    label: "Chicago",
  },
  {
    value: "3",
    label: "LA",
  },
];

const TrainInput = () => {
  const [destination, setDestination] = useState([]);
  const [receiver, setReceiver] = useState("");

  const handleChangeDestination = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDestination([]);
  };

  return (
    <TableRow>
      <TableCell>
        <TextField id="name-basic" label="Name" variant="outlined" />
      </TableCell>
      <TableCell>
        <FormControl fullWidth>
          {/* <InputLabel id="dest-id">Destination</InputLabel> */}
          <TextField
            id="standard-select-currency"
            select
            label="Destination"
            value={destination}
            onChange={handleChangeDestination}
            helperText="Destination"
            variant="standard"
          >
            {destinations.map((option) => (
            <MenuItem key={option.label} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
            {/* Meter un map
            <MenuItem value="Houston">Houston</MenuItem>
            <MenuItem value="Chicago">Chicago</MenuItem>
            <MenuItem value="LA">LA</MenuItem> */}
          </TextField>
        </FormControl>
      </TableCell>
      <TableCell>
        <FormControl fullWidth>
          <InputLabel id="reciever-id">Receiver</InputLabel>
          <Select
            labelId="receiver-id"
            label="Receiver"
            value={receiver}
            input={<OutlinedInput />}
          >
            {/* Meter un map */}
            <MenuItem value="FedEx">FedEx</MenuItem>
            <MenuItem value="UPS">UPS</MenuItem>
            <MenuItem value="Old Dominion">Old Dominion</MenuItem>
          </Select>
        </FormControl>
      </TableCell>
      <TableCell>
        <Button>Add</Button>
      </TableCell>
    </TableRow>
  );
};

export default TrainInput;
