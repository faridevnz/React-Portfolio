import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";
import './Contributions.scss';

export const Contributions = () => {
    const [theme] = useContext(ThemeContext);
    // render
    return(
        <div className={`contributions contributions--${theme.theme}`}>
            <span className={`--color-${theme.color}`}>contributions</span>
        </div>
    );
}