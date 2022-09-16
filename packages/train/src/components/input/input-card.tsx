import Paper from "@mui/material/Paper";
import react, { useEffect, useState } from "react";
import { TrainSort } from "../../api/TrainSortService";
import { ITrainCar } from "../../types/TrainCar";
import { CarItem } from "./car-item";
import {InputRow} from "./input-row";
import TrainIcon from "@mui/icons-material/Train";
import Box from "@mui/material/Box/Box";
import Stack from "@mui/material/Stack/Stack";
import Divider from "@mui/material/Divider/Divider";
import Typography from "@mui/material/Typography/Typography";
import { InputLabel } from "./input-label";
import Button from "@mui/material/Button/Button";
import { DestinationService } from "../../api/DestinationService";
import { ReceiverService } from "../../api/ReceiverService";
import { useTranslation } from "react-i18next";


interface InputCardProps {
  onSort: (sortedTrain: ITrainCar[]) => void;
}

function InputCard({ onSort }: InputCardProps) {
  const [trainList, setTrainList] = useState<Map<string, ITrainCar>>(
    new Map([])
  );
  const [destinationOptions, setDestinationOptions] = useState([]);
  const [receiverOptions, setReceiverOptions] = useState([]);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    (async () => {
      const result = await DestinationService();
      const data = result.data;
      setDestinationOptions(data.map(item=>item.name));
    })();
    (async () => {
      const result = await ReceiverService();
      const data = result.data;
      setReceiverOptions(data.map(item=>item.name));
    })();

    return () => {};
  }, []);

  const handleSort = async () => {
    const result = await TrainSort(trainList);
    const data = result.data;
    onSort(data);
  };

  const handleAdd = (id: string, trainCar: ITrainCar) => {
    setTrainList((prevState) => {
      const nextState = new Map(prevState);
      nextState.set(id, trainCar);
      return nextState;
    });
  };

  const handleRemove = (id: string) => {
    setTrainList((prevState) => {
      const nextState = new Map(prevState);
      nextState.delete(id);
      return nextState;
    });
  };

  const handleUpdate = (id: string,newCar:ITrainCar) => {
    setTrainList((prevState) => {
      const nextState = new Map(prevState);
      nextState.set(id,newCar)
      return nextState;
    });
  };

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
              <TrainIcon sx={{ color: "#FFF" }} />
            </Box>
            <Typography sx={{ flex: 1 }} variant="h6">
              {t("input-card-train-configuration")}
            </Typography>
            <Button variant="contained" onClick={handleSort}>
            {t("input-card-train-sort")}
            </Button>
          </Stack>
          <Divider />
          <InputLabel>
            <InputRow
              onAdd={handleAdd}
              destinationOptions={destinationOptions}
              receiverOptions={receiverOptions}
            />
            {Array.from(trainList).map(([id, car]) => {
              return (
                <CarItem
                  key={id}
                  id={id}
                  name={car.name}
                  destination={car.destination}
                  receiver={car.receiver}
                  destinationOptions={destinationOptions}
                  receiverOptions={receiverOptions}
                  removeItem={handleRemove}
                  updateItem={handleUpdate}
                />
              );
            })}
          </InputLabel>
        </Paper>
      </Stack>
    </Box>
  );
}

export default InputCard;
