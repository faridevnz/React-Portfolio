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
                    <div className="--title">The Blog</div>
                </div>
                {/* FOOTER */}
            </div>
        </div>
    );
}