import { BoxIcon } from '../../components/BoxIcon/BoxIcon'
import { ContactBox } from '../../components/ContactBox/ContactBox';
import { ReactComponent as HiIcon } from '../../icons/hi.svg';
import './Home.scss'

export const Home = () => {
    return(
        <div className="home-body">
            {/* left */}
            <div className="__left">
                <BoxIcon Icon={HiIcon} text="Alessio" label="hi i'm" />
                <div className="__job-title">
                    <p>full-stack</p>
                    <p>developer</p>
                </div>
                <div className="__email">
                    alessio.farinelli.developer@gmail.com
                </div>
                <ContactBox />
            </div>
            {/* right */}
            <div className="__right">

            </div>
        </div>
    );
}
