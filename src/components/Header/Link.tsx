import { ReactNode } from "react";

interface LinkProps {
  children: ReactNode;
  url: string;
}

function Link({ url, children }: LinkProps) {
  return (
    <li className="px-6 text-White text-xl font-medium flex justify-center items-center flex-grow flex-shrink hover:text-Light border-l border-White first:border-none">
      <a
        href={url}
        className="text-inherit cursor-pointer flex justify-center items-center gap-2"
      >
        {children}
      </a>
    </li>
  );
}

export default Link;
