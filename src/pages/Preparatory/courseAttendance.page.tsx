import Main from "../../components/Main";
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
import usePreparatory from "../../context/preparatory/usePreparatory";
import { CourseAttendance, CourseDay } from "../../models";

function CourseAttendancePage() {
  const { id } = useParams();
  const { CourseDays, courseCandidates, getCourseCandidates, updateCourseAttendance, updateCandidateList } = usePreparatory();
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const [currentCourseDay, setCurrentCourseDay] = useState<CourseDay | undefined>(undefined)

  function handleCheckbox(id: string){
    if(currentCourseDay && courseCandidates){
      updateCandidateList(id)
    }
  }

  function handleSubmit(){
    if(currentCourseDay && courseCandidates){
      updateCourseAttendance(courseCandidates, currentCourseDay.id)
    }
    setIsDisabled(true)
  }
  
  useEffect(()=> {
    if (id && CourseDays){
      const currentDay : CourseDay[] = CourseDays.filter(day => day.id === id)
      getCourseCandidates(currentDay[0].id)
      setCurrentCourseDay(currentDay[0])
    }
  },[])
  
  return (
    <Main>
      <header className="bg-Blue text-white p-5 mx-3 w-full rounded-md font-semibold text-2xl">
        {
          currentCourseDay && currentCourseDay?.course.title + " / " + currentCourseDay.title
        }        
      </header>
      {
        courseCandidates && 
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
              {courseCandidates.map(( row: CourseAttendance) => (
                <TableRow
                  key={row.user.cpf}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.user.cpf}
                  </TableCell>
                  <TableCell align="center">{row.user.email}</TableCell>
                  <TableCell align="center">{row.user.firstName}</TableCell>
                  <TableCell align="center">{row.user.lastName}</TableCell>
                  <TableCell align="center"><Checkbox onChange={() => handleCheckbox(row.user.id)} checked={ row.presence } disabled={ isDisabled }/></TableCell>
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

export default CourseAttendancePage;
