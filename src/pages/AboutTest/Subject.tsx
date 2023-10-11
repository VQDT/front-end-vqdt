import { ElementType } from "react";

interface SubjectProps {
  text: string;
  icon: ElementType
}

function Subject({ text, icon: Icon }: SubjectProps) {
  return(
    <div className="min-w-max text-2xl flex items-center gap-3 flex-shrink-0 flex-1">
      <Icon size={24} className="text-Darker flex-shrink-0"/>
      <span className="text-xl font-semibold text-Darker">{ text }</span>
    </div>
  );
}

export default Subject;