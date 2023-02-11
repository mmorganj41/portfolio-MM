import './Burger.css';

import { useState } from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar/Sidebar";

const StyledBurger = styled.div<{open: boolean; transition: boolean;}>`
    display: block;
    top: 0%;
    left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    z-index: 150;
    height: 26px;
    width: 32px;
    margin-top: .5rem;
    padding-right: 3rem;
    
        div {
        width: 2rem;
        height: 0.25rem;
        background: ${({ transition }) => transition ? 'var(--colorThemeExtraDark)' : 'white'};
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px; 
    
        :first-child {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        :nth-child(2) {
        opacity: ${({ open }) => open ? '0' : '1'};
        transform: ${({ open }) => open ? 'translateX(-20px)' : 'translateX(0)'};
        }

        :nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }  
`;

interface Props {
    transition: boolean;
    open: boolean;
    setOpen: Function;
    navLocation: number;
    largeEnough: boolean;
}

export default function Burger(props: Props) {
    const {transition, open, setOpen, navLocation, largeEnough} = props;

    function handleOpen() {
        setOpen(!open);
    }

    return (
        <div className='Burger'>
        {largeEnough ? null
        : <StyledBurger open={open} transition={transition} onClick={handleOpen}>
            <div></div>
            <div></div>
            <div></div>
        </StyledBurger>}        
        <Sidebar open={open} largeEnough={largeEnough} transition={transition} navLocation={navLocation}/>
        </div>
    )
} 