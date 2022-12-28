import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext/CartContext'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetailOption = ({product}) => {
    //Componente que muestra las opciones de compra dependiendo del stock disponible, permite seleccionar una talla en particular y asi poder comprar las piezas necesarias, usa ITEMCOUNT.
    const {stock} = product
    const [stockQuantity, setStockQuantity] = useState(stock[stock.length - 1].quantity)
    const [stockSize, setStockSize] = useState(stock[stock.length - 1].size)
    const [initQuantity, setInitQuantity] = useState(1)
    const [isAdd,setIsAdd] = useState(false)
    const {addToCart} = useCartContext()

    const selectSize = (ev)=>{
        const {value, id} = ev.target
        setStockQuantity(value);
        setStockSize(id)
        setInitQuantity(1)
    }

    const addItems = (itemInfoShop) => {
        addToCart({...product,...itemInfoShop})
        setIsAdd(true)
    }

    return (
            (!isAdd) ? 
                <div className='row p-2 bg-light d-flex justify-content-center'>   
                    <h4 className='text-center text-uppercase'>Tallas</h4>
                        {stock.map(({size,quantity}) =>
                            <div key={size} className='col-2 p-0 m-1'>
                                <input type='radio' 
                                    className='btn-check' 
                                    name='options' 
                                    id={size} 
                                    autoComplete='off' 
                                    defaultChecked={true} 
                                    onClick={selectSize} 
                                    value={quantity} 
                                    disabled={(quantity>0)? false : true}
                                />
                                <label 
                                    className={`${(quantity>0)
                                                ? 'btn btn-outline-warning w-100 text-dark' 
                                                : 'btn btn-outline-warning w-100 text-dark text-decoration-line-through bg-dark bg-opacity-25'
                                    }`}
                                    htmlFor={size}
                                >
                                    {`${size}`}
                                </label>
                            </div>
                        )}
                    <h6 className='text-center fs-6 text-muted'> 
                        Talla: <span> {stockSize} </span>   
                        Disponibles: <span> {stockQuantity} </span> 
                    </h6>
                    < ItemCount 
                        size={stockSize} 
                        stock={stockQuantity} 
                        initial={initQuantity} 
                        onAdd={addItems}
                    />
                </div>
                :
                <div className='row p-2 bg-light d-flex justify-content-center'>
                    < Link to={'/'} className='btn btn-warning m-2 w-50 text-uppercase' > 
                        Ver Catálogo 
                    </ Link >
                    < Link to={'/cart'} className='btn btn-warning m-2 w-50 text-uppercase' > 
                        Ver Carrito 
                    </ Link >
                    <button onClick={()=>setIsAdd(false)} className='btn btn-warning m-2 w-50 text-uppercase'>
                        Ver Tallas 
                    </button>
                </div>
    )
}

export default ItemDetailOption
