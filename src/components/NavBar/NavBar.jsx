import BrandItem from "../BrandItem/BrandItem"
import CartWidget from "../CartWidget/CartWidget"
import MenuButton from "../MenuButton/MenuButton"
import NavListItem from "../NavListItem/NavListItem"
import { useEffect, useState } from "react"
import { GetCategories } from "../util/GetCategories/GetCategories"
import { getDocs } from "firebase/firestore"

const NavBar = () => {
  //Componente contenedor de la barra de navegacion o menu con el BRAND, los NAVITEM y el CARTWIDGET para los diferentes enlaces de categorias. 
  const [navList,setNavList] = useState([])

  useEffect(()=>{
    const queryCategories = GetCategories()
    getDocs(queryCategories)
    .then(info => setNavList(info.docs.map(cat => ({id:cat.id,...cat.data()}))))
    .catch(err => console.log(err))
  },[])

  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-light shadow-sm">
        <div className="container-fluid">
            < BrandItem />
            < MenuButton />
            <div className="collapse navbar-collapse" id="navbarMenu">
              < NavListItem navitems={navList} />  
              < CartWidget />
            </div>
        </div>
    </nav>
  )
}

export default NavBar