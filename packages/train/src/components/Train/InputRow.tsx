
import react, { useEffect, useState } from "react";
import { ITrainCar } from "../../types/TrainCar";
import { DestinationService } from "../../api/DestinationService";
import { ReceiverService } from "../../api/ReceiverService";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';

interface Classification {
  name: string;
  classification: number;
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

  const [isNameValid, setIsNameValid] = useState(true);
  const [isDestinationValid, setIsDestinationValid] = useState(true);
  const [isReceiverValid, setIsReceiverValid] = useState(true);

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

    return () => {};
  }, []);

  useEffect(() => {
    !(trainCar.name.trim() == "") && setIsNameValid(true);
    !(trainCar.destination.trim() == "") && setIsDestinationValid(true);
    !(trainCar.receiver.trim() == "") && setIsReceiverValid(true);
  }, [trainCar]);

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
    const name = trainCar.name.trim() == "";
    const destination = trainCar.destination.trim() == "";
    const receiver = trainCar.receiver.trim() == "";

    name && setIsNameValid(false);
    destination && setIsDestinationValid(false);
    receiver && setIsReceiverValid(false);
    !(name || destination || receiver) && onAdd(`${Math.random()}`, trainCar);
  };

  return (
    <TableRow>
      <TableCell>
        <FormControl fullWidth>
        <TextField
          id="name-basic"
          label="Name"
          variant="outlined"
          onChange={handleChangeName}
          value={trainCar.name}
          error={!isNameValid}
        />
        </FormControl>
      </TableCell>
      <TableCell>
        <FormControl fullWidth error={!isDestinationValid}>
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
        <FormControl fullWidth error={!isReceiverValid}>
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
      <TableCell align="center">
        <Button color="success" variant="contained" onClick={handleAdd}>
          <AddIcon/>
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default InputRow;
