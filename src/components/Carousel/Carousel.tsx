import './Carousel.css';
import { useEffect, useState } from 'react';

interface Props {
    images: string[]
}
const delay = 6000;

export default function Carousel(props: Props) {
    const {images} = props;
    const [index, setIndex] = useState(0);

    function handleClick(i: number) {
        setIndex(i);
    }

    useEffect(() => {
        const timer = setTimeout(
            () =>
            setIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1),
            delay
        );

        return () => clearTimeout(timer);
    }, [index])
    return (
        <div className='Carousel'>
            <div className='slider' style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                {images.map((image, i) => (
                    <div className='slide'
                    key={i} >
                        <a href={image} target='_blank'>
                        <img src={image} />
                        </a>
                    </div>
                ))}
            </div>
            <div className='dots'>
                {images.map((_, i) => (
                    <div key={i} className='dot' style={{ backgroundColor: `${i === index ? 'var(--colorThemeOrange)' : '#c4c4c4'}`}} onClick={() => handleClick(i)}/>
                ))}
            </div>
        </div>
    )
}