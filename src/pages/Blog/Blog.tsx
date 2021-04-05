import { useContext } from 'react';
import { ResponsiveContext } from '../../context/ResponsiveContext/ResponsiveContext';
import { useMobile } from '../../hooks/useMobile/useMobile';
import { BlogDesktop } from './Desktop/BlogDesktop';
import { BlogMobile } from './Mobile/BlogMobile';

export const Blog = () => {
    // state and context
    const [ breakpoint ] = useContext(ResponsiveContext);
    const isMobile = useMobile(breakpoint);
    // render
    return isMobile 
        ? <BlogMobile></BlogMobile>
        : <BlogDesktop></BlogDesktop>
}
