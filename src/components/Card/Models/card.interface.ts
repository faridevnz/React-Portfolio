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

export { CardSize };
export type { ICardData };