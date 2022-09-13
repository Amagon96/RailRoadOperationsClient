import React, { ChangeEventHandler, FormEvent, useState } from "react";
import Box from "@mui/material/Box/Box";
import Stack from "@mui/material/Stack/Stack";
import Typography from "@mui/material/Typography/Typography";
import IconButton from "@mui/material/IconButton/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import TextField from "@mui/material/TextField/TextField";
import CheckIcon from "@mui/icons-material/Check";
import CancelIcon from "@mui/icons-material/Cancel";

export interface ClassificationItemInterface {
  item: string;
  classification: number;
  removeItem: (name: string) => void;
}

export interface ClasificationValuesInterface {
  item: string;
  classification: number;
}

export function ClassificationItem({
  item,
  classification,
  removeItem,
}: ClassificationItemInterface) {
  const [editing, setEditing] = useState(false);
  const [values, setValues] = useState<ClasificationValuesInterface>({
    item,
    classification,
  });

  const enableEdition = () => {
    setEditing(true);
  };

  const disableEdition = () => {
    setEditing(false);
  };

  const onCancel = () => {
    disableEdition();
  };

  const onDelete = () => {
    return removeItem(item);
  };

  const onItemChange = (event: FormEvent<{ value: string }>) => {
    setValues({
      classification: values.classification,
      item: event.currentTarget?.value,
    });
  };

  const onClassificationChange = (event: FormEvent<{ value: string }>) => {
    console.log(event.currentTarget?.value);
    const classification = Number(event.currentTarget?.value);
    setValues({
      classification,
      item: values.item,
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
          <TextField value={values.item} fullWidth onChange={onItemChange} />
        </Box>
        <Stack
          direction="row"
          sx={{
            width: "50%",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <TextField
              value={values.classification}
              fullWidth
              type="number"
              onChange={onClassificationChange}
            />
          </Box>
          <Stack direction="row">
            <IconButton color="primary" onClick={disableEdition}>
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
        <Typography lineHeight="40px">{values.item}</Typography>
      </Box>
      <Stack
        direction="row"
        sx={{
          width: "50%",
          justifyContent: "space-between",
        }}
      >
        <Typography lineHeight="40px">{values.classification}</Typography>
        <Stack direction="row">
          <IconButton color="primary" onClick={enableEdition}>
            <EditIcon />
          </IconButton>
          <IconButton color="error" onClick={onDelete}>
            <RemoveCircleOutlineIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
}
