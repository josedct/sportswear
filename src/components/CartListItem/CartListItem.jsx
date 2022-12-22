import { useCartContext } from "../../context/CartContext/CartContext"
import CartForm from "../CartForm/CartForm"
import CartItem from "../CartItem/CartItem"

const formatPrecio = (num) =>{
    return new Intl.NumberFormat("ES-MX",{
            style: "currency",
            currency: "MXN",
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
        }
    ).format(num)
}

const CartListItem = () => {
    const {cartList,cantTotal,emptyList,costTotal} = useCartContext()

    return (
        <div className="row d-flex gap-3 justify-content-center">
            <ul className="list-group px-2 col-md-11 col-lg-7">
                {cartList.map((prod,index) =>
                    <CartItem key={`${prod.MODELO}${prod.talla}`} prod={prod} index={index}/>
                )}
                <li className="list-group-item d-flex justify-content-end shadow">
                        <div className="col-2">
                            <button className="btn btn-warning me-2 text-uppercase" onClick={emptyList} title="Vaciar Carrito"><i className="bi bi-cart-x"></i> vaciar </button>
                        </div>
                        <div className="col-10 px-4">
                            <div className="d-flex w-100 justify-content-between">
                                <div>
                                    <span className="mb-1 fs-3 fw-semibold">Total </span><small>({cantTotal()} producto(s))</small>
                                </div>
                                <div>
                                    <span className="badge rounded-pill text-bg-warning fs-6">{`${formatPrecio(costTotal())}`}</span>
                                </div>
                            </div>
                        </div>
                </li>
            </ul>
            <CartForm />
        </div>
    )
}

export default CartListItem