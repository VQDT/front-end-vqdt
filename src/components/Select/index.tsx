import { SelectHTMLAttributes } from "react";
import { Role } from "../../models/User";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  variant?: "solid" | "outline";
  color?: "default" | "confirm" | "alert" | "warning" | "disable";
  options?: Role[];
}

function Select({variant = "solid", color = "default", size, options, ...props}: SelectProps) {
  return(
    <select 
      className={`button ${variant} ${color} ${size}`}
      {...props}
    >
      { 
        options && options.map(op => 
            (
                <option value={op.id} id={op.id.toString()}>{op.name}</option>
            )
        )
      }
    </select>
  );
}

export default Select;