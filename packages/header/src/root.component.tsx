import * as React from "react";
import { Box, Link, AppBar, Toolbar, Typography, Button } from "@mui/material/";

export default function Links() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        typography: "body1",
        "& > :not(style) + :not(style)": {
          ml: 2,
        },
      }}
    >
      <AppBar color="primary" position="static">
        <Toolbar>
          <Typography variant="h5" sx={{flexGrow:1}}>Railroad Operations</Typography>
          <Button color="inherit" href="/train">Train</Button>
          <Button color="inherit" href="/dashboard">Classification</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
