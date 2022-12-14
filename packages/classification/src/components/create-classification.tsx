import React, { ReactChild, FormEvent, useState } from "react";
import Paper from "@mui/material/Paper/Paper";
import { CreateClassificationModel } from "../api/types";
import TextField from "@mui/material/TextField/TextField";
import Button from "@mui/material/Button/Button";
import Stack from "@mui/material/Stack/Stack";
import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography/Typography";
import { useTranslation } from "react-i18next";


interface CreateClassificationError {
  message?: string;
  hasError: boolean;
}

export interface CreateClassificationInterface {
  addClassification: (classification: CreateClassificationModel) => void;
  findDuplicatedName: (name: string) => boolean;
  findDuplicatedClassification: (classification: number) => boolean;
  classificationType: string,
  children: ReactChild;
}

export function CreateClassification({
  addClassification,
  findDuplicatedName,
  findDuplicatedClassification,
  classificationType,
  children,
}: CreateClassificationInterface): JSX.Element {
  const [classification, setClassification] =
    useState<CreateClassificationModel>({});

  const [error, setSerror] = useState<CreateClassificationError>({
    hasError: false,
  });

  const { t, i18n } = useTranslation();

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

    setClassification({
      name: classification.name,
      classification: parseInt(classificationValue, 10),
    });
  };

  const onSubmit = async () => {
    // Run validations
    if (classification.name.trim() === "") {
      setSerror({
        message: "You must set a name",
        hasError: true,
      });
      return;
    }
    if (!classification.classification) {
      setSerror({
        message: "You must set a classification",
        hasError: true,
      });
      return;
    }
    if (classification.classification <= 0) {
      setSerror({
        message: "Invalid classification range",
        hasError: true,
      });
      return;
    }
    if (findDuplicatedName(classification.name)) {
      setSerror({
        message: "Classification name already exist",
        hasError: true,
      });
      return;
    }
    if (findDuplicatedClassification(classification.classification)) {
      setSerror({
        message: "Classification value already exist",
        hasError: true,
      });
      return;
    }

    // Reset values and remove error
    await addClassification(classification);
    setSerror({
      hasError: false,
    });
    setClassification({
      name: "",
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
            value={classification.name || ''}
            onChange={onNameChange}
            label={t(`create-${classificationType}-name-field`)}
            fullWidth
            placeholder="Name"
          />
          <TextField
            value={classification.classification || ""}
            onChange={onClassificationChange}
            fullWidth
            placeholder="Classification"
            InputProps={{
              inputProps: { min: 1 },
            }}
            label={t(`create-${classificationType}-classification-field`)}
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
            {t("create-classification-save-button")}
          </Button>
        </Box>
      </Stack>
    </Paper>
  );
}
