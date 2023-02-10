import { useEffect, useState } from 'react';
import styled from 'styled-components';
import './Nav.css'

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


const StyledNav = styled.nav`
`

export default function Nav(){
    const scrollY = useWindowScroll();
    return (
      <StyledNav className='navbar Nav'>
        <span role="img" aria-label="bricks">
          🧱
        </span>{" "}
        Michael
      </StyledNav>
    );
  };
