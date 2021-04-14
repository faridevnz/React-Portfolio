import { useContext } from "react"
import { ResponsiveContext } from "../../context/ResponsiveContext/ResponsiveContext"
import { useMobile } from "../../hooks/useMobile/useMobile";
import { NavbarDesktop } from "./Desktop/NavbarDesktop";
import { NavbarMobile } from "./Mobile/NavbarMobile";

export const Navbar = () => {
    const [breakpoint] = useContext(ResponsiveContext);
    const isMobile = useMobile(breakpoint);
    // return
    return isMobile
        ? <NavbarMobile />
        : <NavbarDesktop />
}