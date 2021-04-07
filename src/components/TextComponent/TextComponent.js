import './TextComponent.scss';

export const TextComponent = ({ data, children}) => {
    return(
        <div className="ciao">
            {children}
        </div>
    );
}