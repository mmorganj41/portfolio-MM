import './HighlightedProject.css';
import { ProjectInfo } from "../Projects/Projects";
import SocialIcon from "../SocialIcon/SocialIcon";
import Carousel from '../Carousel/Carousel';


interface Props {
    selectedIndex: number;
    projects: ProjectInfo[];
    setCarouselIndex: Function;
    carouselIndex: number;
}

export default function HighlightedProject(props: Props) {
    const {selectedIndex, projects, setCarouselIndex, carouselIndex} = props;

    const bullets = projects[selectedIndex].bullets.map((bullet, i) => {
        return (<li key={i}>{bullet}</li>)
    })

    return (<div className='HighlightedProject' id="HighlightedProject">
        <div  className='name'>
            <h2 key={selectedIndex}>{projects[selectedIndex].name}, <span>{projects[selectedIndex].summary}</span></h2>
        </div>
        <div className='carousel'>
            <Carousel key={selectedIndex} images={projects[selectedIndex].images} carouselIndex={carouselIndex} setCarouselIndex={setCarouselIndex}/>
        </div>
        <div key={selectedIndex} className='bullets'>
            <ul>
                {bullets}
            </ul>
        </div>
        <div className='links'>
            <SocialIcon icon='github' link={projects[selectedIndex].github} samePage={false} popup='Git Repo'/>
            <SocialIcon icon='play' link={projects[selectedIndex].deploy} samePage={false} popup='Deployment'/>
        </div>
    </div>)
    
}