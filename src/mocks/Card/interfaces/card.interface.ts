enum CardSize {
    'SMALL' = 'small', 
    'LARGE' = 'large'
}

interface ICardData {
    date: string,
    title: string,
    description: string,
    imagePath: string
}

interface ICard {
    size: CardSize,
    data: ICardData
}

export { CardSize };
export type { ICard };
