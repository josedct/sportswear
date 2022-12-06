import BrandItem from "../BrandItem/BrandItem"
import CartWidget from "../CartWidget/CartWidget"
import MenuButton from "../MenuButton/MenuButton"
import NavItem from "../NavItem/NavItem"
import IconChamarra from "../../assets/icono_chamarra.svg"
import IconPants from "../../assets/icono_pants.svg"
import IconPlayera from "../../assets/icono_playera.svg"
import IconSudadera from "../../assets/icono_sudadera.svg"
import IconTenis from "../../assets/icono_tenis.svg"

const NavBar = () => {
  //Componente contenedor de la barra de navegacion o menu con el BRAND, los NAVITEM y el CARTWIDGET para los diferentes enlaces de categorias. 
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-light shadow-sm">
        <div className="container-fluid">
            < BrandItem />
            <MenuButton />
            <div className="collapse navbar-collapse" id="navbarMenu">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    < NavItem textlink={'Chamarras'} urllink={'Chamarra'} icondefault={IconChamarra} />
                    < NavItem textlink={'Pants'} urllink={'Pants'} icondefault={IconPants} />
                    < NavItem textlink={'Playeras'} urllink={'Playera'} icondefault={IconPlayera} />
                    < NavItem textlink={'Sudaderas'} urllink={'Sudadera'} icondefault={IconSudadera} />
                    < NavItem textlink={'Tenis'} urllink={'Tenis'} icondefault={IconTenis} />
                </ul>
                <CartWidget />
            </div>
        </div>
    </nav>
  )
}

export default NavBar