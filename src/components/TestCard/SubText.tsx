import { ReactNode } from "react";

interface SubTextProps {
  children: ReactNode[] | ReactNode;
  variant?: string;
}

function SubText({ children, variant }: SubTextProps) {
  return(
    <div className={`${variant} px-2 text-sm font-medium flex justify-center items-center justify-self-end gap-1 hover:bg-inherit bg-inherit`}>
      { children }
    </div>
  );
}

export default SubText;