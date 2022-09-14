import { useEffect, useState } from "react";
import Box from "@mui/material/Box/Box";
import Paper from "@mui/material/Paper/Paper";
import Stack from "@mui/material/Stack/Stack";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Typography from "@mui/material/Typography/Typography";
import Divider from "@mui/material/Divider/Divider";
import {
  createReceiver,
  deleteReceiver,
  getReceivers,
  updateReceiver,
} from "../api/receviers-service";
import { ClassificationModel, CreateClassificationModel } from "../api/types";
import {
  ClassificationItem,
  CreateClassification,
  UpdateClassifications,
} from "../components";
import { createDestination, deleteDestination, getDestinations, updateDestination } from "../api/destinations-service";

type classificationAlias = "RECEIVER" | "DESTINATION";

export interface ClassificationInterfaceProps {
  type: classificationAlias;
}

export function Classification({ type }: ClassificationInterfaceProps) {
  const [classificationList, setClassificationList] = useState<
    ClassificationModel[]
  >([]);

  const removeClassification = async (id: string) => {
    if (type === "RECEIVER") {
      await deleteReceiver(id);
    }
    if (type === "DESTINATION") {
      await deleteDestination(id);
    } 
    setClassificationList(
      classificationList.filter((item) => item.id !== id)
    );
  };

  const updateClassification = () => {
    if (type === "RECEIVER") {
      return updateReceiver;
    }
    if (type === "DESTINATION") {
      return updateDestination;
    }
  };

  const addClassification = (classification: CreateClassificationModel) => {
    if (type === "RECEIVER") {
      createReceiver(classification).then(() => getClassifications()); 
    }
    if (type === "DESTINATION") {
      createDestination(classification).then(() => getClassifications()); 
    }
  };

  const getClassifications = () => {
    if (type === "RECEIVER") {
      getReceivers().then(({ data }) => {
        setClassificationList(data);
      });
    }
    if(type === "DESTINATION") {
      getDestinations().then(({ data }) => {
        setClassificationList(data);
      });
    }
  };

  useEffect(() => {
    getClassifications();
  }, []);

  return (
    <Box
      sx={{
        bgcolor: "#F8F9FF",
        width: "100vw",
        height: "calc(100vh - 64px)",
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
            {classificationList.map((classification) => (
              <ClassificationItem
                key={classification.id}
                classification={classification}
                removeItem={removeClassification}
                updateItem={updateClassification()}
              />
            ))}
          </UpdateClassifications>
        </Paper>
        <CreateClassification addClassification={addClassification}>
          <Typography variant="h6">
            Create a new {type.toLowerCase()}
          </Typography>
        </CreateClassification>
      </Stack>
    </Box>
  );
}
