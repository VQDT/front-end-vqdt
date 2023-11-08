import { ComponentProps } from "react";

function Main(props: ComponentProps<"main">) {
  return (
    <main {...props} className="w-full max-w-7xl mt-24 mx-auto">
      {props.children}
    </main>
  );
}

export default Main;
