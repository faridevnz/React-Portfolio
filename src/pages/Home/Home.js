import { Card } from '../../components/Card/Card';
import { cardDimentsion } from '../../components/Card/models/card-dimensions';
import { Navbar } from '../../components/Navbar/Navbar';
import './Home.css';

export const Home = () => {
    return (
        <div className="home">
            <div className="__container">
                {/* NAVBAR */}
                <Navbar></Navbar>
                {/* BODY */}
                <div className="__body">
                    {/* Title */}
                    <div className="--title">The Blog</div>
                    {/* Articles */}
                    <div className="__articles">
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <Card dimension={cardDimentsion.LARGE}></Card>
                    </div>
                </div>
                {/* FOOTER */}
            </div>
        </div>
    );
}