import './Carousel.css';
import { useEffect, useState } from 'react';

interface Props {
    images: string[]
}
const delay = 6000;

export default function Carousel(props: Props) {
    const {images} = props;
    const [index, setIndex] = useState(0);

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
                        <img src={image} />
                    </div>
                ))}
            </div>
            <div className='dots'>
                {images.map((_, i) => (
                    <div key={i} className='dot' />
                ))}
            </div>
        </div>
    )
}