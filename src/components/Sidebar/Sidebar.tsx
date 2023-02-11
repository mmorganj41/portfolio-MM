import './Sidebar.css';

import MenuList from '../MenuList/MenuList';

interface Props {
    open: boolean;
    transition: boolean;
    navLocation: number;
}

export default function Sidebar(props: Props) {
    const {open, transition, navLocation} = props;
    return (
        <div className='Sidebar'>
            <MenuList navLocation={navLocation} inline={false} />
        </div>
    )
}