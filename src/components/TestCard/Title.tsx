import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

function Title({ children }: TitleProps) {
  return(
    <p className="w-40 h-full bg-Blue rounded-br-xl text-White text-lg font-semibold flex items-center justify-center flex-shrink-0">
      { children }
    </p>
  );
}

export default Title;