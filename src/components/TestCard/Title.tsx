import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

function Title({ children }: TitleProps) {
  return (
    <p className="w-full max-w-[165px] h-[68px] max-h-full px-3 bg-Blue rounded-sm rounded-br-xl text-White text-lg font-semibold whitespace-nowrap uppercase flex items-center justify-center overflow-hidden">
      <span className="max-w-full overflow-hidden text-ellipsis block">
        {children}
      </span>
    </p>
  );
}

export default Title;
