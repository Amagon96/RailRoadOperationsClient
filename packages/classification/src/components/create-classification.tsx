import React, { ReactChild, FormEvent, useState } from "react";
import Paper from "@mui/material/Paper/Paper";
import { CreateClassificationModel } from "../api/types";
import TextField from "@mui/material/TextField/TextField";
import Button from "@mui/material/Button/Button";
import Stack from "@mui/material/Stack/Stack";
import Box from "@mui/material/Box/Box";

export interface CreateClassificationInterface {
  addClassification: (classification: CreateClassificationModel) => void;
  children: ReactChild;
}

export function CreateClassification({
  addClassification,
  children,
}: CreateClassificationInterface): JSX.Element {
  const [classification, setClassification] =
    useState<CreateClassificationModel>({
      name: "",
      classification: "",
    });

  const onNameChange = (event: FormEvent<{ value: string }>) => {
    const name = event.currentTarget.value;
    setClassification(
      new CreateClassificationModel(name, classification.classification)
    );
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
    if (classification.name.trim() === "") return;
    if (classification.classification <= 0) return;
    addClassification(classification);
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
