import CardProps from '../Models/props.interface';
import './CardMobile.scss'

export const CardMobile = ({ dimension, data }: CardProps) => {
    return(
        <div className={`card-mobile card-mobile--${dimension}`}>
            <div className="__image-container">
                <img className="__image" src={data.imagePath} alt="" />
            </div>
            <div className="__info">
                <div className="title">
                    {data.title}
                </div>
                <div className="description">
                    {data.description}    
                </div>
                <div className="date">
                    {data.date}
                </div>
            </div>
        </div>
    );
}