import NavItem from "../NavItem/NavItem"

const NavListItem = ({navitems}) => {
    const dirproductos = 'https://reactcoder.consultoriainformaticaon.com/icons'
    return (
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            { navitems.map(navitem => < NavItem key={navitem.id} textlink={navitem.text} urllink={navitem.link} icondefault={`${dirproductos}/${navitem.icon}`} /> ) }
        </ul>
    )
}

export default NavListItem