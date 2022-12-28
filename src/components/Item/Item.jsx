import { memo } from 'react'
import { Link } from 'react-router-dom'
import ProductDefImg from '../../assets/icono_bolsa.svg'
import { currencyFormat, dirProducts } from '../util/Helper/Helper'

const Item = memo( ({ id = '0', name = 'Titulo de producto', price = 1999.99, imgName = ProductDefImg }) => {
    // Componente que muestra un preview (Nombre, Precio e imagen del producto) de un producto en particular, se usa LINK para enviar al detalle del producto seleccionado. 
    return (
        <div className='col'>
            <div className='shadow card text-center border-light h-100'>
                <img src={`${dirProducts}/${id}/${imgName}`} className='card-img-top' alt={imgName} />
                <div className='card-body bg-light'>
                    <h6 className='card-title'>
                        {name}
                    </h6>
                    <small className='card-subtitle mb-2 text-muted'>
                        {id}
                    </small>
                    <p className='card-text'>
                        {currencyFormat(price)}
                    </p>
                </div>
                <div className='card-footer'>
                    < Link to={`/detail/${id}`} className='btn btn-warning text-uppercase' >
                        Ver detalle 
                    </ Link >
                </div>
            </div>
        </div>
    )
})

export default Item