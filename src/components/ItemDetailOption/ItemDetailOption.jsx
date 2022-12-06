import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount"

const showNumItems = (itemshop) => {
    console.log(`Se compraron: ${itemshop.count} producto(s) de la talla ${itemshop.talla}`)
}

const ItemDetailOption = ({stock}) => {
    //Componente que muestra las opciones de compra dependiendo del stock disponible, permite seleccionar una talla en particular y asi poder comprar las piezas necesarias, usa ITEMCOUNT.
    const [stockCant, setStockCant] = useState(stock[stock.length - 1].CANTIDAD)
    const [stockTalla, setStockTalla] = useState(stock[stock.length - 1].TALLA)
    const [init, setInit] = useState(1)

    const tallaSeleccionada = (event)=>{
        setStockCant(event.target.value);
        setStockTalla(event.target.id)
        setInit(1)
    }

    return (
        <div className="container">
            <div className="row p-2 bg-light d-flex justify-content-center">
                <h4 className="text-center text-uppercase">Tallas</h4>
                {    
                    stock.map(opc =>
                        <div key={opc.TALLA} className="col-2 p-0 m-1">
                            <input type="radio" className="btn-check" name="options" id={opc.TALLA} autoComplete="off" defaultChecked={true} onClick={tallaSeleccionada} value={opc.CANTIDAD} disabled={(opc.CANTIDAD>0)? false : true}/>
                            <label className={`btn btn-outline-warning w-100 text-dark ${(opc.CANTIDAD>0)? "" :"text-decoration-line-through bg-dark bg-opacity-25"}`} htmlFor={opc.TALLA}>{`${opc.TALLA}`}</label>
                        </div>
                    )
                }
                <h6 className="text-center fs-6 text-muted"> Talla: <span> {stockTalla} </span>   Disponibles: <span> {stockCant} </span> </h6>
            </div>
            <ItemCount talla={stockTalla} stock={stockCant} initial={init} onAdd={showNumItems}/>
        </div>
    )
}

export default ItemDetailOption