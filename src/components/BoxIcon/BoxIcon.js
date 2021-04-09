import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext/ThemeContext';
import './BoxIcon.scss';

export const BoxIcon = ({ Icon, text, label }) => {
    const [theme] = useContext(ThemeContext);
    // render
    return(
        <div className={`box-icon box-icon--${theme.theme}`}>
            <Icon className="__icon" />
            <div className="__content">
                <div className="label">{label}</div>
                <div className="text">{text}</div>
            </div>
        </div>
    );
}