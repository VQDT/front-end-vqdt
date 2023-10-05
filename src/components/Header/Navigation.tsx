import { ReactNode } from "react";

interface NavigationProps {
  children: ReactNode;
}

function Navigation({ children }: NavigationProps) {
  return(
    <nav className="flex justify-end">
      { children }
    </nav>
  );
}

export default Navigation;