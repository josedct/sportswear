import { NavLink } from 'react-router-dom'
import IconDefault from './../../assets/icono_circulo.svg'

const NavItem = ({textlink = 'NavItem', urllink = 'none' ,icondefault = IconDefault}) => {
  //Component para generar el enlace a las diferentes categorias, se hace uso de NavLink para captura que link esta activo y darle un estilo propio.
  return (
    <li className="nav-item px-2 text-start">
        < NavLink to={`/categoria/${urllink}`} className={({ isActive }) => isActive ? "nav-link text-uppercase fw-semibold text-warning" : "nav-link text-uppercase fw-semibold text-muted"} >
          <img src={icondefault} alt="Icono por Default"  className='mx-1 p-1 rounded-circle bg-dark bg-opacity-25' width={24}/> 
          {textlink}
        </NavLink>
    </li>
  )
}

export default NavItem