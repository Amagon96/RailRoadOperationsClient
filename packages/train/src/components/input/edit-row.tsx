import Box from "@mui/material/Box/Box";
import FormControl from "@mui/material/FormControl/FormControl";
import IconButton from "@mui/material/IconButton/IconButton";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput/OutlinedInput";
import Select, {SelectChangeEvent} from "@mui/material/Select/Select";
import Stack from "@mui/material/Stack/Stack";
import TextField from "@mui/material/TextField/TextField";
import CheckIcon from "@mui/icons-material/Check";
import CancelIcon from "@mui/icons-material/Cancel";
import React, {FormEvent} from "react";
import { TrainCarValuesInterface } from "./car-item";

export interface EditRowProps {
  values: TrainCarValuesInterface;
  destinationOptions: string[];
  receiverOptions: string[];
  onNameChange: (event: FormEvent<{ value: string }>) => void;
  onDestinationChange: (event: SelectChangeEvent) => void;
  onReceiverChange: (event: SelectChangeEvent) => void;
  disableEdition: () => void;
}

export const EditRow = ({
  values,
  destinationOptions,
  receiverOptions,
  onNameChange,
  onDestinationChange,
  onReceiverChange,
  disableEdition
}: EditRowProps) => {
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
        <TextField value={values.name} fullWidth onChange={onNameChange} />
      </Box>
      <Box sx={{ flex: 1 }}>
        <FormControl fullWidth>
          <Select
            id="destination"
            label="Destination"
            value={values.destination}
            input={<OutlinedInput />}
            onChange={onDestinationChange}
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
          <FormControl fullWidth>
            <Select
              id="receiver"
              label="Receiver"
              value={values.receiver}
              input={<OutlinedInput />}
              onChange={onReceiverChange}
            >
              {receiverOptions.map((option) => (
                <MenuItem key={Math.random()} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Stack direction="row">
          <IconButton color="primary" onClick={disableEdition}>
            <CheckIcon />
          </IconButton>
          <IconButton color="error" onClick={disableEdition}>
            <CancelIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
};
