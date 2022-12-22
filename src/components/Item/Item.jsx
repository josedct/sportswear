import { Link } from 'react-router-dom'
import ProductDefImg from '../../assets/icono_bolsa.svg' 

const formatPrecio = (num) =>{
  return new Intl.NumberFormat("ES-MX",{
      style: "currency",
      currency: "MXN",
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    }
  ).format(num)
}

const Item = ({id="0",title="Titulo de producto",precio=1999.99,url=ProductDefImg}) => {
  return (
    // Componente que muestra un preview (Nombre, Precio e imagen del producto) de un producto en particular, se usa LINK para enviar al detalle del producto seleccionado. 
    <div className="col">
        <div  className="shadow card text-center border-light h-100">
            <img src={url} className="card-img-top" alt="Imagen por default"/>
            <div className="card-body bg-light">
                <h6 className="card-title">{title}</h6>
                <small className="card-subtitle mb-2 text-muted">{id}</small>
                <p className="card-text">{formatPrecio(precio)}</p>   
            </div>
            <div className="card-footer">
              <Link to={`/detalle/${id}`} className="btn btn-warning text-uppercase">Ver detalles</Link>
            </div>
        </div>
    </div>
  )
}

export default Item