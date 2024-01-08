import { ReactNode } from "react";

interface CardContainerProps {
  children: ReactNode | ReactNode[];
  direction?: "col" | "row";
}

function CardContainer({ children, direction = "row" }: CardContainerProps) {
  return (
    <div
      className={`
        w-full max-w-[300px] p-3 
        bg-White rounded-xl shadow-md flex items-center justify-between ${
          direction === "col" && "flex-col"
        }`}
    >
      {children}
    </div>
  );
}

export default CardContainer;
