import { ColorPicker } from "../../../components/ColorPicker/ColorPicker";
import { BoxIcon } from "../../../components/BoxIcon/BoxIcon";
import { ReactComponent as HiIcon } from "../../../icons/hi.svg";
import { ContactBox } from "../../../components/ContactBox/ContactBox";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext/ThemeContext";
import './HomeMobile.scss';

export const HomeMobile = () => {
    const [theme] = useContext(ThemeContext);
    // render
    return(
        <>
            <div className={`home-mobile-body home-mobile-body--${theme.theme}`}>
            {/* left */}
            <div className="__left">
                <div>
                    <BoxIcon Icon={HiIcon} text="Alessio" label="hi i'm" />
                    <div className="__job-title">
                        <p>full-stack</p>
                        <p className={`--color-${theme.color}`}>developer</p>
                    </div>
                    <a href="mailto:alessio.farinelli.developer@gmail.com" className={`__email --color-${theme.color}`}>
                        alessio.farinelli.developer@gmail.com
                        <div className="__email--underline"></div>
                    </a>
                </div>
                <ContactBox />
            </div>
        </div>
        </>
    );
}
