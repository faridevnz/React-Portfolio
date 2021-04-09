import { Link } from 'react-router-dom';
import { breadcrumbs } from './model/breadcrumbs';
import { ColorPicker } from '../ColorPicker/ColorPicker';
import { ThemeContext } from '../../context/ThemeContext/ThemeContext';
import { useContext, useState } from 'react';
import './Navbar.scss';

export const Navbar = () => {
    // state and context
    const [selected, setSelected] = useState(0);
    const [theme] = useContext(ThemeContext);
    // functions
    const onChangeSelected = index => { setSelected(index) };
    // render 
    return (
        <div className={`navbar navbar--${theme.theme}`}>
            {/* breadcrumbs */}
            {breadcrumbs.map((item, index) => (
                <Link to={item.link} onClick={onChangeSelected.bind(this, index)} className={`__link __link--${theme.color} ${index === selected ? `--active-${theme.color}` : ''}`} key={index}>
                    <div >{item.label}</div>
                    <div className={`--underline --bg-${theme.color}`}></div>
                </Link>
            ))}
            <div className="__link">
                <ColorPicker />
                <div className="--underline"></div>
            </div>
        </div>
    );

}