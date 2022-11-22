import BrandItem from "../BrandItem/BrandItem"
import CartWidget from "../CartWidget/CartWidget"
import MenuButton from "../MenuButton/MenuButton"
import NavItem from "../NavItem/NavItem"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm">
        <div className="container-fluid">
            < BrandItem />
            <MenuButton />
            <div className="collapse navbar-collapse" id="navbarMenu">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    < NavItem textLink={'Chamarras'} />
                    < NavItem textLink={'Pants'} />
                    < NavItem textLink={'Playeras'} />
                    < NavItem textLink={'Sudaderas'} />
                    < NavItem textLink={'Tenis'} />
                </ul>
                <CartWidget />
            </div>
        </div>
    </nav>
  )
}

export default NavBar