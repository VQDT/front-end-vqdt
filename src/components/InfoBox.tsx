import { ElementType } from "react";

interface InfoBoxProps {
  title: string;
  subtitle?: string;
  textAux: string;
  variant?: "default" | "confirm" | "warning" | "alert";
  icon: ElementType;
}

function InfoBox({
  title,
  subtitle,
  textAux,
  variant = "default",
  icon: Icon,
}: InfoBoxProps) {
  return(
    <div className="w-full bg-Light flex justify-between rounded-[3px]">
      <div className={`w-full max-w-[250px] h-16 p-3 bg-Blue rounded-br-3xl flex flex-shrink-0 flex-col justify-center ${subtitle ? "": "items-center"}`}>
        {subtitle && <p className="text-White text-sm uppercase">{subtitle}</p>}
        <p className="text-White text-base font-semibold uppercase">{title}</p>
      </div>
      <div className={`${variant} p-3 text-sm font-medium flex justify-center items-center gap-1 hover:bg-inherit bg-inherit`}>
        <Icon size="20"/>
        <p>{textAux}</p>
      </div>
    </div>
  )
}

export default InfoBox;