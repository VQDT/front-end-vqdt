import { LabelHTMLAttributes } from "react";

interface DateFieldTitleProps extends LabelHTMLAttributes<HTMLLabelElement> {

}

function DateFieldTitle(props: DateFieldTitleProps) {
    return(
        <label className="text-base font-medium" {...props}></label>
    );
}

export default DateFieldTitle;