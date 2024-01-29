import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import useElaborator from '../../context/elaborator/useElaborator';
import useAuth from '../../context/auth/useAuth';
import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Container from '@mui/material/Container';

interface Column {
   id: 'ID' | 'CRIAÇÃO' | 'ALTERAÇÃO' | 'AREA DO CONHECIMENTO' | 'COMPETÊNCIA' | 'STATUS';
   label: string;
   minWidth?: number;
   align?: 'right';
   format?: (value: number) => string;
}

const columns: readonly Column[] = [
   { id: 'ID', label: 'ID', minWidth: 170 },
   { id: 'CRIAÇÃO', label: 'CRIAÇÃO', minWidth: 100 },
   {
      id: 'ALTERAÇÃO',
      label: 'ÚLTIMA ALTERAÇÃO',
   },
   {
      id: 'AREA DO CONHECIMENTO',
      label: 'AREA DO CONHECIMENTO',
   },
   {
      id: 'COMPETÊNCIA',
      label: 'COMPETÊNCIA',
   },
   {
      id: 'STATUS',
      label: 'STATUS',
   },
];


export default function ElaboratorPainelPage() {

   const { user } = useAuth();
   const { myQuestions, getQuestions } = useElaborator()
   const [page, setPage] = React.useState(0);
   const [rowsPerPage, setRowsPerPage] = React.useState(10);

   useEffect(() => {
      if (user) {
         getQuestions(user)
      }
   }, [])

   const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
   };

   const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
   };

   console.log(myQuestions)

   return (
      myQuestions &&
      <>
         <Container maxWidth="xl" sx={{p:4}}>
            <Box>
               <Typography variant={"h4"} sx={{py:3}}>Minhas Questões</Typography>
               <Box justifyContent={"center"}>
                  <Paper sx={{ overflow: 'hidden' }}>
                     <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="tabela de questões">
                           <TableHead>
                              <TableRow>
                                 {columns.map((column) => (
                                    <TableCell
                                       key={column.id}
                                    >
                                       {column.label}
                                    </TableCell>
                                 ))}
                              </TableRow>
                           </TableHead>
                           <TableBody>
                              {
                                 myQuestions.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                       return (
                                          <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                             {columns.map((column) => {
                                                return (
                                                   <TableCell key={column.id} sx={{ maxWidth: "100px" }}>
                                                      {
                                                         column.id === 'ID' ? row.id :
                                                            column.id === 'CRIAÇÃO' ? row.createdAt.toString() :
                                                               column.id === 'ALTERAÇÃO' ? row.updatedAt.toString() :
                                                                  column.id === 'AREA DO CONHECIMENTO' ? row.knowledgeArea :
                                                                     column.id === 'COMPETÊNCIA' ? row.competence :
                                                                        column.id === 'STATUS' ? row.status :
                                                                           null
                                                      }
                                                   </TableCell>
                                                );
                                             })}
                                          </TableRow>
                                       );
                                    })}
                           </TableBody>
                        </Table>
                     </TableContainer>
                     <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={myQuestions.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                     />
                  </Paper>
               </Box>
            </Box>
         </Container>
      </>
   );
}