import { ElementType } from "react";

interface CardTitleProps {
    icon?: ElementType;
    title: string;
    textAux?: string;
    type?: "alert" | "attention" | "confirm" | "secondary" | "primary";
}

function CardTitle({ icon: Icon, type = "secondary", ...props }: CardTitleProps) {
    return(
        <p className="flex items-center gap-1">
          <span className="text-primary text-xl font-medium">{props.title}</span>
          <span className="ml-auto text-base">{props.textAux}</span>
          { Icon && <Icon className="text-3xl"/> }
        </p>
    );
}

export default CardTitle;