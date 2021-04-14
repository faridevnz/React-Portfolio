import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext/ThemeContext';
import './NavbarMobile.scss';

export const NavbarMobile = () => {
    const [theme] = useContext(ThemeContext);
    // render
    return(
        <div className={`navbar-mobile navbar-mobile--${theme.theme}`}></div>
    );
}