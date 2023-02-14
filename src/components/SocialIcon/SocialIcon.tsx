import './SocialIcon.css';

interface Props {
    link: string;
    icon: string;
    samePage: boolean | undefined;
    popup?: string;
}

export default function SocialIcon(props: Props) {
    const {link, icon, samePage, popup} = props;

    const tooltip = popup ? <span className='tooltip'>{popup}</span> : null;

    return (
        <div className='SocialIcon'>
        <a href={link} target={samePage ? "_self" : "_blank"}>
            <i className={`fa fa-${icon} fa-lg`} aria-hidden='true' />
            
        </a>
        {tooltip}
        </div>
    )
}