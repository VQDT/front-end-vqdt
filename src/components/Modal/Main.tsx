import { ReactNode } from "react";

interface MainProps {
  children: ReactNode[];
}

function Main({ children }: MainProps) {
  return(
    <div className="h-full p-9 flex flex-col justify-between">
      { children }
    </div>
  );
}

export default Main;