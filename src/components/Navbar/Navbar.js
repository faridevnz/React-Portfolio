import './Navbar.css';

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="__link">
                <a>HOME</a>
                <div className="--underline"></div>
            </div>
            <div className="__link">
                <a>BLOG</a>
                <div className="--underline"></div>
            </div>
            <div className="__link">
                <a>INFO</a>
                <div className="--underline"></div> 
            </div>
            <div className="__link">
                <a>CONTACTS</a>
                <div className="--underline"></div>
            </div>
        </div>
    );
}