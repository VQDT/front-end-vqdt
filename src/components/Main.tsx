import { ComponentProps } from "react";

function Main(props: ComponentProps<"main">) {
  return (
    <main {...props} className="w-full max-w-7xl mx-auto p-3">
      {props.children}
    </main>
  );
}

export default Main;
