import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode[];
}

function Container({ children }: ModalProps) {
  return(
    <div className="w-full max-w-[1100px] mx-auto p-9 border border-Silver rounded-xl flex flex-col gap-9">
      { children }
    </div>
  );
}

export default Container;