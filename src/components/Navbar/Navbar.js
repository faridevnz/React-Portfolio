import './Navbar.css';
import { breadcrumbs } from './models/breadcrums';
import { useState } from 'react';

export const Navbar = () => {

    // state
    const [ selected, setSelected ] = useState(0);
    // functions
    let onChangeSelected = index => { setSelected(index) }
    
    // render 
    return (
        <div className="navbar">
            {/* breadcrumbs */}
            {breadcrumbs.map((item, index) => (
                <div onClick={onChangeSelected.bind(this, index)} className={`__link ${index === selected ? '--active' : null}`} key={index}>
                    <a>{item.label}</a>
                    <div className="--underline"></div>
                </div>
            ))}
        </div>
    );

}