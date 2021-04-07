import { useContext } from 'react';
import { ResponsiveContext } from '../../context/ResponsiveContext/ResponsiveContext';
import { ThemeContext } from '../../context/ThemeContext/ThemeContext';
import { useMobile } from '../../hooks/useMobile/useMobile';
import { BlogDesktop } from './Desktop/BlogDesktop';
import { BlogMobile } from './Mobile/BlogMobile';
import './Blog.scss';

export const Blog = () => {
    const [breakpoint] = useContext(ResponsiveContext);
    const [theme] = useContext(ThemeContext);
    const isMobile = useMobile(breakpoint);
    // render
    // return isMobile 
    //     ? <BlogMobile></BlogMobile>
    //     : <BlogDesktop></BlogDesktop>
    // render to delete
    return(
        <div className="blog">
            <span className={`--color-${theme.color}`}>BLOG</span>
        </div>
    );
}
