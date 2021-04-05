import { Card } from '../../../components/Card/Card';
import { MockedCards } from '../../../mocks/Card/card-mock';
import './BlogDesktop.scss'

export const BlogDesktop = () => {
    return(
        <div className="blog-desktop">
            <div className="__container">
                {/* BODY */}
                <div className="__body">
                    {/* Articles */}
                    <div className="__articles">
                        {/* FIRST CARD */}
                        <div className="__first-article">
                            <Card dimension={MockedCards[0].size} data={MockedCards[0].data}></Card>
                        </div>
                        {/* OTHER CARDS */}
                        <div className="__card-grid">
                            <div className="__flex-column">
                                <Card dimension={MockedCards[3].size} data={MockedCards[3].data}></Card>
                                <Card dimension={MockedCards[5].size} data={MockedCards[5].data}></Card>
                                <Card dimension={MockedCards[4].size} data={MockedCards[4].data}></Card>
                            </div>
                            <div className="__flex-column">
                                <Card dimension={MockedCards[1].size} data={MockedCards[1].data}></Card>
                                <Card dimension={MockedCards[2].size} data={MockedCards[2].data}></Card>
                            </div>
                            <div className="__flex-column">
                                <Card dimension={MockedCards[6].size} data={MockedCards[6].data}></Card>
                                <Card dimension={MockedCards[7].size} data={MockedCards[7].data}></Card>
                            </div>
                        </div>
                    </div>
                </div>
                {/* FOOTER */}
            </div>
        </div>
    );
}