import { useState } from "react";
import styled from "styled-components";

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
    padding-right: 1rem;
    
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
}

export default function Burger(props: Props) {
    const {transition} = props;
    const [open, setOpen] = useState(false);

    function handleOpen() {
        setOpen(!open);
    }

    return (
        <StyledBurger open={open} transition={transition} onClick={handleOpen}>
            <div></div>
            <div></div>
            <div></div>
        </StyledBurger>
    )
} 