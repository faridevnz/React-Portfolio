import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext/ThemeContext';
import './ColorPicker.scss'
import { Colors } from '../../context/ThemeContext/models/colors';

export const ColorPicker = () => {
    // state and context
    const [isOpen, setOpen] = useState(false);
    const [theme, setTheme] = useContext(ThemeContext);
    // functions
    const onTrigger = () => { setOpen(prev => !prev) }
    const onChangeColor = color => {
        setTheme(prev => { return {...prev, color: color} });
        onTrigger();
    }
    // render
    return(
        <>
            <div className={`color-picker-trigger --${theme.color}`} onClick={onTrigger}></div>
            <div className={`color-picker-window ${isOpen ? '--open' : ''}`}>
                <div onClick={() => onChangeColor(Colors.FUCSIA)} className={`__color-choise --fucsia ${!isOpen ? 'display-none' : ''}`}></div>
                <div onClick={() => onChangeColor(Colors.ORANGE)} className={`__color-choise --orange ${!isOpen ? 'display-none' : ''}`}></div>
                <div onClick={() => onChangeColor(Colors.AZURE)} className={`__color-choise --azure ${!isOpen ? 'display-none' : ''}`}></div>
            </div>
        </>
    );
}