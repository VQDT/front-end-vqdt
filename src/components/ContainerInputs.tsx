import { ReactNode } from "react";

export function ContainerInput(props: { children: ReactNode }) {
  return(
    <div className="flex gap-10">
      { props.children }
    </div>
  );
}