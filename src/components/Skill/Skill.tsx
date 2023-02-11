import './Skill.css';

interface Props {
    skill: string;
}

export default function Skill(props: Props) {
    const {skill} = props;

    return (
        <div className='Skill'>
            {skill}
        </div>
    )
}
