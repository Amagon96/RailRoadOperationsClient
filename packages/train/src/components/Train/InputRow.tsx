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
import react, { useEffect, useState } from "react";
import { ITrainCar } from "../../types/TrainCar";
import { DestinationService } from "../../api/DestinationService";
import { ReceiverService } from "../../api/ReceiverService";

interface Classification {
  name: string
  classification: number 
}

interface InputRowProps {
  onAdd: (id: string, trainCar: ITrainCar) => void;
}

const InputRow = ({ onAdd }: InputRowProps) => {
  const [destination, setDestination] = useState([]);
  const [receiver, setReceiver] = useState([]);
  const [trainCar, setTrainCar] = useState<ITrainCar>({
    name: "",
    destination: "",
    receiver: "",
    classificationTrack: undefined,
  });

  useEffect(() => {
    (async () => {
      const result = await DestinationService();
      const data = result.data;
      setDestination(data);
    })();
    (async () => {
      const result = await ReceiverService();
      const data = result.data;
      setReceiver(data);
    })();

    return () => {}
  }, []);

  const handleChangeName = (event: any) => {
    setTrainCar((prevState) => ({ ...prevState, name: event.target.value }));
  };
  const handleChangeDestination = (event: SelectChangeEvent) => {
    setTrainCar((prevState) => ({
      ...prevState,
      destination: event.target.value,
    }));
  };

  const handleChangeReceiver = (event: SelectChangeEvent) => {
    setTrainCar((prevState) => ({
      ...prevState,
      receiver: event.target.value,
    }));
  };

  const handleAdd = () => {
    onAdd(`${Math.random()}`, trainCar);
  };

  return (
    <TableRow>
      <TableCell>
        <TextField
          id="name-basic"
          label="Name"
          variant="outlined"
          onChange={handleChangeName}
          value={trainCar.name}
        />
      </TableCell>
      <TableCell>
        <FormControl fullWidth>
          <Select
            id="destination"
            label="Destination"
            value={trainCar.destination}
            input={<OutlinedInput />}
            onChange={handleChangeDestination}
          >
            {destination.map((option: Classification) => (
              <MenuItem key={option.classification} value={option.name}>
                {option.name}
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
            value={trainCar.receiver}
            input={<OutlinedInput />}
            onChange={handleChangeReceiver}
          >
            {receiver.map((option: Classification) => (
              <MenuItem key={option.classification} value={option.name}>
                {option.name}
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
