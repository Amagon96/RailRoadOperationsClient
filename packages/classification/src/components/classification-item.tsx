import React, { ChangeEventHandler, FormEvent, useState } from "react";
import { AxiosPromise } from "axios";
import Box from "@mui/material/Box/Box";
import Stack from "@mui/material/Stack/Stack";
import Typography from "@mui/material/Typography/Typography";
import TextField from "@mui/material/TextField/TextField";
import IconButton from "@mui/material/IconButton/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import CancelIcon from "@mui/icons-material/Cancel";
import { ClassificationModel } from "../api/types";

export interface ClassificationItemInterface {
  classification: ClassificationModel;
  removeItem: (id: string) => void;
  updateItem: (
    classification: ClassificationModel
  ) => AxiosPromise<ClassificationModel>;
}

export function ClassificationItem({
  classification,
  removeItem,
  updateItem,
}: ClassificationItemInterface) {
  const [editing, setEditing] = useState(false);
  const [values, setValues] = useState<ClassificationModel>(classification);

  const enableEdition = () => {
    setEditing(true);
  };

  const disableEdition = () => {
    setEditing(false);
  };

  const submitUpdate = () => {
    updateItem(values);
    disableEdition();
  };

  const onDelete = () => {
    removeItem(values.id);
  };

  const onNameChange = (event: FormEvent<{ value: string }>) => {
    const name = event.currentTarget?.value;
    setValues({
      ...values,
      name,
    });
  };

  const onClassificationChange = (event: FormEvent<{ value: string }>) => {
    const classificationValue = event.currentTarget?.value;
    const onlyNumbersExpression: RegExp = /^\d*$/;

    //If the input contains any non-numeric character ignore
    if (!classificationValue.match(onlyNumbersExpression)) return;

    setValues({
      name: classification.name,
      classification: parseInt(classificationValue, 10),
    });
  };

  if (editing)
    return (
      <Stack
        direction="row"
        sx={{
          gap: "10px",
          borderRadius: "8px",
          paddingBlock: "16px",
          paddingInline: "0 25px",
        }}
      >
        <Box sx={{ width: "50%" }}>
          <TextField
            value={values.name || ""}
            fullWidth
            onChange={onNameChange}
          />
        </Box>
        <Stack
          direction="row"
          sx={{
            width: "50%",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <TextField
              value={values.classification || ""}
              fullWidth
              onChange={onClassificationChange}
            />
          </Box>
          <Stack direction="row">
            <IconButton color="primary" onClick={submitUpdate}>
              <CheckIcon />
            </IconButton>
            <IconButton color="error" onClick={disableEdition}>
              <CancelIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    );

  return (
    <Stack
      direction="row"
      sx={{
        gap: "10px",
        bgcolor: "#FAFAFA",
        borderRadius: "8px",
        padding: "16px 25px",
      }}
    >
      <Box sx={{ width: "50%" }}>
        <Typography lineHeight="40px">{values.name  || ''}</Typography>
      </Box>
      <Stack
        direction="row"
        sx={{
          width: "50%",
          justifyContent: "space-between",
        }}
      >
        <Typography lineHeight="40px">{values.classification || ""}</Typography>
        <Stack direction="row">
          <IconButton color="primary" onClick={enableEdition}>
            <EditIcon />
          </IconButton>
          <IconButton color="error" onClick={onDelete}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
}
