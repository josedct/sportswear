import { Link } from "react-router-dom"
import SportsWLogo from './../../assets/spwr-logo.svg'

const BrandItem = () => {
  //Compente para mostrar la imagen de la marca, se hace uso de LINK para la navegacion al Home o Inicio
  return (
    <Link to={'/'} className='navbar-brand'>
        <img src={SportsWLogo} alt="SportsWear Logo" width={150}/>
    </Link>
  )
}

export default BrandItem