import ItemDetailOption from "../ItemDetailOption/ItemDetailOption"

const formatPrecio = (num) =>{
    return new Intl.NumberFormat("ES-MX",{
        style: "currency",
        currency: "MXN",
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      }
    ).format(num)
}

const ItemDetailInfo = ({nombre,categoria,modelo,precio,stock,color,estilo}) => {
    //Componenete que muestra la informacion basica del producto y usa a ITEMDETAILOPTION.
    return (
    <div className="container p-4 m-2 h-100">
        <div className="row p-2 bg-light">
            <div className="col p-0 m-1">
                <h4 className="text-uppercase mb-0 text-warning">{`${categoria}`}</h4>
                <h1>{`${nombre}`}</h1>
                <p className="text-muted text-uppercase fs-6 mb-0 fw-light">{`${modelo} - ${color} - ${estilo}`}</p>
                <p className="fs-2">{`${formatPrecio(precio)}`}</p>
            </div>
        </div>
        
        <div className="row p-2 bg-light">
            <div className="col-12 p-0">
                < ItemDetailOption stock={stock} />
            </div>
        </div>
    </div>
  )
}

export default ItemDetailInfo