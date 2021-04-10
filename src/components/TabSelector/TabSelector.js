import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext/ThemeContext';
import './TabSelector.scss';

export const TabSelector = ({ defaultTab, otherTabs }) => {
    const [theme] = useContext(ThemeContext);
    const [selected, setSelected] = useState(0);
    // render
    return(
        <div className={`tab-selector tab-selector--${theme.theme}`}>
            {/* all */}
            <div 
                className={`__tab __tab--${theme.color} ${selected === 0 ? `__tab--${theme.color}--selected` : ''} `}
                onClick={() => {setSelected(0)}}
            >
                <div className={`__tab-dot-selector`}></div>
                {defaultTab.label}
            </div>
            {/* delimiter */}
            <div className="__tab-delimiter"></div>
            {/* other tabs */}
            {otherTabs.map( tab => (
                <div 
                    key={tab.id} 
                    className={`__tab __tab--${theme.color} ${selected === tab.id ? `__tab--${theme.color}--selected` : ''}`}
                    onClick={() => {setSelected(tab.id)}}
                >
                    <div className={`__tab-dot-selector`}></div>
                    {tab.label}
                </div>
            ))}
        </div>
    );
}
