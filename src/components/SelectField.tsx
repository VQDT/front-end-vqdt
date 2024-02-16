import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge"

interface SelectioFieldProps extends ComponentProps<"select"> {
  label: string;
  placeholder?: string;
  options: {
    value: string;
    label: string;
  }[];
}

function SelectioField({ label, options, ...rest }: SelectioFieldProps) {

  const optionsList = options.map((option) => (
    <option value={option.value}>{option.label}</option>
  ));


  return(
    <div className={twMerge("w-full max-w-lg flex flex-col gap-2", rest.className)}>
      <label htmlFor={ rest.id } className="text-Blue text-lg font-medium">
        { label }
      </label>
      <select { ...rest } className="w-full p-3 pr-5 border border-Concrete rounded">
        {rest.placeholder && <option value="" disabled selected>{rest.placeholder}</option>}
        { optionsList }
      </select>
    </div>

  );

}

export default SelectioField;