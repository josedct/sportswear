import { NavLink } from 'react-router-dom'
import { dirIcons } from '../util/Helper/Helper'
import IconDefault from './../../assets/icono_circulo.svg'

const NavItem = ({ text = 'NavItem', link = 'none', icon = IconDefault }) => {
    //Component para generar el enlace a las diferentes categorias, se hace uso de NavLink para captura que link esta activo y darle un estilo propio.
    
    return (
        <li className='nav-item px-2 text-start'>
            < NavLink 
                to={`/category/${link}`} 
                className={({ isActive }) => isActive 
                    ? 'nav-link text-uppercase fw-semibold text-warning' 
                    : 'nav-link text-uppercase fw-semibold text-muted'} 
            >
                <img 
                    src={`${dirIcons}/${icon}`} 
                    alt={icon} 
                    className='mx-1 p-1 rounded-circle bg-dark bg-opacity-25' 
                    width={24}
                />
                {text}
            </ NavLink >
        </li>
    )
}

export default NavItem