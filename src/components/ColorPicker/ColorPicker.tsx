import { useState } from 'react';
import './ColorPicker.scss'

export const ColorPicker = () => {
    // state
    const [ isOpen, setOpen ] = useState(false);
    // functions
    const onTrigger = () => { setOpen(prev => !prev) }
    // render
    return(
        <>
            <div className="color-picker-trigger" onClick={onTrigger}></div>
            <div className={`color-picker-window ${isOpen ? '--open' : ''}`}>
                <div className={`__color-choise --fucsia ${!isOpen ? 'display-none' : ''}`}></div>
                <div className={`__color-choise --orange ${!isOpen ? 'display-none' : ''}`}></div>
                <div className={`__color-choise --azure ${!isOpen ? 'display-none' : ''}`}></div>
            </div>
        </>
    );
}