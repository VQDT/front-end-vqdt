import { ReactNode } from "react";

interface ButtonsProps {
  children: ReactNode[] | ReactNode;
}

function Buttons({ children }: ButtonsProps) {

  return(
    <div className="self-center flex justify-center gap-16">
      { children }
    </div>
  );
}

export default Buttons;