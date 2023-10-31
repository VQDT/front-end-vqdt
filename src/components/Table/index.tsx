import {
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table as TableMUI,
} from "@mui/material";

interface TableProps<t> {
  registros: t[];
}

function Table<T>({ registros }: TableProps<T>) {
  const keysT = Object.keys(registros[0] as object);

  const listHeader = keysT.map((key) => {
    return (
      <TableCell key={key} className="!text-Blue !border-none !font-bold">
        {key.toUpperCase()}
      </TableCell>
    );
  });

  const rowBody = registros.map((row) => {
    const listCellRow = Object.values(row as object).map((td) => {
      return <TableCell className="!border-none !text-Midnight !font-medium">{td.toUpperCase()}</TableCell>;
    });

    return (
      <TableRow>
        { listCellRow }
      </TableRow>
    );
  });

  return (
    <TableContainer className="border border-Concrete rounded-lg">
      <TableMUI>
        <TableHead className="border-b border-Concrete">
          <TableRow>{listHeader}</TableRow>
        </TableHead>
        <TableBody>
          { rowBody }
        </TableBody>
      </TableMUI>
    </TableContainer>
  );
}

export default Table;
