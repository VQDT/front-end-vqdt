import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode[];
}

function ModalContainer({ children }: ContainerProps) {
  return(
    <div className="
      w-[720px] h-80 bg-White rounded-3xl shadow-md 
      flex flex-col">
      {children}
    </div>
  );
}

export default ModalContainer;