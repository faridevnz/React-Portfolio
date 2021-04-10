import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext/ThemeContext';
import './BlogMobile.scss'

export const BlogMobile = () => {
    const [theme] = useContext(ThemeContext);
    // render
    return(
        <div className={`blog-mobile blog-mobile--${theme.theme}`}>
            mobile blog
        </div>
    );
}