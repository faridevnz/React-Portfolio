import './Card.scss';
import { cardDimentsion } from './models/card-dimensions';

export const Card = ({ dimension = cardDimentsion.SMALL, data }) => {
    return (
        <div className={`card card--${dimension}`}>
            <img className="__image" src={data.imagePath} alt="" />
            <div className="__info">
                <div className="date">
                    {data.date}
                </div>
                <div className="title">
                    {data.title}
                </div>
                <div className="description">
                    {data.description}    
                </div>
            </div>
        </div>
    );
}