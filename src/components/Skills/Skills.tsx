import Skill from "../Skill/Skill";
import './Skills.css';

const skills: Record<string, string[]> = {
    Languages: ['Javascript', 'Python', 'Ruby', 'HTML5', 'CSS', 'SQL', 'AutoIt3', 'Matlab'],
    Frameworks: ['Node.js', 'Express', 'React', 'JQuery', 'Bootstrap', 'Django'],
    Software: ['Git', 'GitHub', 'AWS', 'PostgreSQL', 'Docker', 'MySQL', 'MongoDB', 'Linux', 'Trello'],
    General: ['Computer Science', 'Technical Communication', 'Management', 'Marketing', 'Manufacturing', 'Technical Writing', 'Full Stack']
}

export default function Skills() {
    const skillsComponents = Object.keys(skills).map(key => {
        const eachSkill = skills[key].map((e,i) => {
            return (<Skill skill={e} key={i}/>)
        })

        return (<div key={key}>
            <h5 className='subtitle'>{key}</h5>
            <div className='skillSection'>
            {eachSkill}
            </div>
        </div>)
    })

    return (<div className="Skills">
        <h3 className='title'>My Skills</h3>
        <div className='details'>
            {skillsComponents}
        </div>
    </div>)
}