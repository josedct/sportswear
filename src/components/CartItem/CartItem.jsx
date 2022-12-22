import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext/CartContext"

const formatPrecio = (num) =>{
    return new Intl.NumberFormat("ES-MX",{
            style: "currency",
            currency: "MXN",
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
        }
    ).format(num)
}

const CartItem = ({prod,index}) => {
    const dirproductos = 'https://reactcoder.consultoriainformaticaon.com/productos'
    const {removeItemOfList} = useCartContext()
    return (
        <li className={`list-group-item d-flex justify-content-start shadow ${(index%2)?"list-group-item-light":"list-group-item-warning"}`} >
            <div className="col-2">
                <img src={`${dirproductos}/${prod.MODELO}/${prod.IMG[0]}`} className="img-fluid rounded shadow" alt="..."/>
            </div>
            <div className="col-10 px-4">
                <div className="d-flex w-100 justify-content-between">
                    <div>
                        <h4 className="mb-1">{prod.NOMBRE}</h4>
                    </div>
                    <div>
                        <span className="badge rounded-pill text-bg-warning">{`${formatPrecio(prod.PRECIO)}`}</span>
                    </div>
                </div>
                <small>{`MOD: ${prod.MODELO}`}</small>
                <p className="mb-1">Talla: <strong>{prod.talla}</strong></p>
                <p className="mb-1">Cantidad: <strong>{prod.count}</strong></p>
                <Link to={`/detalle/${prod.MODELO}`} className="btn btn-warning me-2 text-uppercase" title="Ver producto"><i className="bi bi-eye"></i></Link>
                <button className="btn btn-warning me-2 text-uppercase" onClick={()=>removeItemOfList(prod.MODELO,prod.talla)} title="Eliminar Prducto"><i className="bi bi-trash3"></i></button>
            </div>
        </li>
    )
}

export default CartItem