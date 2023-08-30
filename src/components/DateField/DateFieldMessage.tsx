import { ReactNode } from "react";

interface DateFieldMessageProps {
    children: ReactNode;
    type?: "confirm" | "alert" | "attention" | "secondary";
}

function DateFieldMessage({type = "secondary", ...props}: DateFieldMessageProps) {
    const bgColor = {
        confirm: "bg-confirm",
        alert: "bg-alert",
        attention: "bg-attention",
        secondary: "bg-secondary text-gray-800"
    }

    return <p className={`w-max py-1 pr-4 rounded text-white text-base flex items-center ${bgColor[type]}`}>{props.children}</p>
}

export default DateFieldMessage;