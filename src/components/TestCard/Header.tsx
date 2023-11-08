import { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode[];
  size?: "small" | "large";
}

function Header({ children, size = "small" }: HeaderProps) {
  return(
    <div className={`w-full h-full ${size === "small" ? "max-h-[50px]": "max-h-[68px]"} mb-2 bg-Tertiary rounded-sm flex justify-between items-center flex-shrink-0 flex-wrap`}>
      { children }
    </div>
  );
}

export default Header;