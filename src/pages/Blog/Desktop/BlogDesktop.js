import { useContext } from 'react';
import { TabSelector } from '../../../components/TabSelector/TabSelector';
import { ThemeContext } from '../../../context/ThemeContext/ThemeContext';
import { tabs } from '../models/tabs.model';
import './BlogDesktop.scss'

export const BlogDesktop = () => {
    const [theme] = useContext(ThemeContext);
    // render
    return(
        <div className={`blog-desktop blog-desktop--${theme.theme}`}>
            <div className="__tab-bar">
                <TabSelector {...tabs}/>
            </div>
            <div className="__body">
                <span className={`--color-${theme.color}`}>desktop blog</span>
            </div>
        </div>
    );
}