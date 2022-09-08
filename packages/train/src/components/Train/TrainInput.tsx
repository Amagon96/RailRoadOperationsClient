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
import { ITrainCar } from "../../types/TrainCar";

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

interface TrainInputProps {
  onAdd: (trainCar: ITrainCar) => void;
}

const TrainInput = ({ onAdd }: TrainInputProps) => {
  const [destination, setDestination] = useState([]);
  const [receiver, setReceiver] = useState("");
  const [trainCar, setTrainCar] = useState<ITrainCar>({
    name: "Car 1",
    destination: "Houston",
    receiver: "FedEx",
    classificationTrack: undefined,
  });

  // const handleChangeDestination = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   setDestination([]);
  // };

  const handleAdd = () => {
    onAdd(trainCar);
  };

  return (
    <TableRow>
      <TableCell>
        <TextField id="name-basic" label="Name" variant="outlined" />
      </TableCell>
      <TableCell>
        <FormControl fullWidth>
          {/* <InputLabel id="dest-id">Destination</InputLabel> */}
          <Select
            id="standard-select-currency"
            label="Destination"
            value={destination}
            variant="standard"
            input={<OutlinedInput />}
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
      <TableCell>
        <Button variant="outlined" onClick={handleAdd}>
          Add
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default TrainInput;
