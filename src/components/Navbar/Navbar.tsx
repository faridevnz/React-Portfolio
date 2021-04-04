import './Navbar.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { breadcrumbs } from './Models/Breadcrumbs/breadcrumbs';

export const Navbar = () => {
    // state
    const [ selected, setSelected ] = useState(0);
    // functions
    let onChangeSelected = (index: number) => { setSelected(index) }
    // render 
    return (
        <div className="navbar">
            {/* breadcrumbs */}
            {breadcrumbs.map((item, index) => (
                <Link to={item.link} onClick={onChangeSelected.bind(this, index)} className={`__link ${index === selected ? '--active' : null}`} key={index}>
                    <div >{item.label}</div>
                    <div className="--underline"></div>
                </Link>
            ))}
        </div>
    );

}