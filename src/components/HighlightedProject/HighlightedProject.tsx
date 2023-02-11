import { ProjectInfo } from "../Projects/Projects";


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
    </div>)
    
}