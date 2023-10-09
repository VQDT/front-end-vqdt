import { ReactNode } from "react";

interface DescriptionProps {
  children: ReactNode;
}

function Description({ children }: DescriptionProps) {
  return(
    <div className="w-full overflow-hidden text-ellipsis v" >
      <p className="text-LightTextSecondary text-sm">
        { children }
      </p>
    </div>
  );
}

export default Description;