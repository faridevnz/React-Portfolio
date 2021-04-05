import { ReactComponent as CodePenIcon } from '../../icons/codepen.svg';
import { ReactComponent as GitHubIcon } from '../../icons/github.svg';
import { ReactComponent as LinkInIcon } from '../../icons/linkedin.svg';
import { ReactComponent as TwitterIcon } from '../../icons/twitter.svg';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext/ThemeContext';
import './ContactBox.scss';

export const ContactBox = () => {
    // state and context
    const [theme] = useContext(ThemeContext);
    // render
    return(
        <div className="contacts-container">
            <LinkInIcon className={`__icon __icon--${theme.color}`} />
            <TwitterIcon className={`__icon __icon--${theme.color}`} />
            <CodePenIcon className={`__icon __icon--${theme.color}`} />
            <GitHubIcon className={`__icon __icon--${theme.color}`} />
        </div>
    );
}