import './Sidebar.css';

import MenuList from '../MenuList/MenuList';
import styled from 'styled-components';

interface Props {
    open: boolean;
    transition: boolean;
    navLocation: number;
    largeEnough: boolean;
}

const StyledHamburgerMenu = styled.ul<{ largeEnough: boolean, open: boolean, transition: boolean}>`
    transform: ${({largeEnough, open, transition}) => largeEnough ? (!transition ? 'translateX(250px)' : 'translateX(0px)') : (open ? 'translateX(0px)' : 'translateX(250px)')}
`

export default function Sidebar(props: Props) {
    const {open, transition, navLocation,largeEnough} = props;

    return (
        <StyledHamburgerMenu className='Sidebar' open={open} largeEnough={largeEnough} transition={transition}>
            <MenuList navLocation={navLocation} inline={false} />
        </StyledHamburgerMenu>
    )
}