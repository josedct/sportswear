import { useState, useEffect } from 'react'

const ItemCount = ({ size, stock, initial, onAdd = () => { } }) => {
    //Componente que muestra un contador de productos seleccionados para comprar, recibe la talla, el stock disponible y un numero inicial, asi como una funcion que muestra por consola cuantos productos seleccionaron
    const [quantity, setQuantity] = useState(initial)
    const [stateInc, setStateInc] = useState(false)
    const [stateDec, setStateDec] = useState(true)

    const increment = () => { setQuantity((quantity < stock) ? quantity + 1 : quantity) }
    const decrement = () => { setQuantity((quantity < 2) ? quantity : quantity - 1) }

    useEffect(() => {
        setStateInc((quantity < stock) ? false : true)
        setStateDec((quantity < 2) ? true : false)
    })

    useEffect(() => {
        setQuantity(initial)
    }, [size])

    return (
        <div className='row p-4 justify-content-center'>
            <div className='col d-flex justify-content-center'>
                <div className='input-group mx-3 w-75'>
                    <button
                        className='btn btn-outline-warning text-dark'
                        type='button'
                        onClick={decrement}
                        disabled={stateDec}
                    >
                        <i className='bi bi-dash-circle'></i>
                    </button>
                    <input
                        type='text'
                        className='form-control text-center'
                        value={quantity}
                        disabled
                        readOnly
                    />
                    <button
                        className='btn btn-outline-warning text-dark'
                        type='button'
                        onClick={increment}
                        disabled={stateInc}
                    >
                        <i className='bi bi-plus-circle'></i>
                    </button>
                </div>
            </div>
            <div className='row p-4'>
                <div className='col d-flex justify-content-center'>
                    <button
                        className='btn btn-warning mx-3 text-uppercase w-75'
                        type='button'
                        onClick={() => onAdd({ quantity, size })}
                    >
                        agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount

