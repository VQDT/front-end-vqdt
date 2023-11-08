//import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import Main from "../../components/Main";
import Table from "../../components/Table"
function Preparatory() {

  const tableRegisters = [
    {
      id: "001",
      name: "davidson",
      sobrenome: "aguiar",
      dataNascimento: "12/10/1993"
    },
    {
      id: "002",
      name: "agatha",
      sobrenome: "aguiar",
      dataNascimento: "22/11/2014"
    }
  ]  

  return (
    <Main>
      <Table registros={tableRegisters}/>
    </Main>
  );
}

export default Preparatory;
