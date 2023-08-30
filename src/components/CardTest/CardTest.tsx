import { ElementType, ReactNode } from "react";
import CardTitle from "../CardTitle";

interface CardTestProps {
  title: string;
  description: string;
  textAux?: string;
  type?: "alert" | "attention" | "confirm" | "primary" | "secondary";
  tags?: ReactNode[];
  icon?: ElementType;
}

function CardTest({type = "secondary", ...props}: CardTestProps) {
  return (
    <div className="max-w-[360px] p-4 bg-white border rounded-sm shadow-md shrink-0 cursor-pointer hover:border-primary">
      <div className="w-full p-4 mb-2 bg-secondary rounded-sm">
        <CardTitle type={type} title={props.title} textAux={props.textAux} icon={props.icon}/>
      </div>
      <div className="mb-4 p-2">
        <p>{props.description}</p>
      </div>
      <div className="p-2 flex gap-2">
        {props.tags}
      </div>
    </div>
  );
}

export default CardTest;
