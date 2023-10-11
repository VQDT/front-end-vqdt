import { ReactNode } from "react";

interface SubTextContainerProps {
  children: ReactNode[];
}

function SubTextContainer({ children }: SubTextContainerProps) {
  return(
    <div className="p-4 flex-1 flex-grow-[2] flex justify-center sm:justify-end gap-9">
      {children}
    </div>
  );
}


export default SubTextContainer;