import './MenuList.css';

import styled from "styled-components";

interface Props {
    navLocation: number;
    inline: boolean;
}

const StyledLi = styled.li<{navLocation: number}>`
    &:nth-child(${({navLocation}) => navLocation}) a {
        color: var(--colorThemeExtraDark);
    }
`

export default function MenuList(props: Props) {
    const {navLocation, inline} = props;
    return(
    <>
        <StyledLi className={inline ? 'inlineList' : ''} navLocation={navLocation}><a href='#main'>Main</a></StyledLi>
        <StyledLi className={inline ? 'inlineList' : ''} navLocation={navLocation}><a href='#about'>About</a></StyledLi>
        <StyledLi className={inline ? 'inlineList' : ''} navLocation={navLocation}><a href='#projects'>Projects</a></StyledLi>
        <StyledLi className={inline ? 'inlineList' : ''} navLocation={navLocation}><a href='#contact'>Contact</a></StyledLi>
        <StyledLi className={inline ? 'inlineList' : ''} navLocation={navLocation}><a href='Resume_MichaelMorgan.pdf' target="_blank">Resume</a></StyledLi>
    </>
    );
}