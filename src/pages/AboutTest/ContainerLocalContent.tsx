import { ReactNode } from "react";

interface ContainerLocalContent {
  children: ReactNode;
}

function ContainerLocalContent({ children }: ContainerLocalContent) {
  return(
    <div className="flex justify-between gap-4 flex-wrap">
      { children }
    </div>
  );
}


export default ContainerLocalContent;