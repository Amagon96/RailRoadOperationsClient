import react from "react";
import Box from '@mui/material/Box/Box';
import Divider from '@mui/material/Divider/Divider';
import Paper from '@mui/material/Paper/Paper';
import Stack from '@mui/material/Stack/Stack';
import Typography from '@mui/material/Typography/Typography';
import { ITrainCar } from "../../types/TrainCar";
import SortIcon from '@mui/icons-material/Sort';
import { OutputLabel } from "./output-label";
import { OutputItem } from "./output-item";
import { useTranslation } from "react-i18next";

interface OutputCardProps{
  carList: ITrainCar[]
}

function OutputCard({ carList }: OutputCardProps) {
  const { t, i18n } = useTranslation();
  
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
            <Typography variant="h6">{t("output-card-sorted")}</Typography>
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
