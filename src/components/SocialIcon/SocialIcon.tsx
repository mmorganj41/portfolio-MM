import './SocialIcon.css';

interface Props {
    link: string;
    icon: string;
    samePage: boolean | undefined;
}

export default function SocialIcon(props: Props) {
    const {link, icon, samePage} = props;

    return (
        <a className='SocialIcon' href={link} target={samePage ? "_self" : "_blank"}>
            <i className={`fa fa-${icon} fa-lg`} aria-hidden='true' />
        </a>
    )
}