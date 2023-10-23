import { ReactNode } from "react";

interface RootProps {
  children: ReactNode;
}

function Root({ children }: RootProps) {
  return(
    <div className="p-8 border bg-White border-Tertiary rounded-lg flex flex-col gap-5">
      { children }
    </div>
  );
}

export default Root;