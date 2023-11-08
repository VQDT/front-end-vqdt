import { School } from './school';

export interface classroom {
  id: string,
  name:string,
  idSchool: string,
  schools: School
}