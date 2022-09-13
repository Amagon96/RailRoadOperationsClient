import Box from "@mui/material/Box/Box";
import Paper from "@mui/material/Paper/Paper";
import Stack from "@mui/material/Stack/Stack";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Typography from "@mui/material/Typography/Typography";
import Divider from "@mui/material/Divider/Divider";
import {
  ClassificationItem,
  CreateClassification,
  UpdateClassifications,
} from "../components";
import { useState } from "react";

const mockClassifications = [
  ...Array(5).fill({ item: "Houston", classification: 1 }),
];

mockClassifications.push({ item: "LA", classification: 2 });

export function Classification({ type = "Destinations" }) {
  const [classificationList, setClassificationList] =
    useState(mockClassifications);

  const removeClassification = (name: string) => {
    setClassificationList(
      classificationList.filter(({ item }) => item !== name)
    );
  };

  return (
    <Box
      sx={{
        bgcolor: "#F8F9FF",
        width: "100vw",
        height: "Calc(100vh - 90px)",
        paddingBlock: "30px",
        paddingInline: "50px",
      }}
    >
      <Stack
        sx={{
          marginInline: "auto",
          maxWidth: "1300px",
          gap: "30px",
        }}
      >
        <Paper>
          <Stack
            direction="row"
            sx={{
              padding: "15px 25px",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                bgcolor: "#017EFA",
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
              }}
            >
              <LocalShippingIcon sx={{ color: "#FFF" }} />
            </Box>
            <Typography variant="h6">{type}</Typography>
          </Stack>
          <Divider />
          <UpdateClassifications>
            {classificationList.map(({ item, classification }) => (
              <ClassificationItem
                item={item}
                classification={classification}
                removeItem={removeClassification}
              />
            ))}
          </UpdateClassifications>
        </Paper>
        <CreateClassification />
      </Stack>
    </Box>
  );
}
