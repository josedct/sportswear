import { currencyFormat } from '../util/Helper/Helper'

const ItemDetailInfo = ({name,category,model,price,color,style}) => {
    //Componenete que muestra la informacion basica del producto y usa a ITEMDETAILOPTION.
    
    return (
        <div className='row p-2 bg-light'>
            <div className='col p-0 m-1'>
                <h4 className='text-uppercase mb-0 text-warning'>
                    {`${category}`}
                </h4>
                <h1>
                    {`${name}`}
                </h1>
                <p className='text-muted text-uppercase fs-6 mb-0 fw-light'>
                    {`${model} - ${color} - ${style}`}
                </p>
                <p className='fs-2'>
                    {`${currencyFormat(price)}`}
                </p>
            </div>
        </div> 
    )
}

export default ItemDetailInfo