import { ElementType, MouseEvent } from "react";
import InfoBox from "./InfoBox";

interface TestCardProps {
  title: string;
  subtitle?: string;
  textAux: string;
  description: string;
  icon: ElementType;
  variant?: "default" | "confirm" | "warning" | "alert";
  handleClick: (event: MouseEvent) => void;
}

function TestCard({
  title,
  subtitle,
  textAux,
  description,
  variant = "default",
  icon: Icon,
  handleClick,
}: TestCardProps) {
  return (
    <div 
      onClick={handleClick}
      className="w-full max-w-md p-3 bg-White border border-Blue border-dashed rounded-md flex flex-col gap-3 cursor-pointer hover:border-solid"
    >
      <InfoBox 
        title={title}
        subtitle={subtitle}
        textAux={textAux}
        variant={variant}
        icon={Icon}
      />
      <div className="h-24 py-1 overflow-hidden">
        <p className="text-Darker text-base">{description}</p>
      </div>
    </div>
  );

}

export default TestCard;