import React from "react";
import Stack from "@mui/system/Stack/Stack";
import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography/Typography";
import { useTranslation } from "react-i18next";

export function OutputLabel({ children }) {
  const { t, i18n } = useTranslation();

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
            {t("output-label-name")}
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle2" color="#939393">
          {t("output-label-destination")}
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle2" color="#939393">
          {t("output-label-receiver")}
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle2" color="#939393">
          {t("output-label-classification-track")}
          </Typography>
        </Box>
      </Stack>
      {children}
    </Stack>
  );
}
