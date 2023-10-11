import { ReactNode } from "react";

interface LocalContentProps {
  children: ReactNode[];
}

function LocalContent({ children }: LocalContentProps) {
  return(
    <div className="min-w-[320px] flex flex-col flex-grow flex-1">
      { children }
    </div>
  );
}

export default LocalContent;