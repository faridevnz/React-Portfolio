import { useContext } from "react"
import { ResponsiveContext } from "../../context/ResponsiveContext/ResponsiveContext"
import { useMobile } from "../../hooks/useMobile/useMobile";
import { HomeDesktop } from "./Desktop/HomeDesktop";
import { HomeMobile } from "./Mobile/HomeMobile";

export const Home = () => {
    const [breakpoint] = useContext(ResponsiveContext);
    const isMobile = useMobile(breakpoint);
    // return
    return isMobile
        ? <HomeMobile />
        : <HomeDesktop />
}