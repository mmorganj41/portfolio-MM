import './SocialIcon.css';

interface Props {
    link: string;
    icon: string;
    samePage: boolean | undefined;
    popup?: string;
}

export default function SocialIcon(props: Props) {
    const {link, icon, samePage, popup} = props;

    const tooltip = popup ? <div className='SocialIcon tooltip'>{popup}</div> : null;

    return (
        <div className='SocialIcon container'>
        <a className='SocialIcon icon' href={link} target={samePage ? "_self" : "_blank"}>
            <i className={`fa fa-${icon} fa-lg`} aria-hidden='true' />
            
        </a>
        {tooltip}
        </div>
    )
}