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

interface Classification {
  name: string;
  classification: number;
}

export interface ClassificationItemInterface {
  id: string;
  name: string;
  destination: string;
  receiver: string;
  removeItem: (id: string) => void;
}

export interface ClassificationValuesInterface {
  name: string;
  destination: string;
  receiver: string;
}

export function ClassificationItem({
  id,
  name,
  destination,
  receiver,
  removeItem,
}: ClassificationItemInterface) {
  const [editing, setEditing] = useState(false);
  const [destinationOptions, setDestinationOptions] = useState([]);
  const [receiverOptions, setReceiverOptions] = useState([]);
  const [values, setValues] = useState<ClassificationValuesInterface>({
    name,
    destination,
    receiver,
  });

  useEffect(() => {
    (async () => {
      const result = await DestinationService();
      const data = result.data;
      setDestinationOptions(data);
    })();
    (async () => {
      const result = await ReceiverService();
      const data = result.data;
      setReceiverOptions(data);
    })();

    return () => {};
  }, []);

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
        name:event.currentTarget?.value,
    });
  };

  const onDestinationChange = (event: SelectChangeEvent) => {
    setValues((prevState)=>{
        return {...prevState, destination:event.target.value}
    });
  };

  const onReceiverChange = (event: SelectChangeEvent) => {
    setValues(
        (prevState)=>{
            return {...prevState, receiver:event.target.value}
        });
  };

  if (editing)
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
              {destinationOptions.map((option: Classification) => (
                <MenuItem key={option.classification} value={option.name}>
                  {option.name}
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
                {receiverOptions.map((option: Classification) => (
                  <MenuItem key={option.classification} value={option.name}>
                    {option.name}
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

  return (
    <Stack
      direction="row"
      sx={{
        gap: "10px",
        bgcolor: "#FAFAFA",
        borderRadius: "8px",
        padding: "16px 25px",
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography lineHeight="40px">{values.name}</Typography>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography lineHeight="40px">{values.destination}</Typography>
      </Box>
      <Stack
        direction="row"
        sx={{
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <Typography lineHeight="40px">{values.receiver}</Typography>
        <Stack direction="row">
          <IconButton color="primary" onClick={enableEdition}>
            <EditIcon />
          </IconButton>
          <IconButton color="error" onClick={onDelete}>
            <RemoveCircleOutlineIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
}
