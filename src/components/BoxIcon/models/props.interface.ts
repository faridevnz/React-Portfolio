import { FunctionComponent, ReactChildren, SVGProps } from "react";

interface BoxIconProps {
    Icon: FunctionComponent<SVGProps<SVGSVGElement>>,
    text: string,
    label: string,
}

export default BoxIconProps;