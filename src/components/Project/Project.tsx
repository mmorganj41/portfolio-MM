import './Project.css';

interface Props {
    image: string;
    name: string;
    summary: string;
    index: number;
    liftIndex: Function;
    selectedIndex: number;
    setCarouselIndex: Function;
}

export default function Project(props: Props) {
    const {image, name, summary, index, liftIndex, selectedIndex, setCarouselIndex} = props;

    function handleClick(index: number) {
        liftIndex(index);
        setCarouselIndex(0);
    }

    return (
        <a href="#HighlightedProject">
        <div onClick={() => handleClick(index)} className={`Project ${selectedIndex === index && 'selected'}`}>
            <div className='picture'>
                <img src={image} />{selectedIndex === index && <div className='label'>Selected</div>}
            </div>
            <h5 className='projectTitle'>{name}</h5>
            <p>{summary}</p>
        </div>
        </a>
    )
}