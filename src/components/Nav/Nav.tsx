import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import Burger from '../Burger/Burger';
import MenuList from '../MenuList/MenuList';
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
    display: inline;
  }
`


interface Props {
  containerScroll: number;
  navLocation: number;
}

export default function Nav(Props: Props){
    const {containerScroll, navLocation} = Props;
    const [windowSize, setWindowSize] = useState(0);
    const [open, setOpen] = useState(false);

    useEffect(() => {
      updateWindowSize();
      window.addEventListener("resize", updateWindowSize);
      return () => {window.removeEventListener("resize", updateWindowSize)};
    }, []);

    const WINDOW_TRANSITION = 1500;

    const largeEnough = windowSize >= WINDOW_TRANSITION;

    const updateWindowSize = () => {
      setWindowSize(window.innerWidth);
    }

    let transition = containerScroll > scrollTransition;
  
    console.log('nav location: ',navLocation);
    return (
      <>
        <StyledNav className='navbar Nav' transition={transition}>
          <div>
          <span role="img" aria-label="bricks">
            &nbsp;🧱
          </span>{" "}
          </div>
          {!transition && largeEnough
          ? (<StyledList className='navitems Nav' transition={transition} navLocation={navLocation}>
              <MenuList navLocation={navLocation} inline={true} />
            </StyledList>)
          : null }
          <Burger transition={transition} largeEnough={largeEnough} navLocation={navLocation} open={open} setOpen={setOpen}/>
          
        </StyledNav>
      </>
    );
  };
