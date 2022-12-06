import { useState, useEffect } from "react"

const ItemCount = ({talla, stock, initial, onAdd = ()=>{}}) => {
  //Componente que muestra un contador de productos seleccionados para comprar, recibe la talla, el stock disponible y un numero inicial, asi como una funcion que muestra por consola cuantos productos seleccionaron
  const [count, setCount] = useState(initial)
  const [stateInc, setStateInc] = useState(false)
  const [stateDec, setStateDec] = useState(true) 

  const increment = ()=>{
    setCount((count<stock)? count+1 : count)
  }
  
  const decrement = ()=>{
    setCount((count<2)? count : count-1)
  }

  useEffect(()=>{
    setStateInc((count<stock) ? false : true)
    setStateDec((count<2) ? true : false )
  })

  useEffect(()=>{
    setCount(initial)
  },[talla])

  return (
      <div className="row p-4 justify-content-center">
        <div className="col d-flex justify-content-center ">
          <div className="input-group mx-3 w-50">
            <button className="btn btn-outline-warning text-dark" type="button" onClick={decrement} disabled={stateDec}>
              <i className="bi bi-dash-circle"></i>
            </button>
            <input type="text" className="form-control text-center" placeholder="" aria-label="Example text with two button addons" value={count} disabled readOnly/>
            <button className="btn btn-outline-warning text-dark" type="button" onClick={increment} disabled={stateInc}>
              <i className="bi bi-plus-circle"></i>
            </button>
          </div>
        </div>
          <div className="row p-4">
            <div className="col d-flex justify-content-center">
              <button  className="btn btn-warning mx-3 text-uppercase w-50" type="button" onClick={()=>onAdd({count, talla})}>agregar al carrito</button>
            </div>
          </div>
      </div>
  )
}

export default ItemCount