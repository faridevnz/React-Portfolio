import { Card } from '../../components/Card/Card';
import { cardDimentsion } from '../../components/Card/models/card-dimensions';
import { Navbar } from '../../components/Navbar/Navbar';
import { MockedCards } from './../../mocks/card-mock';
import './Home.css';

export const Home = () => {
    return (
        <div className="home">
            <div className="__container">
                {/* NAVBAR */}
                <Navbar></Navbar>
                {/* BODY */}
                <div className="__body">
                    {/* Articles */}
                    <div className="__articles">

                        {/* FIRST CARD */}
                        <div className="__first-article">
                            <Card dimension={cardDimentsion[MockedCards[0].size]} data={MockedCards[0].data}></Card>
                        </div>
                        {/* OTHER CARDS */}
                        <div className="__card-grid">
                            <div className="__flex-column">
                                <Card dimension={cardDimentsion[MockedCards[3].size]} data={MockedCards[3].data}></Card>
                                <Card dimension={cardDimentsion[MockedCards[5].size]} data={MockedCards[5].data}></Card>
                                <Card dimension={cardDimentsion[MockedCards[4].size]} data={MockedCards[4].data}></Card>
                            </div>
                            <div className="__flex-column">
                                <Card dimension={cardDimentsion[MockedCards[1].size]} data={MockedCards[1].data}></Card>
                                <Card dimension={cardDimentsion[MockedCards[2].size]} data={MockedCards[2].data}></Card>
                            </div>
                            <div className="__flex-column">
                                <Card dimension={cardDimentsion[MockedCards[6].size]} data={MockedCards[6].data}></Card>
                                <Card dimension={cardDimentsion[MockedCards[7].size]} data={MockedCards[7].data}></Card>
                            </div>
                        </div>

                        {/* <div className="__card-grid">
                            {MockedCards.map(card => (
                                card.size !== 'LARGE' && (
                                    <Card dimension={cardDimentsion[card.size]} data={card.data}></Card>
                                )
                            ))}
                        </div> */}
                        
                        {/* <br/>
                        <br/>
                        <Card dimension={cardDimentsion.LARGE}></Card>
                        <br />
                        <div className="__card-row">
                            <Card dimension={cardDimentsion.SMALL}></Card>
                            <Card dimension={cardDimentsion.SMALL}></Card>
                            <Card dimension={cardDimentsion.SMALL}></Card>
                        </div>
                        <div className="__card-row">
                            <Card dimension={cardDimentsion.SMALL}></Card>
                            <Card dimension={cardDimentsion.SMALL}></Card>
                            <Card dimension={cardDimentsion.SMALL}></Card>
                        </div> */}
                    </div>
                </div>
                {/* FOOTER */}
            </div>
        </div>
    );
}