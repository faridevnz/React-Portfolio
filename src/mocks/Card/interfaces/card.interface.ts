import { CardSize, ICardData } from "../../../components/Card/Models/card.interface";

interface ICard {
    size: CardSize,
    data: ICardData
}

export { CardSize };
export type { ICard };
