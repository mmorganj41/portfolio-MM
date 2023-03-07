import './ProjectList.css';
import Project from "../Project/Project";
import { useState } from 'react';
import { ProjectInfo } from '../Projects/Projects';


interface Props {
    projects: ProjectInfo[];
    liftIndex: Function;
    selectedIndex: number;
    setCarouselIndex: Function;
}

export default function ProjectList(props: Props) {
    const {projects, liftIndex, selectedIndex, setCarouselIndex} = props;
    const [loadedIndex, setLoadedIndex] = useState(3);

    const projectJSX = projects?.map((project, i) => {
        return <Project key={project.name} liftIndex={liftIndex} selectedIndex={selectedIndex} index={i} image={project.images[0]} name={project.name} summary={project.summary} setCarouselIndex={setCarouselIndex}/>
    }) 

    function handleClick() {
        setLoadedIndex(index => index + 4);
    }

    return (
        <div className='ProjectList'>
            <h2 className='title'>Project List</h2>
            {projectJSX.slice(0, loadedIndex+1)}
            {loadedIndex < projectJSX.length - 1 && (
            <button onClick={handleClick} className='load btn'>
                Load more
            </button>
            )}
        </div>
    )
}