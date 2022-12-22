import { useCartContext } from "../../context/CartContext/CartContext"
import CartListItem from "../CartListItem/CartListItem"

const CartListContainer = () => {
    const {cantTotal} = useCartContext()
    return (
        <div className="container p-4 d-flex justify-content-center flex-column">
            <h1 className='text-uppercase text-warning bg-dark text-center p-2 my-4 shadow-lg'>Carrito de compras</h1>
            {
                cantTotal() > 0 ?
                    <CartListItem/>
                :
                    <div className="row bg-light p-5 m-4 rounded shadow">
                        <span className="text-uppercase text-center fs-2"> No hay productos en el carrito</span>
                    </div>
            }
        </div>
    )
}

export default CartListContainer