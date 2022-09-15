import Box from "@mui/material/Box/Box";
import IconButton from "@mui/material/IconButton/IconButton";
import Stack from "@mui/material/Stack/Stack";
import Typography from "@mui/material/Typography/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { TrainCarValuesInterface } from "../input/car-item";
import { ITrainCar } from "../../types/TrainCar";

export interface OutputItemProps {
  values: ITrainCar;
}

export const OutputItem = ({ values }: OutputItemProps) => {
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
      <Box sx={{ flex: 1 }}>
        <Typography lineHeight="40px">{values.receiver}</Typography>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography align="center" lineHeight="40px">{values.classificationTrack}</Typography>
      </Box>
    </Stack>
  );
};
