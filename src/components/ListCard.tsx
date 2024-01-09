import { ReactNode } from "react";

interface ListCardProps {
  children: ReactNode;
}

function ListCard({ children }: ListCardProps) {
  return(
    <div className="w-full max-w-7xl p-4 mx-auto mt-3 mb-16 bg-White border border-Silver rounded-xl">
      <div className="xs:w-full flex gap-5 xs:flex-wrap">
        { children }
      </div>
    </div>
  );
}

export default ListCard;