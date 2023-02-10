import { useEffect, useState } from 'react';
import styled from 'styled-components';
import './Nav.css'

const scrollTransition = 64;


const StyledNav = styled.nav<{ transition: boolean}>`
  height: ${({transition}) => transition ? '100px': '50px'};
  background-color: ${({transition}) => transition ? 'transparent' : 'var(--colorThemeExtraDark)'};
  color: ${({transition}) => transition ? 'var(--colorThemeExtraDark)': 'var(--colorThemeLight)'};
`

const StyledList = styled.ul<{ transition: boolean}>`
  padding-top: ${({transition}) => transition ? '25px': 'none'};
  
  li {
    display: ${({transition}) => transition ? '': 'inline'};
    
  }

  a {
    color: ${({transition}) => transition ? 'var(--colorThemeExtraDark)': 'var(--colorThemeLight)'};
  }

  a:hover {
    color: ${({transition}) => transition ? 'var(--colorThemeDark)': 'var(--colorThemeMedium)'};
  }
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
        <div>
        <span role="img" aria-label="bricks">
          🧱
        </span>{" "}
        Michael
        </div>
        <StyledList className='navitems Nav' transition={transition}>
          <li><a href='#main'>Main</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#contact'>Contact</a></li>
        </StyledList>
      </StyledNav>
    );
  };
