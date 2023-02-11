import './Project.css';

interface Props {
    image: string;
    name: string;
    summary: string;
    index: number;
    liftIndex: Function;
    selectedIndex: number;
}

export default function Project(props: Props) {
    const {image, name, summary, index, liftIndex, selectedIndex} = props;

    return (
        <div onClick={() => liftIndex(index)} className={`Project ${selectedIndex === index && 'selected'}`}>
            <img src={image} />
            <h5 className='projectTitle'>{name}</h5>
            <p>{summary}</p>
        </div>
    )
}