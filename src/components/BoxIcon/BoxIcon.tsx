import './BoxIcon.scss';
import BoxIconProps from './models/props.interface';

export const BoxIcon = ({ Icon, text, label }: BoxIconProps) => {
    return(
        <div className="box-icon">
            <Icon className="__icon" />
            <div className="__content">
                <div className="label">{label}</div>
                <div className="text">{text}</div>
            </div>
        </div>
    );
}