import { ReactNode } from "react";

interface ListCardProps {
  children: ReactNode;
}

function ListCard({ children }: ListCardProps) {
  return(
    <div className="w-full max-w-7xl p-5 mx-auto my-9 border-2 border-Silver rounded-xl">
      <ul className="w-full flex gap-5 overflow-auto">
        { children }
      </ul>
    </div>
  );
}

export default ListCard;