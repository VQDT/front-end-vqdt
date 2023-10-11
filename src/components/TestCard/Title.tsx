import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

function Title({ children }: TitleProps) {
  return (
    <p className="min-w-max h-fit p-4 bg-Blue rounded-sm rounded-br-xl text-White text-lg font-semibold uppercase flex-1 flex items-center justify-center flex-shrink-0">
      {children}
    </p>
  );
}

export default Title;
