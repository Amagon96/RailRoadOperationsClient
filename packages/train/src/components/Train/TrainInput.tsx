import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TableBody,
  TableRow,
  TableContainer,
  Table,
  TextField,
  TableCell,
} from "@mui/material";
import React, { useState } from "react";
import TrainLabel from "./TrainLabel";

// const destinations = [
//   {
//     value: '1',
//     label: 'Houston',
//   },
//   {
//     value: '2',
//     label: 'Chicago',
//   },
//   {
//     value: '3',
//     label: 'LA',
//   },
// ];

const TrainInput = () => {
  const [destination, setDestination] = useState("");
  const [receiver, setReceiver] = useState("");

  return (
    <TableRow>
      <TableCell>
        <TextField id="name-basic" label="Name" variant="outlined" />
      </TableCell>
      <TableCell>
        <FormControl fullWidth>
          <InputLabel id="dest-id">Destination</InputLabel>
          <Select
            labelId="dest-id"
            label="Destination"
            value={destination}
            input={<OutlinedInput />}
          >
            {/* Meter un map */}
            <MenuItem value="Houston">Houston</MenuItem>
            <MenuItem value="Chicago">Chicago</MenuItem>
            <MenuItem value="LA">LA</MenuItem>
          </Select>
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
      <TableCell><Button>Add</Button></TableCell>
    </TableRow>
  );
};

export default TrainInput;
