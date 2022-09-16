import React from "react";
import Stack from "@mui/system/Stack/Stack";
import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography/Typography";
import { useTranslation } from "react-i18next";


export function UpdateClassifications({ children }) {
  const { t, i18n } = useTranslation();
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
            {t("name")}
          </Typography>
        </Box>
        <Box sx={{ width: "50%" }}>
          <Typography variant="subtitle2" color="#939393">
            {t("classification")}
          </Typography>
        </Box>
      </Stack>
      {children}
    </Stack>
  );
}
