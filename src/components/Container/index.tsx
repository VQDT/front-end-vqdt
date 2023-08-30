import { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
}

function Container(props: ContainerProps) {
    return(
        <div className="p-8 w-full bg-white rounded">
            { props.children }
        </div>
    );
}

export default Container;