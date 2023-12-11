import Main from "../../components/Main";
import useTest from "../../context/test/useTest";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";
import Checkbox from '@mui/material/Checkbox';
import Button from "../../components/Button";

function ApplicatorTestPage() {
  const { id } = useParams()
  const { candidates, getCandidates, getTest, test, updateAttendance } = useTest();
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const [presents, setPresents] = useState<string[]>([])

  function handleCheckbox(id: string){
    if(test){
      if (presents.indexOf(id) > -1){
        const newPresents = presents.filter((element) => element !== id);
        setPresents(newPresents)
      }
      else{
        setPresents([...presents, id])
      }
    }
  }

  function handleSubmit(){
    if(test){
      updateAttendance(presents, test.id)
    }
    setIsDisabled(true)
  }
  
  useEffect(()=> {
    if (id){
      getTest(id)
      getCandidates(id)
    }
  },[])
  
  return (
    <Main>
      <header className="bg-Blue text-white p-5 mx-3 w-full rounded-md font-semibold text-2xl">
        {
          test && test?.name
        }        
      </header>
      {
        candidates && 
        <TableContainer component={Paper} className="m-3">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow className="text-sky-500">
                <TableCell className="text-sky-500">CPF</TableCell>
                <TableCell align="center">EMAIL</TableCell>
                <TableCell align="center">PRIMEIRO NOME</TableCell>
                <TableCell align="center">ULTIMO NOME</TableCell>
                <TableCell align="center">PRESENÇA</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {candidates.map((row) => (
                <TableRow
                  key={row.cpf}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.cpf}
                  </TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.firstName}</TableCell>
                  <TableCell align="center">{row.lastName}</TableCell>
                  <TableCell align="center"><Checkbox onChange={() => handleCheckbox(row.id)} disabled={isDisabled}/></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      }
      <div className="m-3">
        <Button onClick={handleSubmit}>FINALIZAR FREQUÊNCIA</Button>
      </div>
    </Main>
  );
}

export default ApplicatorTestPage;
