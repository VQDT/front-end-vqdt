import { ReactNode } from "react";

export function ContainerModal(props: { children: ReactNode }) {
  return (
    <div className="w-full h-full flex justify-center items-center backdrop-blur fixed top-0 left-0">
      <div className="w-full max-w-3xl h-auto p-8 bg-white border border-gray-300 rounded-xl shadow relative">
        {props.children}
      </div>
    </div>
  );
}