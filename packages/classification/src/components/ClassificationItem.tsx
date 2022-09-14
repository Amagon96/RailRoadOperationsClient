import { Button, TableCell } from "@mui/material";

interface ClassificationItemProps {
  id: string;
  name: string;
  classification: number;
  onRemove: (id: string) => void;
}

const ClassificationItem = ({
  id,
  name,
  classification,
  onRemove,
}: ClassificationItemProps) => {
  const handleRemove = () => {
    onRemove(id);
  };

  return (
    <>
      <TableCell>{id}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{classification}</TableCell>
      <TableCell>
          <Button variant="outlined" color="error" onClick={handleRemove}>
            Remove
          </Button>
      </TableCell>
    </>
  );
};

export default ClassificationItem;
