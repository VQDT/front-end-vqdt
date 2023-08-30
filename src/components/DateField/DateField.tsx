import { ReactNode } from "react";

interface DateFieldRootProps {
    children: ReactNode;
}

function DateFieldRoot(props: DateFieldRootProps) {
    return <div className="flex flex-col gap-1">{props.children}</div>
}

export default DateFieldRoot;