import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  TextField,
  TableRow,
  Select,
  TableCell,
  SelectChangeEvent,
} from "@mui/material";
import react, { useState } from "react";
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

const receivers = [
  {
    value: "1",
    label: "FedEx",
  },
  {
    value: "2",
    label: "UPS",
  },
  {
    value: "3",
    label: "Old Dominion",
  },
];

interface InputRowProps {
  onAdd: (id: string, trainCar: ITrainCar) => void;
}

const InputRow = ({ onAdd }: InputRowProps) => {
  const [name, setName] = useState("");
  const [destination, setDestination] = useState("");
  const [receiver, setReceiver] = useState("");
  const [trainCar, setTrainCar] = useState<ITrainCar>({
    name: "",
    destination: "",
    receiver: "",
    classificationTrack: undefined,
  });

  const handleChangeName = (event:any) => {
    setTrainCar((prevState)=>({...prevState,name:event.target.value}))
  }
  const handleChangeDestination = (event: SelectChangeEvent) => {
    setTrainCar((prevState)=>({...prevState,destination:event.target.value}))
  };

  const handleChangeReceiver = (event: SelectChangeEvent) => {
    setTrainCar((prevState)=>({...prevState,receiver:event.target.value}))
  };

  const handleAdd = () => {
    onAdd(`${Math.random()}`, trainCar);
  };

  return (
    <TableRow>
      <TableCell>
        <TextField id="name-basic" label="Name" variant="outlined" onChange={handleChangeName} />
      </TableCell>
      <TableCell>
        <FormControl fullWidth>
          <Select
            id="destination"
            label="Destination"
            value={destination}
            input={<OutlinedInput />}
            onChange={handleChangeDestination}
          >
            {destinations.map((option) => (
              <MenuItem key={option.value} value={option.label}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </TableCell>
      <TableCell>
        <FormControl fullWidth>
          <Select
            id="receiver"
            label="Receiver"
            value={receiver}
            input={<OutlinedInput />}
            onChange={handleChangeReceiver}
          >
            {receivers.map((option) => (
              <MenuItem key={option.value} value={option.label}>
                {option.label}
              </MenuItem>
            ))}
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

export default InputRow;
