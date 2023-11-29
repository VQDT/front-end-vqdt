import { ComponentProps } from "react";

interface SelectioFieldProps extends ComponentProps<"select"> {
  label: string;
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
    <div className="w-full max-w-lg flex flex-col gap-2">
      <label htmlFor={ rest.id } className="text-Blue text-lg font-medium">
        { label }
      </label>
      <select { ...rest } className="w-full p-3 pr-5 border border-Concrete rounded">
        { optionsList }
      </select>
    </div>

  );

}

export default SelectioField;