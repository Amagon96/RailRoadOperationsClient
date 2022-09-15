import React, {
  ChangeEventHandler,
  FormEvent,
  useState,
  useEffect,
} from "react";
import Box from "@mui/material/Box/Box";
import Stack from "@mui/material/Stack/Stack";
import Typography from "@mui/material/Typography/Typography";
import IconButton from "@mui/material/IconButton/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import TextField from "@mui/material/TextField/TextField";
import CheckIcon from "@mui/icons-material/Check";
import CancelIcon from "@mui/icons-material/Cancel";
import FormControl from "@mui/material/FormControl/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select/Select";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput/OutlinedInput";
import { DestinationService } from "./../../api/DestinationService";
import { ReceiverService } from "./../../api/ReceiverService";
import { EditRow } from "./edit-row";
import { InputItem } from "./input-item";

export interface CarItemProps {
  id: string;
  name: string;
  destination: string;
  receiver: string;
  destinationOptions: string[];
  receiverOptions: string[];
  removeItem: (id: string) => void;
}

export interface TrainCarValuesInterface {
  name: string;
  destination: string;
  receiver: string;
}

export function CarItem({
  id,
  name,
  destination,
  receiver,
  destinationOptions,
  receiverOptions,
  removeItem,
}: CarItemProps) {
  const [editing, setEditing] = useState(false);
  const [values, setValues] = useState<TrainCarValuesInterface>({
    name,
    destination,
    receiver,
  });

  const enableEdition = () => {
    setEditing(true);
  };

  const disableEdition = () => {
    setEditing(false);
  };

  const onDelete = () => {
    return removeItem(id);
  };

  const onNameChange = (event: FormEvent<{ value: string }>) => {
    setValues({
      ...values,
      name: event.currentTarget?.value,
    });
  };

  const onDestinationChange = (event: SelectChangeEvent) => {
    setValues((prevState) => {
      return { ...prevState, destination: event.target.value };
    });
  };

  const onReceiverChange = (event: SelectChangeEvent) => {
    setValues((prevState) => {
      return { ...prevState, receiver: event.target.value };
    });
  };

  if (editing)
    return (
      <EditRow
        values={values}
        destinationOptions={destinationOptions}
        receiverOptions={receiverOptions}
        onNameChange={onNameChange}
        onDestinationChange={onDestinationChange}
        onReceiverChange={onReceiverChange}
        disableEdition={disableEdition}
      />
    );

  return (
    <InputItem
      values={values}
      enableEdition={enableEdition}
      onDelete={onDelete}
    />
  );
}
