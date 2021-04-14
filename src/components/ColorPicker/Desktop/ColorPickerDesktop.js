import { useContext, useState } from 'react';
import { ThemeContext } from '../../../context/ThemeContext/ThemeContext';
import { Colors } from '../../../context/ThemeContext/models/colors';
import { Themes } from '../../../context/ThemeContext/models/themes';
import './ColorPickerDesktop.scss'

export const ColorPickerDesktop = () => {
    // state and context
    const [isOpen, setOpen] = useState(false);
    const [theme, setTheme] = useContext(ThemeContext);
    // functions
    const onTrigger = () => { setOpen(prev => !prev) }
    const onChangeColor = color => {
        setTheme( prev => { return { ...prev, color: color } });
        onTrigger();
    }
    const onToggleTheme = () => {
        setTheme( prev => { 
            var newTheme = prev.theme === Themes.DARK ? Themes.LIGHT : Themes.DARK;
            return { ...prev, theme: newTheme } 
        });
        onTrigger();
    }
    // render
    return(
        <>
            <div className={`color-picker-trigger --${theme.color}`} onClick={onTrigger}></div>
            <div className={`color-picker-window ${isOpen ? '--open' : ''}`}>
                <div onClick={() => onChangeColor(Colors.AZURE)} className={`__color-choise --azure ${!isOpen ? 'display-none' : ''}`}></div>
                <div onClick={() => onChangeColor(Colors.ORANGE)} className={`__color-choise --orange ${!isOpen ? 'display-none' : ''}`}></div>
                <div onClick={() => onChangeColor(Colors.FUCSIA)} className={`__color-choise --fucsia ${!isOpen ? 'display-none' : ''}`}></div>
                <br />
                <div onClick={() => onToggleTheme()} className={`__color-choise --${theme.theme} ${!isOpen ? 'display-none' : ''}`}></div>
            </div>
        </>
    );
}