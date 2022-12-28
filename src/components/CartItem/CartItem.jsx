import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext/CartContext'
import { currencyFormat, dirProducts } from '../util/Helper/Helper'

const CartItem = ({ product, index }) => {
    const { removeItemOfList } = useCartContext()
    const { name, model, image, price, size, quantity } = product

    return (
        <li className={`${(index % 2)
            ? 'list-group-item d-flex justify-content-start shadow list-group-item-light'
            : 'list-group-item d-flex justify-content-start shadow list-group-item-warning'}`}
        >
            <div className='col-3 d-flex flex-column justify-content-center align-items-center'>
                <img
                    src={`${dirProducts}/${model}/${image[0]}`}
                    className='img-fluid rounded shadow'
                    alt={image[0]}
                />
            </div>
            <div className='col-9 px-4'>
                <div className='d-flex w-100 justify-content-between'>
                    <div>
                        <h5 className='mb-1'>
                            {name}
                        </h5>
                    </div>
                    <div>
                        <span className='badge rounded-pill text-bg-warning'>
                            <span className='badge me-2 rounded-pill text-bg-dark '>
                                {`${currencyFormat(price)} X ${quantity}`}
                            </span>
                            {`${currencyFormat(price * quantity)}`}
                        </span>
                    </div>
                </div>
                <small className='fw-semibold'>
                    {`MOD: ${model}`}
                </small>
                <p className='my-1 d-flex'>
                    <span className='text-bg-dark p-1 border border-dark rounded-start text-uppercase'> 
                        <small>Talla</small> 
                    </span> 
                    <span className='py-1 px-3 border border-dark rounded-end fw-semibold'> 
                        <small>{size}</small>
                    </span>  
                </p>
                <p className='my-1 d-flex'>
                    <span className='text-bg-dark p-1 border border-dark rounded-start text-uppercase'> 
                        <small>Cantidad</small>
                    </span> 
                    <span className='py-1 px-3 border border-dark rounded-end fw-semibold'>
                        <small>{quantity}</small>
                    </span>   
                </p>
                < Link
                    to={`/detail/${model}`}
                    className='btn btn-warning me-2 text-uppercase'
                    title='Ver producto'
                >
                    <i className='bi bi-eye'></i>
                </ Link >
                <button
                    className='btn btn-warning me-2 text-uppercase'
                    onClick={() => removeItemOfList(model, size)}
                    title='Eliminar Prducto'
                >
                    <i className='bi bi-trash3'></i>
                </button>
            </div>
        </li>
    )
}

export default CartItem