import { ReactNode } from "react";

interface SubjectProps {
  children: ReactNode | ReactNode[]
}

function Subjects({ children }: SubjectProps) {
  return(
    <div className="flex flex-wrap gap-4">
      { children }
    </div>
  );
}

export default Subjects;