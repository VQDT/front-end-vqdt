import { ReactNode, ElementType, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children?: ReactNode;
    variant?: "primary" | "secondary" | "alert" | "attention" | "confirm" | "transparent" | "cancel";
    iconLeft?: ElementType;
    iconRight?: ElementType;
    shadow?: boolean;
}

function Button({ iconLeft: IconLeft, iconRight: IconRight, variant = "transparent", ...props }: ButtonProps) {
    
    const bgColor = {
        transparent: "transparent text-gray-700 hover:bg-secondary",
        primary: "bg-primary hover:bg-primary_light",
        secondary: "bg-secondary text-gray-900 hover:bg-secondary_dark",
        alert: "bg-alert hover:bg-alert_light",
        attention: "bg-attention hover:bg-attention_light",
        confirm: "bg-confirm",
        cancel: "bg-red-500 hover:bg-red-400"
    }

    return(  
        <button className={`w-full py-2 px-4 border-none rounded font-medium text-white text-lg flex items-center justify-center gap-2 cursor-pointer transition-all ${bgColor[variant]}`} {...props}>
            { IconLeft && <IconLeft /> }
            { props.children }
            { IconRight && <IconRight /> }
        </button>
    );
}

export default Button