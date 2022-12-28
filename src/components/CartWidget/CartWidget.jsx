import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext/CartContext'

const CartWidget = () => {
  const {totalQuantity} = useCartContext()
  
  return (
    < Link to={'/cart'} className='btn btn-warning position-relative'>
        <i className='bi bi-cart fw-semibold'></i>
        {
        (totalQuantity()) ?
          <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill badge text-bg-secondary fw-semibold'> 
            {totalQuantity()}
            <span className='visually-hidden'>unread messages</span>
          </span>
        :
          ''
        }
    </Link>
  )
}

export default CartWidget