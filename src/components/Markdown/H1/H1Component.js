import './H1Component.scss';

export const H1Component = ({ children }) => {
    return(
        <div className="h1">
            {children}
        </div>
    );
}