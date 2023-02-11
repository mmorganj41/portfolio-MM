import './Sidebar.css';

import MenuList from '../MenuList/MenuList';
import styled from 'styled-components';

interface Props {
    open: boolean;
    transition: boolean;
    navLocation: number;
}

const StyledHamburgerMenu = styled.ul<{ open: boolean}>`
    transform: ${({open}) => open ? 'translateX(0px)' : 'translateX(250px)'}
`

export default function Sidebar(props: Props) {
    const {open, transition, navLocation} = props;

    return (
        <StyledHamburgerMenu className='Sidebar' open={open}>
            <MenuList navLocation={navLocation} inline={false} />
        </StyledHamburgerMenu>
    )
}