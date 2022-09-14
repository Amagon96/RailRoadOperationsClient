import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import react, { useState } from "react";
import { TrainSort } from "../../api/TrainSortService";
import { ITrainCar } from "../../types/TrainCar";
import CarList from "./CarList";
import { ClassificationItem } from "./car-item";
import InputRow from "./InputRow";
import TableLabel from "./TableLabel";
import TrainIcon from "@mui/icons-material/Train";
import Box from "@mui/material/Box/Box";
import Stack from "@mui/material/Stack/Stack";
import Divider from "@mui/material/Divider/Divider";
import Typography from "@mui/material/Typography/Typography";
import { UpdateClassifications } from "./update-classifications";
import { Update } from "@mui/icons-material";

interface InputCardProps {
  onSort: (sortedTrain: ITrainCar[]) => void;
}

function InputCard({ onSort }: InputCardProps) {
  const [trainList, setTrainList] = useState<Map<string, ITrainCar>>(
    new Map([])
  );

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

  return (
    <Box
      sx={{
        bgcolor: "#F8F9FF",
        width: "100vw",
        height: "Calc(100vh - 64px)",
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
            <Typography variant="h6">Enter a train configuration</Typography>
          </Stack>
          <Divider />
          <UpdateClassifications>
            {Array.from(trainList).map(([id, car]) => {
              return (
              <ClassificationItem
                key={id}
                id={id}
                name={car.name}
                destination={car.destination}
                receiver={car.receiver}
                removeItem={handleRemove}
              />);
            })}
          </UpdateClassifications>
        </Paper>
      </Stack>
      <TableContainer component={Paper} sx={{ margin: "25px", width: "auto" }}>
        <Table>
          <TableHead>
            <TableLabel isOutput={false} onSort={handleSort} />
          </TableHead>
          <TableBody>
            <InputRow onAdd={handleAdd} />
            <CarList trainList={trainList} onRemove={handleRemove} />
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default InputCard;
