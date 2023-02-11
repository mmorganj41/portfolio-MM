import './HighlightedProject.css';
import { ProjectInfo } from "../Projects/Projects";
import SocialIcon from "../SocialIcon/SocialIcon";


interface Props {
    selectedIndex: number;
    projects: ProjectInfo[]
}

export default function HighlightedProject(props: Props) {
    const {selectedIndex, projects} = props;

    const bullets = projects[selectedIndex].bullets.map((bullet, i) => {
        return (<li key={i}>{bullet}</li>)
    })

    return (<div className='HighlightedProject'>
        <div className='name'>
            <h2>{projects[selectedIndex].name}, <span>{projects[selectedIndex].summary}</span></h2>
        </div>
        <div className='carousel'>
            {/* TBD */}
        </div>
        <div className='bullets'>
            <ul>
                {bullets}
            </ul>
        </div>
        <div className='links'>
            <SocialIcon icon='github' link={projects[selectedIndex].github} samePage={false}/>
            <SocialIcon icon='play' link={projects[selectedIndex].deploy} samePage={false}/>
        </div>
    </div>)
    
}