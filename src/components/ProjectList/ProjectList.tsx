import './ProjectList.css';
import Project from "../Project/Project";
import { ProjectInfo } from '../Projects/Projects';


interface Props {
    projects: ProjectInfo[];
    liftIndex: Function;
}

export default function ProjectList(props: Props) {
    const {projects, liftIndex} = props;

    const projectJSX = projects?.map((project, i) => {
        return <Project key={project.name} liftIndex={liftIndex} index={i} image={project.images[0]} name={project.name} summary={project.summary} />
    }) 

    return (
        <div className='ProjectList'>
            {projectJSX}
        </div>
    )
}