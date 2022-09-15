import React, { ReactChild, FormEvent, useState } from "react";
import Paper from "@mui/material/Paper/Paper";
import { CreateClassificationModel } from "../api/types";
import TextField from "@mui/material/TextField/TextField";
import Button from "@mui/material/Button/Button";
import Stack from "@mui/material/Stack/Stack";
import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography/Typography";

interface CreateClassificationError {
  message?: string;
  hasError: boolean;
}

export interface CreateClassificationInterface {
  addClassification: (classification: CreateClassificationModel) => void;
  findDuplicateClassification: (
    classification: CreateClassificationModel
  ) => boolean;
  children: ReactChild;
}

export function CreateClassification({
  addClassification,
  findDuplicateClassification,
  children,
}: CreateClassificationInterface): JSX.Element {
  const [classification, setClassification] =
    useState<CreateClassificationModel>({
      name: "",
      classification: "",
    });

  const [error, setSerror] = useState<CreateClassificationError>({
    hasError: false,
  });

  const onNameChange = (event: FormEvent<{ value: string }>) => {
    const name = event.currentTarget.value;

    setClassification({
      ...classification,
      name,
    });
  };

  const onClassificationChange = (event: FormEvent<{ value: string }>) => {
    const classificationValue = event.currentTarget.value;
    const onlyNumbersExpression: RegExp = /^\d*$/;

    //If the input contains any non-numeric character ignore
    if (!classificationValue.match(onlyNumbersExpression)) return;

    setClassification(
      new CreateClassificationModel(classification.name, classificationValue)
    );
  };

  const onSubmit = () => {
    // Run validations
    if (
      classification.name.trim() === "" ||
      classification.classification <= 0 ||
      findDuplicateClassification(classification)
    ) {
      setSerror({
        message: "You are trying to create a duplicate classification",
        hasError: true,
      });
      return;
    }
    // Reset values and remove error
    setSerror({
      hasError: false,
    });
    addClassification(classification);
    setClassification({
      name: "",
      classification: "",
    });
  };

  return (
    <Paper
      sx={{
        padding: "25px",
      }}
    >
      {children}
      <Stack
        sx={{
          gap: "25px",
          marginBlockStart: "25px",
        }}
      >
        <Stack direction="row" gap="25px">
          <TextField
            value={classification.name}
            onChange={onNameChange}
            fullWidth
            placeholder="Name"
          />
          <TextField
            value={classification.classification}
            onChange={onClassificationChange}
            fullWidth
            placeholder="Classification"
          />
        </Stack>
        <Typography color="error">{error?.message}</Typography>
        <Box
          sx={{
            marginInlineStart: "auto",
            minWidth: "250px",
            width: "33%",
          }}
        >
          <Button
            onClick={onSubmit}
            variant="contained"
            color="primary"
            fullWidth
          >
            Save
          </Button>
        </Box>
      </Stack>
    </Paper>
  );
}
