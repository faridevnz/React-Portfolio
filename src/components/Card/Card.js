import { useContext } from "react";
import { ResponsiveContext } from "../../context/ResponsiveContext/ResponsiveContext";
import { useMobile } from "../../hooks/useMobile/useMobile";
import { CardDesktop } from "./Desktop/CardDesktop";
import { CardMobile } from "./Mobile/CardMobile";

export const Card = ({ dimension, data }) => {
    const [ breakpoint ] = useContext(ResponsiveContext);
    const isMobile = useMobile(breakpoint)
    // render
    return isMobile
        ? <CardMobile dimension={dimension} data={data}></CardMobile>
        : <CardDesktop dimension={dimension} data={data}></CardDesktop>
}
