import { useContext } from 'react';
import { ResponsiveContext } from '../../context/ResponsiveContext/ResponsiveContext';
import { useMobile } from '../../hooks/useMobile/useMobile';
import { BlogDesktop } from './Desktop/BlogDesktop';
import { BlogMobile } from './Mobile/BlogMobile';
import './Blog.scss';

export const Blog = () => {
    const [breakpoint] = useContext(ResponsiveContext);
    const isMobile = useMobile(breakpoint);
    // render
    return isMobile 
        ? <BlogMobile></BlogMobile>
        : <BlogDesktop></BlogDesktop>
}
