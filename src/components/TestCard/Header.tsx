import { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode[];
}

function Header({ children }: HeaderProps) {
  return(
    <div className="w-full h-12 mb-2 bg-Tertiary flex items-center flex-shrink-0">
      { children }
    </div>
  );
}

export default Header;