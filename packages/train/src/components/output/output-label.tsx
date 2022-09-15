import React from "react";
import Stack from "@mui/system/Stack/Stack";
import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography/Typography";

export function OutputLabel({ children }) {
  return (
    <Stack
      sx={{
        padding: "15px 25px",
        gap: "25px",
      }}
    >
      <Stack direction="row">
        <Box sx={{ flex: 1, paddingInlineStart: "25px" }}>
          <Typography variant="subtitle2" color="#939393">
            Name
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle2" color="#939393">
            Destination
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle2" color="#939393">
            Receiver
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle2" color="#939393">
            Classification Track
          </Typography>
        </Box>
      </Stack>
      {children}
    </Stack>
  );
}
