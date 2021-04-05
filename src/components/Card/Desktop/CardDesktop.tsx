import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext/ThemeContext';
import CardProps from '../models/props.interface';
import './CardDesktop.scss';

export const CardDesktop = ({ dimension, data }: CardProps) => {
    // state and context
    const [theme] = useContext(ThemeContext);
    // render
    return (
        <div className={`card-desktop card-desktop--${dimension}`}>
            <div className="__image-container">
                <img className="__image" src={data.imagePath} alt="" />
            </div>
            <div className="__info">
                <div className="date">
                    {data.date}
                </div>
                <div className={`title title--${theme.color}`}>
                    {data.title}
                </div>
                <div className="description">
                    {data.description}    
                </div>
            </div>
        </div>
    );
}
