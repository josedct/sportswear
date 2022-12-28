import BrandItem from '../BrandItem/BrandItem'
import CartWidget from '../CartWidget/CartWidget'
import MenuButton from '../MenuButton/MenuButton'
import NavListItem from '../NavListItem/NavListItem'
import { useEffect, useState } from 'react'
import { GetCategories } from '../util/GetCategories/GetCategories'

const NavBar = () => {
    //Componente contenedor de la barra de navegacion o menu con el BRAND, los NAVITEM y el CARTWIDGET para los diferentes enlaces de categorias. 
    const [navCategories,setNavCategories] = useState([])

    useEffect(()=>{
        GetCategories()
        .then(info => setNavCategories(info.docs.map(category => ({id:category.id,...category.data()}))))
        .catch(err => console.log(err))
    },[])

    return (
        <nav className='navbar sticky-top navbar-expand-lg bg-light shadow-sm'>
            <div className='container-fluid'>
                < BrandItem />
                < MenuButton />
                <div className='collapse navbar-collapse px-3' id='navbarMenu'>
                    < NavListItem navItems={navCategories} />  
                    < CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar