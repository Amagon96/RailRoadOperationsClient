import Box from "@mui/material/Box/Box";
import FormControl from "@mui/material/FormControl/FormControl";
import IconButton from "@mui/material/IconButton/IconButton";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput/OutlinedInput";
import Select, { SelectChangeEvent } from "@mui/material/Select/Select";
import Stack from "@mui/material/Stack/Stack";
import TextField from "@mui/material/TextField/TextField";
import AddIcon from "@mui/icons-material/Add";
import React, { useEffect, useState } from "react";
import { ITrainCar } from "../../types/TrainCar";

export interface InputRowProps {
  onAdd: (id: string, trainCar: ITrainCar) => void;
  destinationOptions: string[];
  receiverOptions: string[];
}

export const InputRow = ({
  onAdd,
  destinationOptions,
  receiverOptions,
}: InputRowProps) => {
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
    !(trainCar.name.trim() == "") && setIsNameValid(true);
    !(trainCar.destination.trim() == "") && setIsDestinationValid(true);
    !(trainCar.receiver.trim() == "") && setIsReceiverValid(true);
  }, [trainCar]);

  const handleAdd = () => {
    const name = trainCar.name.trim() == "";
    const destination = trainCar.destination.trim() == "";
    const receiver = trainCar.receiver.trim() == "";

    name && setIsNameValid(false);
    destination && setIsDestinationValid(false);
    receiver && setIsReceiverValid(false);
    !(name || destination || receiver) && onAdd(`${Math.random()}`, trainCar);
  };

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

  return (
    <Stack
      direction="row"
      sx={{
        gap: "10px",
        borderRadius: "8px",
        paddingBlock: "16px",
        paddingInline: "0 25px",
      }}
    >
      <Box sx={{ flex: 1 }}>
        <TextField
          value={trainCar.name}
          fullWidth
          onChange={handleChangeName}
          error={!isNameValid}
        />
      </Box>
      <Box sx={{ flex: 1 }}>
        <FormControl fullWidth error={!isDestinationValid}>
          <Select
            id="destination"
            label="Destination"
            value={trainCar.destination}
            input={<OutlinedInput />}
            onChange={handleChangeDestination}
          >
            {destinationOptions.map((option) => (
              <MenuItem key={Math.random()} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Stack
        direction="row"
        sx={{
          flex: 1,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <FormControl fullWidth error={!isReceiverValid}>
            <Select
              id="receiver"
              label="Receiver"
              value={trainCar.receiver}
              input={<OutlinedInput />}
              onChange={handleChangeReceiver}
            >
              {receiverOptions.map((option) => (
                <MenuItem key={Math.random()} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Stack>
      <Stack direction="row">
        <IconButton color="primary" onClick={handleAdd}>
          <AddIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};
