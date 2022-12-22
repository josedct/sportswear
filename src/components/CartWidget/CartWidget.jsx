import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext/CartContext"

const CartWidget = () => {
  const {cantTotal} = useCartContext()
  return (
    < Link to={'/carrito'} className="btn btn-warning position-relative">
        <i className="bi bi-cart fw-semibold"></i>
        {
        (cantTotal() != 0 && cantTotal()) ?
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill badge text-bg-secondary fw-semibold"> 
            {cantTotal()}
            <span className="visually-hidden">unread messages</span>
          </span>
        :
          ""
        }
    </Link>
  )
}

export default CartWidget