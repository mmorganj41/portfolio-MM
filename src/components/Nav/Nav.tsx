import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Burger from '../Burger/Burger';
import './Nav.css'

const scrollTransition = 64;


const StyledNav = styled.nav<{ transition: boolean}>`
  height: ${({transition}) => transition ? '100px': '50px'};
  background-color: ${({transition}) => transition ? 'transparent' : 'var(--colorThemeExtraDark)'};
  color: ${({transition}) => transition ? 'var(--colorThemeExtraDark)': 'var(--colorThemeLight)'};
`

const StyledList = styled.ul<{ transition: boolean; navLocation: number}>`
  padding-top: ${({transition}) => transition ? '25px': 'none'};
  
  li {
    display: ${({transition}) => transition ? '': 'inline'};
    
  }

  a {
    color: ${({transition}) => transition ? 'var(--colorThemeExtraDark)': 'var(--colorThemeLight)'};
  }

  li:nth-child(${({navLocation}) => navLocation}) a {
    color: var(--colorThemeOrange);
  }

  a:hover {
    color: ${({transition}) => transition ? 'var(--colorThemeDark)': 'var(--colorThemeMedium)'};
  }
`

interface Props {
  containerScroll: number;
  navLocation: number;
}

export default function Nav(Props: Props){
    const {containerScroll, navLocation} = Props;
    let transition = containerScroll > scrollTransition;
    console.log('nav location: ',navLocation);
    return (
      <StyledNav className='navbar Nav' transition={transition}>
        <div>
        <span role="img" aria-label="bricks">
          🧱
        </span>{" "}
        Michael
        </div>
        {!transition 
        ? (<StyledList className='navitems Nav' transition={transition} navLocation={navLocation}>
          <li><a href='#main'>Main</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#contact'>Contact</a></li>
        </StyledList>)
        : null }
        <Burger transition={transition}/>
      </StyledNav>
    );
  };
