import React, {
  FormEvent,
  useState
} from "react";
import { SelectChangeEvent } from "@mui/material/Select/Select";
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
