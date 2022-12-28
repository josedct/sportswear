import NavItem from '../NavItem/NavItem'

const NavListItem = ({ navItems }) => {
    return (
        <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            {navItems.map(({ id, text, link, icon }) => 
                < NavItem 
                    key={id} 
                    text={text} 
                    link={link} 
                    icon={icon} 
                />
            )}
        </ul>
    )
}

export default NavListItem