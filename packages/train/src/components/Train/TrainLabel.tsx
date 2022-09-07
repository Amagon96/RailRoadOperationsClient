import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const TrainLabel = () => {
  return (
    <Box>
      <Grid justifyContent="space-between" container paddingX={5} paddingY={1}>
        <Grid>
          <p>Name</p>
        </Grid>
        <Grid>
          <p>Destination</p>
        </Grid>
        <Grid>
          <p>Receiver</p>
        </Grid>
        <Grid>
            {false? <p>Classification Track</p>:<Button>Sort</Button>}
        </Grid>
      </Grid>
    </Box>
  );
};

export default TrainLabel;
