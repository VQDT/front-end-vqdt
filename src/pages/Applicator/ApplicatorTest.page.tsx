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
import isFuture from "../../utils/isFuture";
import { ICandidateApplicationRequest } from "../../models/User";
import { Toaster } from "sonner";
import { toast } from "react-toastify";

function ApplicatorTestPage() {
  const { id } = useParams();
  const { candidates, getCandidates, getTest, test, updateAttendance, updateCandidateList } = useTest();
  const [ isDisabled, setIsDisabled ] = useState<boolean>(false);

  function handleCheckbox(id: string){
    if(test && candidates){
      updateCandidateList(id)
    }
  }

  function handleSubmit() {

    setIsDisabled(true);

    if(test && candidates){
      const time = new Date(test.timeEnd).getTime()/2
      if(!isFuture(time.toString())){
        toast.error("Tempo de atualizar frequencia encerrado!");
        return;
      }
      updateAttendance(candidates, test)
    }

    toast.success("Frequência finalizada com sucesso!")
  }
  
  useEffect(()=> {
    if(id){
      getTest(id)
      getCandidates(id)
    }
  },[])

  useEffect(()=> {
    if(test){
      const time = new Date(test.timeEnd).getTime() / 2
      if (!isFuture(time.toString())) {
        setIsDisabled(true)
      }
    }
  }, [])
  
  console.log(candidates);

  function checkCourseAttendance(row: ICandidateApplicationRequest) {
    let counter = 0;
    if (row.courseAttendances) {
      row.courseAttendances.map((attendance) => {
        if (attendance.presence) {
          counter++;
        }
      })
      if (counter > 0) {
        return true;
      }
    }
    return false;
  }

  function checkTestPresence(row: ICandidateApplicationRequest) { 
    if (row.testAttendances) {
      return row.testAttendances[0].presence;
    }
    return false;
  }
  

  return (
    <Main>
      <header className="bg-Blue text-white p-5 mx-3 w-full rounded-md font-semibold text-2xl">
        {test && test?.name}
      </header>
      {candidates && (
        <TableContainer component={Paper} className="m-3">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow className="text-sky-500">
                <TableCell className="text-sky-500">CPF</TableCell>
                <TableCell align="center">EMAIL</TableCell>
                <TableCell align="center">NOME</TableCell>
                <TableCell align="center">FEZ O CURSO</TableCell>
                <TableCell align="center">PRESENÇA</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {candidates.map((row) => (
                <TableRow
                  key={row.cpf}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.cpf}
                  </TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">
                    {row.firstName + " " + row.lastName}
                  </TableCell>
                  <TableCell align="center">
                    {checkCourseAttendance(row) ? "SIM" : "NÃO"}
                  </TableCell>
                  <TableCell align="center">
                    <Checkbox
                      onChange={() => handleCheckbox(row.id)}
                      checked={checkTestPresence(row)}
                      disabled={isDisabled}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <div className="m-3">
        <Button onClick={handleSubmit} type="submit">
          FINALIZAR FREQUÊNCIA
        </Button>
      </div>

      <Toaster
        duration={5000}
        position="top-right"
        pauseWhenPageIsHidden={true}
        theme="light"
      />
    </Main>
  );
}

export default ApplicatorTestPage;
