import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

function Title({ children }: TitleProps) {
  return (
    <p className="w-full max-w-[165px] h-screen px-3 max-h-[50px] bg-Blue rounded-sm rounded-br-xl text-White text-lg font-semibold whitespace-nowrap uppercase flex items-center justify-center overflow-hidden">
      <span className="max-w-full overflow-hidden text-ellipsis">
        {children}
      </span>
    </p>
  );
}

export default Title;
