import './Card.scss';
import { cardDimentsion } from './models/card-dimensions';

export const Card = ({ dimension = cardDimentsion.SMALL }) => {
    return (
        <div className={`card card--${dimension}`}>
            <img className="__image" src="https://picsum.photos/600/400" alt="" />
            <div className="__info">
                <div className="title">
                    Titolo dell'articolo che stai guardando
                </div>
                <div className="date">
                    2020, 1 Marzo
                </div>
                <div className="description">
                    Minim labore anim est in id qui id aliqua labore aliquip in et exercitation commodo
                    Qui ipsum officia duis non cillum id ea duis cupidatat esse ex ad.
                    Magna deserunt labore dolor laborum eu aute est non in quis adipisicing Lorem.
                </div>
            </div>
        </div>
    );
}