import { useEffect, useState } from 'react';
import './Header.css'

const useWindowScroll = () => {
    const [windowScroll, setWindowScroll] = useState(0);

    useEffect(() => {
        const updatePosition = () => {
            setWindowScroll(window.pageYOffset);
        }

        window.addEventListener("scroll", updatePosition);
        updatePosition();

        return () => window.removeEventListener("scroll", updatePosition);
    }, []);

    return windowScroll;
}

export default function Header(){
    const scrollY = useWindowScroll(5);
    return (
      <h1 className={style("header", scrollY > 64 && "minify")}>
        <span role="img" aria-label="bricks">
          🧱
        </span>{" "}
        MASONIC
      </h1>
    );
  };