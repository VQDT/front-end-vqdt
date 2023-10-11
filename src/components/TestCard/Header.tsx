import { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode[];
}

function Header({ children }: HeaderProps) {
  return(
    <div className="w-full mb-2 bg-Tertiary rounded-sm flex justify-between items-center flex-shrink-0 flex-wrap">
      { children }
    </div>
  );
}

export default Header;