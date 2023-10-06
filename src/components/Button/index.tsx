import { ReactNode, ElementType, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children?: ReactNode;
    variant?: "primary" | "secondary" | "alert" | "attention" | "confirm" | "transparent"| "close";
    iconLeft?: ElementType;
    iconRight?: ElementType;
    shadow?: boolean;
    classes?: string;
}

function Button({ iconLeft: IconLeft, iconRight: IconRight, variant = "transparent", classes, ...props }: ButtonProps) {
    
    const bgColor = {
        transparent: "transparent text-gray-700 border-none hover:bg-secondary",
        primary: "bg-primary text-white border border-primary hover:bg-primary_light hover:border-primary_light",
        secondary: "bg-secondary border-none text-gray-900 hover:bg-secondary_dark",
        alert: "bg-white text-primary_red border border-primary_red hover:bg-primary_red hover:text-white",
        attention: "bg-attention text-white border-none hover:bg-attention_light",
        confirm: "bg-confirm text-white border-none",
        close: "bg-concrete text-white border hover:bg-white hover:text-concrete hover:border-concrete"
    }

    return(  
        <button className={`w-full py-2 px-4  rounded font-medium  text-lg flex items-center justify-center gap-2 cursor-pointer transition-all ${bgColor[variant]} ${classes}`} {...props}>
            { IconLeft && <IconLeft /> }
            { props.children }
            { IconRight && <IconRight /> }
        </button>
    );
}

export default Button