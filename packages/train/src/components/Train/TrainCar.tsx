import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

interface TrainCarProps {
  name: string;
  destination: string;
  receiver: string;
  classificationTrack: number | null;
}

const TrainCar = ({
  name,
  destination,
  receiver,
  classificationTrack,
}: TrainCarProps) => {
    return (
        <Box>
          <Grid justifyContent="space-between" container paddingX={5} paddingY={1}>
            <Grid>
              <p>{name}</p>
            </Grid>
            <Grid>
              <p>{destination}</p>
            </Grid>
            <Grid>
              <p>{receiver}</p>
            </Grid>
            <Grid>
                {false? <p>{classificationTrack}</p>:<Button>Remove</Button>}
            </Grid>
          </Grid>
        </Box>
      );
};

export default TrainCar;
