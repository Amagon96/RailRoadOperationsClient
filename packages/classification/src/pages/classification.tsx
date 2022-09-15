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
import {
  createDestination,
  deleteDestination,
  getDestinations,
  updateDestination,
} from "../api/destinations-service";
import { useTranslation } from "react-i18next";

type classificationAlias = "RECEIVER" | "DESTINATION";

export interface ClassificationInterfaceProps {
  type: classificationAlias;
}

export function Classification({ type }: ClassificationInterfaceProps) {

  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const [classificationList, setClassificationList] = useState<
    ClassificationModel[]
  >([]);
  

  const removeClassification = async (id: string) => {
    const deleteFunction = type === "RECEIVER"? deleteReceiver : deleteDestination
    await deleteFunction(id)
    await getClassifications();
  };

  const updateClassification = () => {
    return type === "RECEIVER"? updateReceiver : updateDestination
  };

  const addClassification = async (classification: CreateClassificationModel) => {
    const createFunction = type === "RECEIVER"? createReceiver : createDestination
    await createFunction(classification)
    await getClassifications()
  };

  const getClassifications = async () => {
    const getFunction = type === "RECEIVER"? getReceivers : getDestinations
    const {data} = await getFunction()
    setClassificationList(data);
  };

  const findDuplicatedName = (name: string): boolean => {
    return classificationList.some(
      (currentClassification) => currentClassification.name === name
    );
  };

  const findDuplicatedClassification = (classification: number): boolean => {
    return classificationList.some(
      (currentClassification) =>
        currentClassification.classification === classification
    );
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
        <CreateClassification
          findDuplicatedName={findDuplicatedName}
          findDuplicatedClassification={findDuplicatedClassification}
          addClassification={addClassification}
          classificationType={type.toLowerCase()}
        >
          <Typography variant="h6">
            {t('create')} {t(type).toLowerCase()}
          </Typography>
        </CreateClassification>
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
            <Typography variant="h6" textTransform="capitalize">
              {type.toLowerCase()}s
            </Typography>
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
      </Stack>
    </Box>
  );
}
