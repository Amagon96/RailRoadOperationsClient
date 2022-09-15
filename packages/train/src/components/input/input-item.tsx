import Box from "@mui/material/Box/Box";
import IconButton from "@mui/material/IconButton/IconButton";
import Stack from "@mui/material/Stack/Stack";
import Typography from "@mui/material/Typography/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { TrainCarValuesInterface } from "./car-item";

export interface InputItemProps {
  values: TrainCarValuesInterface;
  enableEdition: () => void;
  onDelete: () => void;
  
}

export const InputItem = ({
  values,
  enableEdition,
  onDelete,
}: InputItemProps) => {
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
          <IconButton color="primary" onClick={enableEdition} aria-label={"Edit"}>
            <EditIcon />
          </IconButton>
          <IconButton color="error" onClick={onDelete} aria-label={"Delete"}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
};
