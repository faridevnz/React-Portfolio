import './BoxIcon.scss';

export const BoxIcon = ({ Icon, text, label }) => {
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