import react from "react";
import { Box, Card, CardContent, Divider, Paper, Stack, Table, TableBody, TableContainer, TableHead, Typography } from "@mui/material";
import { ITrainCar } from "../../types/TrainCar";
import SortIcon from '@mui/icons-material/Sort';
import { OutputLabel } from "./output-label";
import { OutputItem } from "./output-item";

interface OutputCardProps{
  carList: ITrainCar[]
}

function OutputCard({carList}:OutputCardProps) {
  return (
    <Box
      sx={{
        bgcolor: "#F8F9FF",
        width: "100vw",
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
              <SortIcon sx={{ color: "#FFF" }} />
            </Box>
            <Typography variant="h6">Sorted Train</Typography>
          </Stack>
          <Divider />
          <OutputLabel>
            {Array.from(carList).map(car => {
              return (
              <OutputItem values={car}/>
                );
            })}
          </OutputLabel>
        </Paper>
      </Stack>
    </Box>
  );
}

export default OutputCard;
