import React from "react";
import Stack from "@mui/system/Stack/Stack";
import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography/Typography";

export function UpdateClassifications({ children }) {
  return (
    <Stack
      sx={{
        padding: "15px 25px",
        gap: "25px",
      }}
    >
      <Stack direction="row">
        <Box sx={{ width: "50%", paddingInlineStart: "25px" }}>
          <Typography variant="subtitle2" color="#939393">
            Name
          </Typography>
        </Box>
        <Box sx={{ width: "50%" }}>
          <Typography variant="subtitle2" color="#939393">
            Classification
          </Typography>
        </Box>
      </Stack>
      {children}
    </Stack>
  );
}
