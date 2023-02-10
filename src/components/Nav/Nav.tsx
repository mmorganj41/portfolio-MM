import { useEffect, useState } from 'react';
import styled from 'styled-components';
import './Nav.css'

const scrollTransition = 64;


const StyledNav = styled.nav<{ transition: boolean}>`
  height: ${({transition}) => transition ? '100px': '50px'};
  background-color: ${({transition}) => transition ? 'transparent' : 'var(--colorThemeDark)'};
  color: ${({transition}) => transition ? 'var(--colorThemeExtraDark)': 'black'};
`

interface Props {
  useWindowScroll: Function;
}

export default function Nav(Props: Props){
    const {useWindowScroll} = Props;
    const scrollY = useWindowScroll();
    let transition = scrollY > scrollTransition;
    console.log(transition);
    return (
      <StyledNav className='navbar Nav' transition={transition}>
        <span role="img" aria-label="bricks">
          🧱
        </span>{" "}
        Michael
      </StyledNav>
    );
  };
