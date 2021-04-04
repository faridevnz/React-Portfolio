import './ContactBox.scss';
import { ReactComponent as CodePenIcon } from '../../icons/codepen.svg';
import { ReactComponent as GitHubIcon } from '../../icons/github.svg';
import { ReactComponent as LinkInIcon } from '../../icons/linkedin.svg';
import { ReactComponent as TwitterIcon } from '../../icons/twitter.svg';

export const ContactBox = () => {
    return(
        <div className="contacts-container">
            <LinkInIcon className="__icon" />
            <TwitterIcon className="__icon" />
            <CodePenIcon className="__icon" />
            <GitHubIcon className="__icon" />
        </div>
    );
}