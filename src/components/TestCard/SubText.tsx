import { ReactNode } from "react";

interface SubTextProps {
  children: ReactNode[] | ReactNode;
  variant: string;
}

function SubText({ children, variant }: SubTextProps) {
  return(
    <div className={`${variant} w-full text-sm font-medium flex justify-center items-center gap-1 hover:bg-inherit bg-inherit`}>
      { children }
    </div>
  );
}

export default SubText;