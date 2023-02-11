import './Project.css';

interface Props {
    image: string;
    name: string;
    summary: string;
    index: number;
    liftIndex: Function;
}

export default function Project(props: Props) {
    const {image, name, summary, index, liftIndex} = props;

    return (
        <div onClick={() => liftIndex(index)} className='Project'>
            <img src={image} />
            <h5 className='projectTitle'>{name}</h5>
            <p>{summary}</p>
        </div>
    )
}