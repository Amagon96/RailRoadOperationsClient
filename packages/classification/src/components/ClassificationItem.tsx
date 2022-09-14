import Button from "@mui/material/Button";
import TableCell from "@mui/material/TableCell";


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
