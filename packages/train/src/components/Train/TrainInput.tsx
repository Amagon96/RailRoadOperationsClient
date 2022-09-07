import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import TrainLabel from "./TrainLabel";

const TrainInput = () => {
  const [destination, setDestination] = useState<string>("");

  return (
    <Box>
      <Grid justifyContent="space-between" container paddingX={5} paddingY={1}>
        <Grid>
          <TextField label="Name" />
        </Grid>
        <Grid>
          <FormControl fullWidth>
            <InputLabel id="dest-id">Destination</InputLabel>
            <Select labelId="dest-id" label="Destination" value={destination} input={<OutlinedInput/>}>
              {/* Meter un map */}
              <MenuItem value="Houston">Houston</MenuItem>
              <MenuItem value="Chicago">Chicago</MenuItem>
              <MenuItem value="LA">LA</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid>
          <Select label="Receiver" />
        </Grid>
        <Grid>
          <Button>Add</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TrainInput;
