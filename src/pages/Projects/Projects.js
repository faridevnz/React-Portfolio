import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext/ThemeContext';
import './Projects.scss';

export const Projects = () => {
    const [theme] = useContext(ThemeContext);
    // render
    return(
        <div className="projects">
            <span className={`--color-${theme.color}`}>PROJECTS</span>
        </div>
    );
}