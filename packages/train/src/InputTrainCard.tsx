import * as React from "react";
import {
  Card,
  Button,
  CardHeader,
  CardContent,
  TextField,
  Grid,
  CardActions,
} from "@mui/material";

function InputTrainCard() {
  return (
    <div>
      <Card sx={{ minWidth: 750, display: "inline-block", minHeight: 400 }}>
        <CardContent>
          <label>Enter your train list</label>
        </CardContent>
        <CardContent>
          <TextField
            sx={{ minWidth: 600 }}
            id="outlined-multiline-static"
            multiline
            rows={7}
            defaultValue="Default Value"
          />
        </CardContent>
        <CardActions>
          <Button variant="contained">Submit</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default InputTrainCard;
