import { useContext } from "react";
import { useMobile } from "../../hooks/useMobile/useMobile";
import { ResponsiveContext } from "../../context/ResponsiveContext/ResponsiveContext";
import { ColorPickerDesktop } from "./Desktop/ColorPickerDesktop";
import { ColorPickerMobile } from "./Mobile/ColorPickerMobile";

export const ColorPicker = () => {
    const [breakpoint] = useContext(ResponsiveContext)
    const isMobile = useMobile(breakpoint);
    // render
    return isMobile
        ? <ColorPickerMobile />
        : <ColorPickerDesktop />
}